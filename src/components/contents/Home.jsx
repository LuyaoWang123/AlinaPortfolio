import { Button, Container, Row } from 'react-bootstrap';
import '../../styles/Home.css'
import CONTACT_INFO from '../constants.js'

export default function Home() {
    return (
        <Container fluid id="home" className='hero-section'>
            <svg className="curve-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" preserveAspectRatio="xMidYMid meet">
                <path d="M420,-700 A700,800 900 0 0 1500,300" stroke="white" strokeWidth="3" fill="none" />
                <circle cx="650" cy="390" r="100" stroke="white" strokeWidth="3" fill="none" />
            </svg>
            <Row className='hero-content'>
                <h2>Hello, I'm</h2>
                <h1>Alina Wang.</h1>
                <h2>Nice to meet you</h2>
                <Button 
                    className='resume-button'
                    onClick={() => window.open(CONTACT_INFO.resume, '_blank')}>
                    Resume
                </Button>
            </Row>
        </Container>
    )
}