import React from 'react'
import logo from '../assets/images/Logo.png';
export default function Header() {
  return (
    <div className="bg-primary py-3">
      <img src={logo} className="logo pl-sm-9 pl-8" alt="logo"/>
    </div>
  )
}
