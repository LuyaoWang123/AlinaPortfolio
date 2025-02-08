import { Container, Row, Col } from 'react-bootstrap';

export default function Projects() {
    return (
        <Container fluid id="projects" className='hero-section'>
            <Row>
                <Col lg={12} md={12}>
                    <h1 className='title'>Welcome to my Projects</h1>
                    <p className='subtitle'>I'm Alina!</p>
                </Col>
            </Row>
        </Container>
    )
}