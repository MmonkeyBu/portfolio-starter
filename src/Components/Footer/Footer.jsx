import React from 'react'
import './Footer.css'

import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from "../../img/wave.png"

 const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt=""  style={{width: '100%'}}/>
        <div className="f-content">
            <span>pdnv2005@gmail.com</span>
            <div className="f-icons">
                <Whatsapp color= 'white' size='3rem'/>
                <Insta color= 'white' size='3rem'/>
                <Facebook color= 'white' size='3rem'/>
                <Github color= 'white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}
export default Footer