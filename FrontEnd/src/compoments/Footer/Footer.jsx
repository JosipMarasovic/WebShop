import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'

function Footer() {
  return (
    <Container fluid className="footer-container ">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mb-4 mt-5">
          <div>
           
            <h3>Google Branch Map</h3>
            
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92240.85346360042!2d15.88561485!3d43.74115885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352615d088d09d%3A0x400ad50862bcc20!2zxaBpYmVuaWs!5e0!3m2!1sen!2shr!4v1704205925708!5m2!1sen!2shr"
                width="450"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            
            

          </div>
        </Col>
        <Col xs={12} md={6} className="text-center mb-4 d-flex align-items-center">
          <div className="d-flex row align-items-center" >
            <h3>Contact Information:</h3>
            <p><em>TEL:</em> 022 766181</p>
            <p><em>OIB:</em> 123456789</p>
            <p><em>Email:</em> coolshoes@example.com</p>
            <p><em>Address:</em> 123 Cool Shoes, Cool Shoes City</p>
        
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center mb-4">
          <div>
            <a href="https://policies.google.com/terms" target="_blank">Terms and Conditions</a><br />
            <a href="https://policies.google.com/privacy" target="_blank">  Privacy Policy</a>
            <a href="/">  Cookie Policy</a>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center mb-4">
          <div className="faq">
            <a href="/" target="_parent">FAQ :</a>
            <a href="/" target="_parent">If u have any question feel free to ask</a>
          </div>
        </Col>
        <Col xs={12} className="text-center mb-4">
          <div>
            <a href="/" target="_parent">Signature Web Development - Maraska.d.o.o.</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
