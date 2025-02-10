import { Container, Row, Button, Col } from 'react-bootstrap';
import { SiLinkedin } from 'react-icons/si';
import '../../styles/Footer.css'

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
                                onClick={() => window.location.href = 'mailto:AlinaWang689@gmail.com'}
                                >Email</Button>
                            <Button 
                                className="footer-button ms-2"
                                onClick={() => window.open('https://drive.google.com/file/d/1r6D1kES7spCdh0BNRWJFYXiNQ64n2UF4/view?usp=drive_link', '_blank')}
                                >Resume.</Button>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-end align-items-center'>
                        <p className='footer-text'> </p>
                        <Button 
                            className='footer-icon'
                            onClick={() => window.open('https://www.linkedin.com/in/luyaowang71a31237/')}>
                            <SiLinkedin />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}