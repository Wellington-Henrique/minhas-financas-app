import { Container } from "./styles";

const Spinner = () => {
    return (
        <Container>
            <div className="spinner">
                <div className="spinner__bounce1"></div>
                <div className="spinner__bounce2"></div>
                <div className="spinner__bounce3"></div>
            </div>
        </Container>
    );
}

export default Spinner;