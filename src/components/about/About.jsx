import React from 'react';
import './about.css';
import Image from '../assets/Image.jpg';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className='section__title'>About Me</h2>

      <div className="about__container grid">
        <div className="about__title">
        </div>
        
        <div id="image-container" class="about__img-container">
          <img src={Image} alt="" class="about__img" id="moving-image" />
        </div>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! My name is Molla Sazidur Rahman. I am a Data scientist, and I'm very passionate and dedicated to my work. With no experience in data science and machine learning, I want to acquire the skills and knowledge necessary to make a project successful.
            </p>
            <a href="link" className="btn">Download CV</a>
          </div>

          <div className="about__details">
            <div className="about__detail">
              <i class="fa-solid fa-gift"></i>  <strong>Birthday:</strong> OCT 28, 2001
            </div>
            <div className="about__detail">
              <i class="fa-solid fa-calendar-days"></i>  <strong> Age:</strong> 21
            </div>
            <div className="about__detail">
              <i class="fa-sharp fa-solid fa-map-location"></i>  <strong>Location:</strong> Dhaka, Bangladesh
            </div>
            <div className="about__detail">
              <i class="fa-brands fa-twitter"></i>  <strong>Interests:</strong> Playstation, Reading
            </div>
            <div className="about__detail">
              <i class="fa-sharp fa-solid fa-school"></i>  <strong>Study:</strong> BRAC University
            </div>
            <div className="about__detail">
              <i class="fa-sharp fa-solid fa-user-graduate"></i>  <strong>Degree:</strong> BSC
            </div>
            <div className="about__detail">
              <i class="fa-sharp fa-solid fa-envelope"></i>  <strong>Mail:</strong> rsazidur936@gmail.com
            </div>
            <div className="about__detail">
              <i class="fa-sharp fa-solid fa-phone"></i>  <strong>Phone:</strong> +880 1700948734
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;