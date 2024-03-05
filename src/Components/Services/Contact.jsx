import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef} from 'react'
export const ContactUs = () => {
    const form = useRef();
    const [done , setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_98imq0k', 'template_y116g3m', form.current, {
            publicKey: 'ssOLjTGgRhUeIbCi6',
          })
          .then(                                          
            () => {
              console.log('SUCCESS!');
              setDone(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className='awesome'>
            <span>Entre em contato</span>
            <span>Contate-me</span>
            <div 
                className="blur s-blurl"
                style={{background: "#ABF1FF94"}}
            ></div>
            </div>
        </div>
        <div className="c-right" >
        <form ref={form} onSubmit = {sendEmail} >
            <input type="text" name="user_name" className="user" placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name = "message" className="user" placeholder="Messagem" />
            <input id='send' type= "submit" value="Send" className="button"/>
            <span>{done && "Sua mensagem foi enviada!"}</span>
            
             <div 
                className= "blur c-blurl" 
                style={{background: "var(--purple)"}}>
                </div>  
           
        </form>
        </div>
    </div>
  )
}

export default ContactUs