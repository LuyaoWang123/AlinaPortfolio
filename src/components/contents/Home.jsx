import { Container, Row } from 'react-bootstrap';
import '../../styles/Home.css'

export default function Experience() {
    return (
        <Container fluid id="home" className='hero-section'>
            <Row fluid className='hero-content'>
                <h2>Hello, I'm</h2>
                <h1>Alina Wang.</h1>
                <h2>Nice to meet you</h2>
            </Row>
            <div className='animated-lines'></div>
        </Container>
    )
}