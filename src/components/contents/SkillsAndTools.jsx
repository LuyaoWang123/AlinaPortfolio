import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaJava, FaNodeJs, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiTypescript, SiAndroid, SiSpringboot, SiMysql, SiC, SiKubernetes, SiFigma, SiPostman, SiReact } from 'react-icons/si';
import SkillGroupCard from '../cards/SkillGroupCard';


export default function SkillsAndTools() {
    const skillsGroup1 = [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <SiReact />, name: 'React' }, 
        { icon: <SiAndroid />, name: 'Android' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiFigma />, name: 'Figma' },
        { icon: <SiPostman />, name: 'Postman' },
    ];

    const skillsGroup2 = [
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiSpringboot />, name: 'Spring Boot' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <FaAws />, name: 'AWS S3' },
        { icon: <SiC />, name: 'C' },
        { icon: <FaLinux />, name: 'Linux' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <SiKubernetes />, name: 'Kubernetes' },
    ];

    return (
        <section id="skills" className="hero-section">
            <Container className="py-5">
                <Row className="section-center">
                    <Col lg={8}>
                        <h1 className="title">Skills & Tools</h1>
                        <p className="subtitle">Here are the tools and technologies I use regularly.</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg = {6} md={12}>
                        <SkillGroupCard skills={skillsGroup1}/>
                    </Col>
                    <Col lg = {6} md={12}>
                        <SkillGroupCard skills={skillsGroup2}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}