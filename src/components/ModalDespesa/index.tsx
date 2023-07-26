import { useEffect, useState } from 'react';

import { createDespesa, updateDespesa } from '../../services/despesaService';
import { DespesaData } from '../../interfaces/Despesa';
import { initialValues } from './data';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';

import Form from './Form';
import SubmitButton from '../SubmitButton';

import { Container } from './styles';

interface ModalDespesaProps {
    isOpen: boolean
    toggle: () => void;
    addToList: (despesa: DespesaData) => void;
    updateList: (despesa: DespesaData) => void;
    despesa: DespesaData
}

export function ModalDespesa ({ isOpen, toggle, despesa, addToList, updateList } : ModalDespesaProps) {
    const [current, setCurrent] = useState<DespesaData>(initialValues);

    useEffect(() => {
        if (despesa)
            setCurrent(despesa);
        else
            setCurrent(initialValues);
    }, [despesa]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        
        setCurrent(prevState => {
          return {...prevState, [name]: value};
        });
    }

    const handleSubmit = async () => {
        const data = {
            ...current, 
            categoryId: current.categoryId ? current.categoryId : null
        } as DespesaData;

        if (data.id) {
            await updateDespesa(data)
            .then(resp => {
                if (resp?.status === 201) {
                    updateList(resp.data);
                    toast.success(resp.message);
                    toggle();
                } else {
                    toast.error(resp);
                }
            });
        } else {
            await createDespesa(data)
            .then(resp => {
                if (resp?.status === 201) {
                    addToList(resp.data);
                    toast.success(resp.message);
                    toggle();
                } else {
                    toast.error(resp);
                }
            });
        }
    }

    return (
        <Container>
            <Modal isOpen={isOpen} centered toggle={toggle}>
                <ModalHeader toggle={toggle}>Despesa</ModalHeader>
                
                <ModalBody>
                    <Form current={current} onChange={handleChange}/>
                </ModalBody>

                <ModalFooter>
                    <SubmitButton 
                        onSubmit={handleSubmit}
                        title={current.id ? "Atualizar" : "Salvar"}
                    />
                    
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}