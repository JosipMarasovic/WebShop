import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-center">
                <Col lg={8} className='mt-5 mb-5' >
                    <div >
                        <h1 className='mb-5 mt-5'>Welcome to Cool Shoes - Your Ultimate Destination for Stylish Footwear!</h1>
                        <p><strong>At Cool Shoes, we believe that a great pair of shoes not only elevates your style but also tells a story. Established in the heart of Sibenik, Croatia, at Bana IVana Mazuranica 25, our journey began with a passion for fashion and a commitment to delivering exceptional footwear to our customers.</strong></p>
                    </div>
                    <div>
                        <h2>Our Foundation:</h2>
                        <p>Founded with a vision to redefine the shoe-shopping experience, Cool Shoes is the brainchild of a group of enthusiasts who recognized the need for a one-stop destination for the trendiest and most comfortable shoes. With humble beginnings, we embarked on this journey, driven by a mission to provide our customers with a curated collection of footwear that blends fashion, quality, and affordability.</p>
                    </div>
                    <div>
                        <h2>Environmentally Conscious:</h2>
                        <p>Cool Shoes is not just about fashion; it's about responsibility. We are proud to be environmentally conscious and strive to reduce our ecological footprint. From sustainable materials in our products to eco-friendly packaging, we are committed to contributing to a healthier planet. Join us in our mission to step towards a greener future, one shoe at a time.</p>
                    </div>
                    <div>
                        <h2>Social Impact:</h2>
                        <p>We believe in making a positive impact beyond the realm of fashion. Cool Shoes is dedicated to supporting initiatives that matter. A portion of our profits goes toward empowering children in need, providing them with education, resources, and opportunities for a brighter future. When you shop with Cool Shoes, you're not just buying footwear; you're contributing to meaningful social causes.</p>
                    </div>
                    <div className='mt-3 mb-3'>
                        <h2>Community Engagement:</h2>
                        <p>Cool Shoes is more than just a store; it's a community. We engage with our customers, value your feedback, and constantly strive to enhance your shopping experience. Follow us on social media for the latest trends, exclusive offers, and a glimpse behind the scenes at Cool Shoes.</p>
                        <strong><p>Connect with us on social media:</p></strong>
                        <div className='pb-3'>
                            <a href="https://www.facebook.com/coolshoes" target="_blank" title="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30px" width="30px">
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>
                            </a>
                            <span> Follow us on Facebook</span>
                        </div>
                        <div className='pb-3'>
                            <a href="https://www.instagram.com/coolshoes" target="_blank" title="Instagram" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30px" width="30px">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <span> Follow us on Instagram</span>
                        </div>
                        <div className='pb-3'>
                            <a href="mailto:coolshoes@email.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </a>
                            <span> Contact us via Email</span>
                        </div>
                    </div>
                    <div>
                        <h2>Visit Us:</h2>
                        <p>If you're in Sibenik, drop by our store at Bana IVana Mazuranica 25. Our dedicated team is here to help you find the perfect pair of shoes for every occasion.</p>
                    </div>
                    <div>
                        <h2>Contact Us:</h2>
                        <p>Have questions or just want to say hello? Give us a call at 022 766 181. Our customer service team is ready to assist you.</p>
                        <p>Thank you for being part of the Cool Shoes family. Step into style, step into comfort - step into Cool Shoes!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
