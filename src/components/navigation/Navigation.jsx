import React from 'react'
import { navLinks } from '../../data/content'
import Logo from '../../images/logo.svg'
// import '../../App.css'

const Navigation = () => {
    return (
        <div className='navigationSection'>
            <img src={Logo} alt="logo" className='logo' />
            <ul className='navLinks'>
            {navLinks.map((linkItem ,index)=>{
                return(
                    <li key={index} className='navLinkItem fontHeadnCTAs'> <a href={linkItem.url} > {linkItem.name}</a></li>
                )
            })}
            </ul>
        </div>
    )
}

export default Navigation
