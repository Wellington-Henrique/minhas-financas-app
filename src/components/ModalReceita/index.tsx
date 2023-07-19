import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Container } from './styles';

interface ModalReceitaProps {
    isOpen: boolean
    toggle: any
}

export function ModalReceita ({isOpen, toggle} : ModalReceitaProps) {
    return (
        <Container>
            <Modal isOpen={isOpen} centered toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>
                    Modelo de modal
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Ação 1
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Ação 2
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}