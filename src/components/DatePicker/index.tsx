import {useEffect, useState } from 'react';
import { Container } from './styles';

interface DataPickerData {
    className?: string
    name: string
    title?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean
}

const DatePicker = ({ className='', name, title, value, onChange, disabled=false } : DataPickerData) => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    if (value)
      setCurrentDate(value);
  }, [value]);

  return (
    <Container className={className}>
        {title && <label htmlFor={name}>{title}</label>}
        <input
            id={name}
            name={name}
            className='text-center'
            type={disabled ? "text" : "date"}
            value={ currentDate } 
            onChange={onChange}
            disabled={disabled}
        />
    </Container>
  )
}

export default DatePicker;