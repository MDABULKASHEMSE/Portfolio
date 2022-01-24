import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.png";

function Contact() {
  return (
  
  <div className="contact component__space" id="Contact">
     <div className="row">
       <div className="col__2">
          <div className="contact__box">
              <div className="contact__meta">
                  <h1 className="hire__text">Hire Me</h1>
                  <p className="hire__text white">I'm available for 24 hours work. Connect with me via Phone : </p>
                  <p className="hire__text white"><strong>+88016-7303-0234</strong> Or Email : <strong>mdabulkashemse.info@gmail.com</strong></p>
              </div>
              <div className="input__box">
                 <input type="text" className="contact name" placeholder="Please Enter Your Name *"/>
                 <input type="text" className="contact email" placeholder="Please Enter Your Email *"/>
                 <input type="text" className="contact subject" placeholder="Please Write a Subject "/>
                 <textarea name="message" id="message" placeholder="Please Write Your Message"></textarea>
                 <button className="btn contact pointer" type="submit">Submit</button>
              </div>
          </div>
       </div>

         <div className="col__2">
          <img src={contactImg} alt="" className="contact__img"/>
         </div>

     </div>
  </div>

  );
}

export default Contact;
