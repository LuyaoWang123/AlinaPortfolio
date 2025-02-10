import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../cards/ProjectCard';
import fileSystemImge from '../../assets/fileSystem.jpg'
import wshImage from '../../assets/wsh.jpg'

export default function Projects() {
    const projects = [
        {
            image: fileSystemImge,
            title: 'File system',
            description: 'A traditional block-based file system demo',
            youtubelink: 'https://youtu.be/8UwJBktQGbY'
        },
        {
            image: wshImage,
            title: 'Wisconsin Shell',
            description: 'A Unix-like shell demo',
            youtubelink: 'https://youtu.be/i8BzCDMrRkM'
        },
    ];

    return (
        <section id="projects" className='hero-section'>
            <Container className='py-5'>
                <Row className='section-center'>
                    <Col lg={8}>
                        <h1 className='title'>Projects</h1>
                        <p className='subtitle'>Explore some of the projects I have worked on!</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {projects.map((pro, index) => (
                        <Col lg={4} md={6} sm={12} className='mb-4' key={index}>
                            <ProjectCard 
                                image={pro.image}
                                title={pro.title}
                                description={pro.description}
                                youtubelink={pro.youtubelink}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}