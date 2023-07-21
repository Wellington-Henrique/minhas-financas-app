import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ReceitaData } from '../../interfaces/Receita';
import { initialValues } from './data';
import { Container } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { CategoriaData } from '../../interfaces/Categoria';
import { getCategoryByType } from '../../services/categoriaService';
import { toast } from 'react-toastify';
import { createReceita, updateReceita } from '../../services/receitaService';
import InputCurrency from '../InputCurrency';
import { DatePicker } from '../DatePicker';

interface ModalReceitaProps {
    isOpen: boolean
    toggle: () => void;
    addToList: (receita: ReceitaData) => void;
    updateList: (receita: ReceitaData) => void;
    receita: ReceitaData
}

export function ModalReceita ({ isOpen, toggle, receita, addToList, updateList } : ModalReceitaProps) {
    const [current, setCurrent] = useState<ReceitaData>(initialValues);
    const [categories, setCategories] = useState<CategoriaData[]>([])

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if (receita)
            setCurrent(receita);
        else
            setCurrent(initialValues);
    }, [receita]);

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
        } as ReceitaData;

        if (data.id) {
            await updateReceita(data)
            .then(resp => {
                if (resp?.status === 201) {
                    updateList(resp.data);
                    toast.success(resp.message);
                    toggle();
                } else {
                    toast.error(resp.message);
                }
            });
        } else {
            await createReceita(data)
            .then(resp => {
                if (resp?.status === 201) {
                    addToList(resp.data);
                    toast.success(resp.message);
                    toggle();
                } else {
                    toast.error(resp.message);
                }
            });
        }
    }

    const getCategories = async () => {
        await getCategoryByType("R")
        .then(resp => setCategories(resp.data ?? []));
    }

    return (
        <Container>
            <Modal isOpen={isOpen} centered toggle={toggle}>
                <ModalHeader toggle={toggle}>Receita</ModalHeader>
                
                <ModalBody>
                    <Input
                        title='Descrição'
                        name="description"
                        value={current?.description}
                        onChange={handleChange}
                    />

                    <InputCurrency
                        title='Valor'
                        name="price"
                        value={current.price}
                        onChange={handleChange}
                    />

                    <Select
                        title='Categoria'
                        name="categoryId"
                        value={current?.categoryId}
                        onChange={handleChange}
                    >
                        { categories.map(category => <option value={category.id}>{ category.description }</option>) }
                    </Select>

                    <DatePicker
                        title='Vencimento'
                        name="dueDate"
                        value={current?.dueDate?.toString()}
                        onChange={handleChange}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        {current.id ? "Atualizar" : "Salvar"}
                    </Button>
                    
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}