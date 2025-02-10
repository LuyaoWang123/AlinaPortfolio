import { Button, Container, Row } from 'react-bootstrap';
import '../../styles/Home.css'

export default function Experience() {
    return (
        <Container fluid id="home" className='hero-section'>
            <Row fluid className='hero-content'>
                <h2>Hello, I'm</h2>
                <h1>Alina Wang.</h1>
                <h2>Nice to meet you</h2>
                <Button 
                    className='resume-button'
                    onClick={() => window.open('https://drive.google.com/file/d/1r6D1kES7spCdh0BNRWJFYXiNQ64n2UF4/view?usp=drive_link', '_blank')}>
                    Resume
                </Button>
            </Row>
            <div className='animated-lines'></div>
        </Container>
    )
}