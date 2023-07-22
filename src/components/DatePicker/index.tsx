import { useEffect, useState } from 'react';

import { isIsoDate } from '../../utils/validadionUtils';

import { Container } from './styles';

interface DataPickerData {
    className?: string
    name: string
    title?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean
    inLine?: boolean
}

const DatePicker = ({ className='', name, title, value, onChange, disabled=false, inLine=false } : DataPickerData) => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    if (isIsoDate(new Date(value).toISOString())) {
      const newDate = formatarDataISO8601(value);
      setCurrentDate(newDate);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.toString().length > 10)
      return;

    setCurrentDate(value);

    let temp = value.split("-");

    if (value && Number(temp[0]).toString().length < 4 && isIsoDate(new Date(value).toISOString()))
      return

    onChange({
      ...e,
      target: {
        ...e.target,
        name: name,
        value: new Date(value).toISOString()
      },
    });
  };

  function formatarDataISO8601(dataISO8601: string) {
    const data = new Date(dataISO8601);

    const ano = data.getUTCFullYear();
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const dia = String(data.getUTCDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  return (
    <Container className={className} inLine={inLine}>
        {title && <label htmlFor={name}>{title}</label>}
        <input
            id={name}
            name={name}
            className='text-center'
            type={disabled ? "text" : "date"}
            value={ currentDate }
            onChange={handleChange}
            disabled={disabled}
        />
    </Container>
  )
}

export default DatePicker;