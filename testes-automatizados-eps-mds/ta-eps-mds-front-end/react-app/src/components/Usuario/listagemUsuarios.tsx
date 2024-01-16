import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Heading,
    Button,
    Flex,
    Text,
    chakra,
    useToast,
    useDisclosure,
} from '@chakra-ui/react';
import {FaEdit, FaEraser, FaTrash} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioService } from '../../services/usuario.service'
import {useEffect, useState} from 'react';
import {formatDateTimeToBrazilian} from '../../utils/date.utils';
import {ModalCadastroUsuario} from './cadastroUsuario';
import {formatCPF} from '../../utils/formater.utils';
import {ModalConfirmacao} from '../Modals/modalConfirmacao';
import { Pagination as PaginationType } from '../../types/pagination';
import { Pagination } from "../../components/Pagination";
import {Input} from '../FormFields';
import {Icon, SearchIcon} from '@chakra-ui/icons';
import { ImSpinner8 } from "react-icons/im";

const {
    findAll: findAllUsers,
    findAllPaged: findAllUsersPaged,
    delete: deleteUserById,
} = UsuarioService;

const ListagemUsuarios = () => {

    const toast = useToast();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [cpfOrNameOrSituationFilter, setCpfOrNameOrSituationFilter] = useState<string>("");
    const [isFetchingUsers, setIsFetchingUsers] = useState(false);
    const [pageInfo, setPageInfo] = useState<PaginationType>();

    const {
        isOpen: isCreationOpen,
        onOpen: onCreationOpen,
        onClose: onCreationClose,
    } = useDisclosure();

    const {
        isOpen: isDeletionOpen,
        onOpen: onDeletionOpen,
        onClose: onDeletionClose,
    } = useDisclosure();

    const fetchUsers = async (selectedPage?: { selected: number }, cpfOrNameOrSituation = cpfOrNameOrSituationFilter) => {
        setIsFetchingUsers(true);
        const offset = selectedPage ? selectedPage.selected * 10 : 0;
        const { data, pagination, error } = await findAllUsersPaged({
            offset,
            filter: {
                cpfOrNameOrSituation,
            }
        });
        if (error) {
            toast({
                title: 'Erro ao buscar usuários',
                description: error.message,
                status: 'error',
            });
            return;
        }
        setIsFetchingUsers(false);
        setPageInfo(pagination);
        setUsers(data);
    };

    const deleteUserAndRefetch = async (id: number = selectedUser.id) => {
        const { error } = await deleteUserById(id);
        if (error) {
            toast({
                id: `toastr_${uuidv4()}`,
                title: 'Erro ao deletar usuário!',
                description: error.message,
                status: 'error',
            });
            return;
        }
        fetchUsers().finally(() => {
            onDeletionClose();
            toast({
                id: `toastr_${uuidv4()}`,
                description: 'Usuário deletado com sucesso.',
                status: 'success',
            });
        });
    }

    useEffect(() => {
        fetchUsers().finally();
    }, []);

    return (
            <>
                <style>
                    {`
                    @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                    `}
                </style>
                <Box>
                    <Flex justifyContent="space-between" alignItems="center" mb={4} width="930px">
                        <Heading as="h1" size="xl">Usuários</Heading>
                        <chakra.form
                            onSubmit={(e) => {
                                e.preventDefault();
                                fetchUsers().finally();
                            }}
                            width="55%"
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap="2"
                            ml="auto"
                            css={{
                                marginLeft: '1px',
                            }}>
                            <Input
                                color="black"
                                placeholder="Pesquise usuários por parte do nome, cpf ou situação"
                                variant="filled"
                                onChange={({ target }) => setCpfOrNameOrSituationFilter(target.value)}
                                value={cpfOrNameOrSituationFilter}
                            />
                            <Button
                                aria-label="botão de limpeza"
                                colorScheme="green"
                                justifyContent="center"
                                title={cpfOrNameOrSituationFilter && "Limpar filtro"}
                                isDisabled={!cpfOrNameOrSituationFilter}
                                onClick={() => {
                                    setCpfOrNameOrSituationFilter("");
                                    fetchUsers(undefined, '').finally();
                                }}
                            >
                                <Icon as={FaEraser} boxSize={4} />
                            </Button>
                            <Button
                                aria-label="botão de busca"
                                colorScheme="green"
                                justifyContent="center"
                                title="Pesquisar"
                                type="submit"
                            >
                                <SearchIcon boxSize={4} />
                            </Button>
                        </chakra.form>
                        <Button
                            onClick={() => {
                                setSelectedUser(null);
                                onCreationOpen();
                            }}
                            size="md"
                            fontSize="md"
                            colorScheme="green">
                            Adicionar usuário
                        </Button>
                    </Flex>
                    {
                        isFetchingUsers ?
                            <Flex justify="center" align="center" h="12vh">
                                <ImSpinner8
                                    speed="0.65s"
                                    color="green.500"
                                    size="xl"
                                    style={{ animation: "spin 1s linear infinite" }}
                                />
                            </Flex>
                            :
                            users.length === 0 ?
                                <Flex justify="center" align="center" h="12vh" w="100%">
                                    <Text fontSize="lg">Nenhum usuário encontrado. Verifique o filtro e tente novamente.</Text>
                                </Flex> :
                            <Table
                                variant="simple"
                                bg="white"
                                w='100%'
                                maxW='1140'
                                borderRadius="4"
                                size='lg'>
                                <Thead>
                                    <Tr>
                                        <Th>Nome</Th>
                                        <Th>CPF</Th>
                                        <Th>Data Nascimento</Th>
                                        <Th>Situação</Th>
                                        <Th>Operações</Th>
                                    </Tr>
                                </Thead>
                                    <Tbody>
                                        {users.map(usuario => (
                                            <Tr key={`usuario_${uuidv4()}`}>
                                                <Td>{usuario.nome}</Td>
                                                <Td>{formatCPF(usuario.cpf)}</Td>
                                                <Td>{formatDateTimeToBrazilian(usuario.dataNascimento)}</Td>
                                                <Td>{usuario.situacao}</Td>
                                                <Td>
                                                    <Button
                                                        title='Editar'
                                                        onClick={() => {
                                                            setSelectedUser(usuario);
                                                            onCreationOpen();
                                                        }}
                                                        size="sm"
                                                        mr={2}>
                                                        <FaEdit />
                                                    </Button>
                                                    <Button
                                                        title='Excluir'
                                                        onClick={() => {
                                                            setSelectedUser(usuario);
                                                            onDeletionOpen();
                                                        }}
                                                        size="sm"
                                                        colorScheme="red">
                                                        <FaTrash />
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                            </Table>
                    }
                    {pageInfo?.totalPages > 1 ? (
                        <Pagination
                            pageCount={pageInfo.totalPages}
                            currentPage={pageInfo.currentPage-1}
                            onPageChange={fetchUsers}
                            style={{ marginBottom: "10px" }}
                        />
                    ) : null}
                    <ModalCadastroUsuario
                        isOpen={isCreationOpen}
                        onClose={onCreationClose}
                        afterSubmission={({ error }) => {
                            const operacao = selectedUser ? 'editar' : 'cadastrar';
                            if(error) {
                                toast({
                                    id: `toastr_${uuidv4()}`,
                                    title: `Error ao ${operacao} usuário`,
                                    description: error.message,
                                    status: 'error',
                                });
                                return;
                            }
                            onCreationClose();
                            toast({
                                id: `toastr_${uuidv4()}`,
                                description: `Sucesso ao ${operacao} usuário`,
                                status: 'success',
                            });
                            fetchUsers().finally();
                        }}
                        usuario={selectedUser}
                    />
                    <ModalConfirmacao
                        isOpen={isDeletionOpen}
                        title='CONFIRMAÇÃO'
                        message='Confirmar deleção do usuário?'
                        onClose={onDeletionClose}
                        onConfirmation={deleteUserAndRefetch}
                    />
                </Box>
            </>
    )
};

export default ListagemUsuarios;
