import { useEffect, useState } from 'react';
import useUserContext from '../../hooks/useUserContext';

import { createReceita, updateReceita } from '../../services/receitaService';
import { ReceitaData } from '../../interfaces/Receita';
import { initialValues } from './data';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';

import Form from './Form';
import SubmitButton from '../SubmitButton';

import { Container } from './styles';

interface ModalReceitaProps {
    isOpen: boolean
    toggle: () => void;
    addToList: (receita: ReceitaData) => void;
    updateList: (receita: ReceitaData) => void;
    receita: ReceitaData
}

export function ModalReceita ({ isOpen, toggle, receita, addToList, updateList } : ModalReceitaProps) {
    const { currentUser } = useUserContext();
    const [current, setCurrent] = useState<ReceitaData>(initialValues);

    useEffect(() => {
        if (receita)
            setCurrent(receita);
        else
            setCurrent(initialValues);
    }, [receita]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setCurrent(prevState => {
          return {...prevState, [name]: value};
        });
    }

    const handleSubmit = async () => {
        const data = {
            ...current, 
            categoryId: current.categoryId ? current.categoryId : null
        } as ReceitaData;

        if (data.id) {
            await updateReceita(data, `${currentUser?.token}`)
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
            await createReceita(data, `${currentUser?.token}`)
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
                <ModalHeader toggle={toggle}>Receita</ModalHeader>
                
                <ModalBody>
                    <Form current={current} onChange={handleChange}/>
                </ModalBody>

                <ModalFooter>
                    <SubmitButton 
                        onSubmit={handleSubmit}
                        title={current.id ? "Atualizar" : "Salvar"}
                        loadTitle={current.id ? "Atualizando" : "Salvando"}
                    />
                    
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}