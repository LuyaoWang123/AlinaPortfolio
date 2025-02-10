import { Container, Row, Col } from 'react-bootstrap';

export default function Experience() {
    return (
        <section id="about" className='hero-section'>
            <Container className='py-5' >
            <Row className='section-center'>
                <Col lg={12} md={12}>
                    <h1 className='title'>About me</h1>
                    <p className='subtitle'>Alina is a versatile Fullstack Software Engineer with a passion for software design and writing high-quality, maintainable code. She takes a hands-on approach to crafting elegant user interfaces and building robust, stable backend systems. Her expertise includes a keen ability to resolve complex bugs and consistently deliver optimal results. </p>
                    <p className='subtitle'>Currently, Alina is diving into data structures and algorithms (DSA). Curious to see her progress and projects? Check them out!</p>         
                </Col>
            </Row>
            </Container>
        </section>
    )
}