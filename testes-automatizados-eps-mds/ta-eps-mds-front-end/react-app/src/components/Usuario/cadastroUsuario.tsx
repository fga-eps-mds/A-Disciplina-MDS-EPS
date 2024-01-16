import {useEffect, useState} from 'react';
import {
    Button,
    chakra,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {Input, Select} from '../FormFields';
import {useLoading} from '../../hooks/useLoading';
import {SituacaoUsuario} from '../../types/usuario';
import {validarCPF} from '../../utils/validators.utils';

import { UsuarioService } from '../../services/usuario.service'

const { create: createUser, update: updateUser } = UsuarioService;

type FormValues = {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    situacao: SituacaoUsuario;
};

interface CreationModalProps {
    isOpen: boolean;
    onClose: () => void;
    externalProcess?: ExternalProcess;
}

interface ExternalProcess {
    record?: string;
    nickname?: string;
    flow?: string;
    priority?: string;
}

const validationSchema = yup.object({
    nome: yup
        .string()
        .required("Preencha o nome do usuário")
        .max(50, "O nome não pode exceder os 50 caracteres"),
    cpf: yup
        .string()
        .required("Preencha o CPF")
        .test('is-valid-cpf', 'CPF inválido', valor => validarCPF(valor)),
    situacao: yup
              .string()
              .required("Preencha a situação"),
});

export function ModalCadastroUsuario({ isOpen, onClose, afterSubmission, usuario }: CreationModalProps) {

    registerLocale("pt-BR", el);

    const { handleLoading } = useLoading();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
        reValidateMode: "onChange",
    });

    const onSubmit = handleSubmit(async (formData) => {
        handleLoading(true);

        const obj = {
            ...formData,
            dataNascimento: birthDate,
            cpf: formData.cpf.replace(/\D/g, '')
        };

        let res;

        if(usuario)
            res = await updateUser(usuario.id, obj);
        else
            res = await createUser(obj);

        handleLoading(false);

        afterSubmission(res);

    });

    useEffect(() => reset(), [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setBirthDate(new Date())
            const { nome, cpf, dataNascimento, situacao } = usuario || {};
            if (nome) setValue('nome', nome);
            if(dataNascimento) setBirthDate(new Date(dataNascimento));
            if(situacao) setValue('situacao', situacao);
            if (cpf) setValue('cpf', cpf);

        }
    }, [isOpen]);

    const [birthDate, setBirthDate] = useState(new Date());

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={["full", "xl"]} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{usuario ? 'Editar ' : 'Cadastrar '} usuário</ModalHeader>
                <ModalCloseButton/>
                <chakra.form onSubmit={onSubmit}>
                    <ModalBody display="flex" flexDir="column" gap="3">
                        <Input
                            type="text"
                            label="Nome"
                            placeholder="Nome"
                            errors={errors.nome}
                            {...register('nome')}
                        />
                        <Input
                            type="text"
                            label="CPF"
                            placeholder="000.000.000-00"
                            mask="999.999.999-99"
                            errors={errors.cpf}
                            {...register("cpf")}
                        />
                        <Text fontWeight={500}>Status</Text>
                        <Select
                            placeholder="Selecione"
                            color="gray.500"
                            options={
                                [
                                    {
                                        value: 'ACEITO',
                                        label: 'Aceito'
                                    },
                                    {
                                        value: 'PENDENTE',
                                        label: 'Pendente'
                                    },
                                    {
                                        value: 'REJEITADO',
                                        label: 'Rejeitado'
                                    }
                                ]
                            }
                            {...register("situacao")}
                            errors={errors.situacao}
                        />
                        <Text fontWeight={500}>Data nascimento</Text>
                        <DatePicker
                            locale="pt-BR"
                            placeholderText='dd/MM/yyyy'
                            selected={birthDate}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => setBirthDate(date)} />
                    </ModalBody>
                    <ModalFooter gap="2">
                        <Button variant="ghost" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme="blue" type="submit">
                            Salvar
                        </Button>
                    </ModalFooter>
                </chakra.form>
            </ModalContent>
        </Modal>
    );
}
