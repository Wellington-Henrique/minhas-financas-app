import { useEffect, useState } from 'react';

import { Input } from '../Input';
import { Container } from './styles';

interface InputMoneyProps {
  className?: string
  name: string
  title?: string
  placeholder?: string
  value: number
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DECIMAL_SIZE = 2;

const InputCurrency = ({ className='', name, title, placeholder, value, onChange, disabled=false } : InputMoneyProps) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  useEffect(() => {
    if (!isNaN(value)) {
      setCurrentValue(Number(value).toFixed(DECIMAL_SIZE).toString().replace('.', ','));
    } else {
      setCurrentValue("0,00")
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueRemoved = e.target.value.replace(',', '');

    const sizeSlice = valueRemoved.length - DECIMAL_SIZE;
    const newValue = [valueRemoved.slice(0, sizeSlice), '.', valueRemoved.slice(sizeSlice)].join(
      '',
    );

    onChange({
      ...e,
      target: {
        ...e.target,
        name: name,
        value: newValue
      },
    });
  };

  return (
    <Container>
        {title && <label htmlFor={name}>{title}</label>}
        <input
            className={className}
            id={name}
            name={name}
            placeholder={placeholder ?? title}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
        />
    </Container>
  );
};

export default InputCurrency;