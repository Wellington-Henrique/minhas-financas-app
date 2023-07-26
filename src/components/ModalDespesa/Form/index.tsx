import { useState, useEffect } from 'react';

import { ReceitaData } from '../../../interfaces/Receita';
import { CategoriaData } from '../../../interfaces/Categoria';

import DatePicker from '../../DatePicker';
import Input from '../../Input';
import InputCurrency from '../../InputCurrency';
import Select from '../../Select';
import { getCategoryByType } from '../../../services/categoriaService';

interface FormReceitaProps {
    current: ReceitaData
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function({current, onChange} : FormReceitaProps) {
    const [categories, setCategories] = useState<CategoriaData[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        await getCategoryByType("D")
        .then(resp => setCategories(resp.data ?? []));
    }
    
    return(
        <div className='row'>
            <Input
                className='col-lg-8 col-md-8 col-8 mb-3'
                title='Descrição'
                name="description"
                value={current?.description}
                onChange={onChange}
            />

            <DatePicker
                className='col-lg-4 col-md-4 col-4 mb-3'
                title='Vencimento'
                name="dueDate"
                value={current?.dueDate}
                onChange={onChange}
            />
            
            <Select
                className='col-lg-8 col-md-8 col-8 mb-3'
                title='Categoria'
                name="categoryId"
                value={current?.categoryId}
                onChange={onChange}
            >
                { categories.map(category => <option value={category.id}>{ category.description }</option>) }
            </Select>

            <InputCurrency
                className='col-lg-4 col-md-4 col-4 mb-3'
                title='Valor'
                name="price"
                value={current.price}
                onChange={onChange}
            />
        </div>
    )
}