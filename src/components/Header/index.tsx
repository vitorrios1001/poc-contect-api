import React from 'react'

import { ROUTES } from '../../routes'
import { Link } from 'react-router-dom'

const Header = () => {
  const renderMenu = (
    ROUTES.filter(route => route.isMenu)
      .map((menu) => (
      <li key={menu.key}>
        <Link to={menu.path}>{menu.key}</Link>
      </li>
    ))
  )

  return (
    <ul>
      {renderMenu}
    </ul>
  )
}

export default Header
