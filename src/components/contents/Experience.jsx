import { Container, Row, Col } from 'react-bootstrap';
import ExperienceCard from '../cards/ExperienceCard';

export default function Experience() {
    const experiences = [
        {
            id: '01',
            role: 'UI/UX Peer Mentor',
            company: 'University of Wisconsin-Madison',
            date: 'Sep 2024 - Present'
        },
        {
            id: '02',
            role: 'Software Engineer Intern',
            company: 'Fetch Rewards',
            date: 'May 2024 - Aug 2024'
        },
        {
            id: '03',
            role: 'Research Intern',
            company: 'University of HeBei Technology',
            date: 'May 2023 - Sep 2023'
        }
    ];

    return (
        <section id="experience" className='hero-section'>
            <Container className='py-5'>
            <Row className='section-center'>
                <Col lg={8} >
                    <h1 className='title'>Experience</h1>
                    <p className='subtitle'>I'm a Software Engineer, specializing software development with a year of Internship Experience</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                {experiences.map(exp => (
                    <Col lg={3} md={4} sm={12} key={exp.id}>
                        <ExperienceCard 
                            number={exp.id}
                            role={exp.role}
                            company={exp.company}
                            date={exp.date}/>
                    </Col>
                ))}
            </Row>
            </Container>
        </section>
    )
}