import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../styles/Footer.css'
import CONTACT_INFO from '../constants';

export default function About() {
    return (
        <section id="about" className='hero-section'>
            <Container className='py-5' >
            <Row className='section-center'>
                <Col lg={12} md={12}>
                    <h1 className='title'>About me</h1>
                    <p className='subtitle'>Alina is a versatile Fullstack Software Engineer with a passion for software design and writing high-quality, maintainable code. She takes a hands-on approach to crafting elegant user interfaces and building robust, stable backend systems. Her expertise includes a keen ability to resolve complex bugs and consistently deliver optimal results. </p>
                    <p className='subtitle'>Currently, Alina is diving into data structures and algorithms (DSA). Curious to see her progress and projects?</p>
                    <Button 
                        className="footer-button primary-button"
                        onClick={() => window.open(CONTACT_INFO.recentWork, '_blank')}
                        >Check them out!
                        </Button>         
                </Col>
            </Row>
            </Container>
        </section>
    )
}