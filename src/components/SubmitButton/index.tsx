import { useState } from "react";

import { Button } from "reactstrap";
import SmallSpinner from "../SmallSpinner";

import { Container } from "./styles";

interface SubmitButtonProps {
    title?: string
    loadTitle?: string
    color?: string
    className?: string
    onSubmit: () => Promise<void>;
}

const SubmitButton = ({ title="Salvar", loadTitle='Salvando', onSubmit, color="success", className="" } : SubmitButtonProps) => {
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);

        await onSubmit();

        setIsLoading(false);
    }

    return (
        <Container className={className} isLoading={isLoading}>
            <Button
                color={color}
                className="spinner" 
                onClick={handleClick}
            >
                {isLoading ? 
                <><span>{loadTitle}</span><SmallSpinner/></>
                : <span>{title}</span>}
            </Button>
        </Container>
    );
}

export default SubmitButton;