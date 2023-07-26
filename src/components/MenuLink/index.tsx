import React from 'react'
import { NavLink } from 'react-router-dom';

interface MenuLinkProps {
    path: string
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string
    toogle: () => void
}

const MenuLink = ({path, Icon, title, toogle}: MenuLinkProps) => {
  return (
    <li>
        <NavLink onClick={toogle} to={path}>
            <Icon/>
            <span>{title}</span>
        </NavLink>
    </li>
  )
}

export default MenuLink;