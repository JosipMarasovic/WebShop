import React from 'react';
import { Container } from 'react-bootstrap';
import kulio from '../Hero/kulio.jpg';
import './hero.css';

function Hero() {
  return (
    <Container  className="hero-container">
      <img src={kulio} alt="Description of the image" className="hero-image" />
      <div className="hero-text">
        <p><em>Coolest shoes you will find, cooler than ice!</em></p>
      </div>
    </Container>
  );
}

export default Hero;