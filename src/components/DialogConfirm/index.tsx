import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SubmitButton from '../SubmitButton';

interface DialogConfirmProps {
    title: string
    body: string
    confirmText?: string
    cancelText?: string
    isOpen: boolean
    className?: string
    submit: () => Promise<void>;
    toggle: () => void;
}

export default function DialogConfirm ({ title, body, isOpen, className, toggle, confirmText="Confirmar", cancelText="Cancelar", submit } : DialogConfirmProps) {
    const handleConfirm = async () => {
        await submit();
        toggle();
    }

    return (
        <Modal className='sm' isOpen={isOpen} centered>
            <ModalHeader className={className}>{title}</ModalHeader>
            
            <ModalBody>
                {body}
            </ModalBody>

            <ModalFooter>
                <SubmitButton 
                    onSubmit={handleConfirm}
                    title={confirmText}
                    loadTitle={confirmText}
                />
                
                <Button color="secondary" onClick={toggle}>
                    {cancelText}
                </Button>
            </ModalFooter>
        </Modal>
    )
}