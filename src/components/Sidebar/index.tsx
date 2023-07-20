import{ useState } from 'react';

import MenuLink from '../MenuLink';

import { CgMenu } from 'react-icons/cg';
import { IoMdHome } from 'react-icons/io';

import { Container } from './styles';

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogle = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Container isMenuOpen={isMenuOpen}>
            <button type='button' onClick={toogle}>
                <CgMenu/>
            </button>
            
            <nav>
                <ul>
                    <MenuLink path='/receitas' Icon={IoMdHome} title='Receitas'/>
                    <MenuLink path='/despesas' Icon={IoMdHome} title='Despesas'/>
                </ul>
            </nav>
        </Container>
    );
}

export default Sidebar;