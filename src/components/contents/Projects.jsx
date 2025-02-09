import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../cards/ProjectCard';
import fileSystemImge from '../../assets/fileSystem.jpg'
import wshImage from '../../assets/wsh.jpg'

export default function Projects() {
    const projects = [
        {
            image: fileSystemImge,
            title: 'File system',
            description: 'a traditional block-based file system',
            githubLink: 'https://github.com/user/readbud'
        },
        {
            image: wshImage,
            title: 'Wisconsin Shell',
            description: 'a Unix-like shell',
            githubLink: 'https://github.com/user/justap'
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
                                githublink={pro.githubLink}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}