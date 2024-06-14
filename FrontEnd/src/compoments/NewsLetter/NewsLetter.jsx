import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './newsLetter.css';


function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Submitted:', { email, consent });
    };

    return (
        <Container className='blog-container mt-5 mb-5 pt-5 pb-5' style={{ maxWidth: '400px' }}>
            <Form className="newsletterform" onSubmit={handleSubmit}>
                <h2 className="text-center">Subscribe to Our Newsletter</h2>
                <p className="text-center">Stay up-to-date with our latest news and updates.</p>

                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                       
                    />
                </Form.Group>

                <Form.Group controlId="consent">
                    <Form.Check 
                        type="checkbox" 
                        label="I agree to receive newsletters."
                        checked={consent} 
                        onChange={(e) => setConsent(e.target.checked)} 
                        required 
                        
                    />
                </Form.Group>
                <Button className='custom-button' variant="primary" type="submit">Subscribe</Button>
            </Form>
        </Container>
    );
}

export default NewsletterForm;
