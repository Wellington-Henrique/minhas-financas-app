import React from 'react'
import { NavLink } from 'react-router-dom';

interface MenuLinkProps {
    path: string
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string
}

const MenuLink = ({path, Icon, title}: MenuLinkProps) => {
  return (
    <li>
        <NavLink to={path}>
            <Icon/>
            <span>{title}</span>
        </NavLink>
    </li>
  )
}

export default MenuLink;