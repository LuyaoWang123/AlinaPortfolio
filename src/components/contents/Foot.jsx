import { Container, Row, Button, Col } from 'react-bootstrap';
import { SiLinkedin } from 'react-icons/si';
import '../../styles/Footer.css'
import CONTACT_INFO from '../constants';

export default function Foot() {
    return (
        <footer className='footer-container'>
            <Container fluid id="connect">
                <Row>
                    <Col md={6}>
                        <p className='footer-text'>Feel free to reach out to me via email or any of the listed mediums</p>
                        <div className='footer-buttons'>
                            <Button 
                                className="footer-button"
                                onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
                                >Email</Button>
                            <Button 
                                className="footer-button"
                                onClick={() => window.open(CONTACT_INFO.resume, '_blank')}
                                >Resume.</Button>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-end align-items-center'>
                        <p className='footer-text'> </p>
                        <Button 
                            className='footer-icon'
                            onClick={() => window.open(CONTACT_INFO.linkedIn)}>
                            <SiLinkedin />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}