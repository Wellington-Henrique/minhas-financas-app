import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuLinkProps {
    path?: string
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string
    toogle: () => void
}

const MenuLink = ({path, Icon, title, toogle}: MenuLinkProps) => {
  return (
    <li>
        {path ?
        <NavLink onClick={toogle} to={path}>
            <Icon/>
            <span>{title}</span>
        </NavLink>
        :<div onClick={toogle}>
            <Icon/>
            <span>{title}</span>
        </div>}
    </li>
  )
}

export default MenuLink;