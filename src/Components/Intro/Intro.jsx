import React from 'react'
import './Intro.css'
import Whatsapp from '../../img/whatsapp.png'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'


const transition ={duration : 2, type: 'spring'}

const intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Olá! Eu sou </span>
                <span>Pablo Daniel</span>
                <spam>Explorando o universo binário e transformando bits em projetos reais.</spam>

            </div>

            <button className="button i-button">Contrate-me</button>
            <div className="i-icons">
                <a id='github-icon' href="https://github.com/MmonkeyBu" target='_blank'>
                    <img src={Github} alt="" />
                </a>
                <a id='linkedin-icon' href="https://www.linkedin.com/in/pablo-daniel-b1a6a7277/" target='_blank'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a id='instagram-icon' href="https://www.instagram.com/p_daniel_yy/" target='_blank'>
                    <img src={Instagram} alt="" />
                </a>      
                <a id='whatsapp-icon' href="https://api.whatsapp.com/send?phone=5583981662174&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portfólio
" target='_blank'>
                    <img style={{ height: '90px', width: '90px' }} src={Whatsapp} alt="" />
                </a>    
            </div>
        </div>  
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt="" 
                />
                <motion.div 
                initial={{top: '-4%', left: "-35%"}}
                whileInView={{left: '58%'}}
                transition={transition}
                style={{top: '-4%',left: '83%'}}
                >
                    <FloatingDiv image={Crown}  txt1='Desenvolvedor' txt2='Web'/>
                </motion.div>
                <motion.div
                initial={{left: '12rem', top: '18rem'}}
                whileInView={{left: '-10rem'}}
                transition={transition}
                 style={{top:`18rem`, left: `-15rem`}}>
                    <FloatingDiv image={thumbup} txt1='Proatividade +' txt2 = 'Segurança'/>
                </motion.div>
            {/* Aparencia de Blur*/}
            <div className="blur" style={{background: "rgb(236 210 255)"}} ></div>
            <div className="blur" style={{
                backgroud: '#C1f5FF',
                top: '15rem',
                width: '21rem',
                height: '12rem',
                left: '-9rem'
            }}></div>
            </div>
    </div>
  )
}

export default intro