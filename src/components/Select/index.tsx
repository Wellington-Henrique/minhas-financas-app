import { Container } from './styles';

interface InputData {
    className?: string
    name: string
    title?: string
    placeholder?: string
    value: any
    onChange: any
    disabled?: boolean
    children: any
}

const Select = ({ className='', name, title, placeholder, value, onChange, disabled=false, children } : InputData) => {
  return (
    <Container className={className}>
        {title && <label htmlFor={name}>{title}</label>}
        <select
            id={name}
            name={name}
            placeholder={placeholder ?? title}
            value={value}
            onChange={(e) => onChange(e)}
            disabled={disabled}
        >
          <option value=''>Selecione...</option>
          {children}
        </select>
    </Container>
  )
}

export default Select;