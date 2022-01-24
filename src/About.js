import React from 'react';
import './About.css';
import aboutImg from './img/about.png';



function About() {

    window.addEventListener("scroll", function(){
        const upToTop = this.document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
});

    return (
        <div className="about component__space" id="About">
            <div className="container">
                  <div className="row">
                      <div className="col__2">
                          <img src={aboutImg} alt="" className="about__img" />
                      </div>
                      <div className="col__2">
                              <h1 className="about__heading">
                                   About Me
                              </h1>
                              <div className="about__meta">
                                  <p className="about__text p__color">
                                  Honesty or truthfulness is a facet of moral character that connotes
                                  positive and virtuous attributes such as integrity, truthfulness, 
                                  straightforwardness, including straightforwardness of conduct, along
                                  with the absence of lying, cheating, theft, etc. Honesty also involves
                                  being trustworthy, loyal, fair, and sincere.
                                  </p>
                                  <p className="about__text p__color">
                                  Honesty is valued in many ethnic and religious cultures.
                                 "Honesty is the best policy" is a proverb of Edwin Sandys (died 1629),
                                  while the quote "Honesty is the first chapter in the book of wisdom"
                                  is attributed to Thomas Jefferson, as used in a letter to Nathaniel Macon.
                                  April 30 is national Honesty Day in the United States. 
                                  </p>
                                  <p className="about__text p__color">
                                  William Shakespeare famously described honesty as an attribute people leave
                                  behind when he wrote that "no legacy is so rich as honesty" in act 3 scene 5
                                  of "All's Well that Ends Well."
                                  </p>
                                  <div className="about__button d__flex align__items__center">
                                     <a href="#"><button className="about btn pointer">Download CV</button></a>
                                     <a href="#"><button className="about btn pointer">Hire Me</button></a>   
                                  </div>

                              </div>
                      </div>

                  </div>
            </div>

           <div className="up__to__top__btn">
               <a href="#" className="bottom__to__top">
           <svg xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           class="bi bi-chevron-bar-up white"
           viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"/>
           </svg>
           </a>
           </div>

        </div>
    )
}

export default About
