import React from 'react';
import './Services.css';
import HearthEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import curriculo from '../Services/Curriculo.pdf'
import {motion, transform}from 'framer-motion'
import DetailList from "./DetailList";

const services = () => {
    const transition = {duration : 1 , type : 'spring'}
    const details = ["Python", "JS", "Css", "C++", "HTML"];
    
    return (
        <div className="services">
            {/*lado esquerdo */}
            <div className="awesome">
            <span>Meus</span>
            <span>Serviços</span>
            <span>
                Buscando sempre novas oportunidades
                <br />
                sempre aprendendo
            </span>
            <a href={curriculo} download={curriculo}>
            <button className="button s-button">Baixar Curriculo</button>
            </a>
            <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*lado direito*/}
            <div className="cards" >
                <motion.div 
                whileInView={{left: '75%'}}
                initial={{left: '32%'}}
                transition={transition}
                style={{top: "110%", right: '32rem'}}>
                        <Card
                        emoji = {HearthEmoji}
                        heading = {'Hardware'}
                        detail = {"Informática avançada na parte física!"}
                        />
                </motion.div>
                <motion.div 
                whileInView={{left: '50%'}}
                initial= {{left: '24%'}}
                transition={transition}
                style={{top: "140%", left: "22%"}}>
                <Card
                    emoji ={Glasses}
                    heading ={'Desenvolvedor'}
                    detail = {<DetailList details={details} />}
                    />
                </motion.div>
                <motion.div 
                    whileInView= {{left:'75%'}}
                    initial= {{left: '43%'}}
                style={{top: "170%", left: "8%" }}>
                <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={"Uma boa interface é simples e fácil de utilizar"}
                />
                </motion.div>
                
            </div>
        </div>
    )
}

export default services