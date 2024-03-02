import React from 'react';
import './Services.css';
import HearthEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import curriculo from '../Services/Curriculo.pdf'
import {motion, transform}from 'framer-motion'
const services = () => {
const transition = {duration : 1 , type : 'spring'}
  return (
     <div className="services">
        {/*lado esquerdo */}
        <div className="awesome">
        <span>Meus</span>
        <span>Serviços</span>
        <spane>
            Buscando sempre novas oportunidades
            <br />
            sempre aprendendo
        </spane>
        <a href={curriculo} download={curriculo}>
        <button className="button s-button">Baixar Curriculo</button>
        </a>
        <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*lado direito*/}
        <div className="cards" >
            
        <motion.div 
        whileInView={{left: '48rem'}}
        initial={{left: '32%'}}
        transition={transition}
        style={{right: '32rem'}}>
                <Card
                emoji = {HearthEmoji}
                heading = {'Hardware'}
                detail = {"Informática avançada na parte física!"}
                />
            </motion.div>
        <motion.div 
        whileInView={{left: '26rem'}}
        initial= {{left: '24%'}}
        transition={transition}
        
        style={{top: "55rem", left: "22rem" }}>
        <Card
            emoji ={Glasses}
            heading ={'Dessenvolverdor'}
            detail = {"Python,JS,Css,C++,HTML."}
            />
        </motion.div>
        <motion.div 
            whileInView= {{left:'15rem'}}
            initial= {{left: '43%'}}
        style={{top: "72rem", left: "8rem" }}>
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Uma boa interface é simples e fácil de utilizar"}
        />
        </motion.div>
            
        
        
        
        /
        </div>
     </div>
  )
}

export default services