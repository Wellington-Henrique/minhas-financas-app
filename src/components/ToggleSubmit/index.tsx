import { useState } from "react";

import { FiLoader } from "react-icons/fi";

import { Container } from "./styles";

interface SubmitButtonProps {
    className?: string
    children: any
    onSubmit: () => Promise<void>;
}

const ToogleButton = ({ onSubmit, className="", children } : SubmitButtonProps) => {
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);

        await onSubmit();

        setIsLoading(false);
    }

    return (
        <Container 
            className={className} 
            isLoading={isLoading}
            onClick={handleClick}
        >
            { isLoading ? <FiLoader/> : children }
        </Container>
    );
}

export default ToogleButton;