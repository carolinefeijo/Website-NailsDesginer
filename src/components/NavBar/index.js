import React from 'react'
import './styles.css'

import { NavBarPrimary } from '../NavPrimary'
import { NavBarMobile } from '../NavBarMobile'

export const NavBar = () => {
  return (
    <div className="container-Navbar">
      <NavBarPrimary />
      <NavBarMobile />
    </div>
  )
}
