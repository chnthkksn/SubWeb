import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({item, toggleNav}) => {
  return (
    <li className="nav-item">
      <Link to={item.path} onClick={() => toggleNav}> {item.title} </Link>
    </li>
  )
}

export default NavItem;