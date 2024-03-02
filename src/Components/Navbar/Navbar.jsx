import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Pablo</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style= {{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Portifolio</li>
                    <li>Qualidades</li>
                </ul>
            </div>
             <button className="button n-button">
                Contato 
             </button>
        </div>
    </div>
  )
}

export default Navbar