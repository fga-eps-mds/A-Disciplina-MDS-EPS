import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";

interface DeletionModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onConfirmation: any;
}

export function ModalConfirmacao({
                                  isOpen,
                                  title,
                                  message,
                                  onClose,
                                  onConfirmation,
                              }: DeletionModalProps) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={["full", "xl"]}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text> {message} </Text>
                </ModalBody>
                <ModalFooter gap="2">
                    <Button variant="ghost" onClick={onClose} size="sm">
                        Não
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => onConfirmation()}
                        size="sm">
                        Sim
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
