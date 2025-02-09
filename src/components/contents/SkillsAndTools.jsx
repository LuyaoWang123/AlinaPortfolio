import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from '../cards/SkillCard';
import { FaJava, FaNodeJs, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiTypescript, SiAndroid, SiSpringboot, SiMysql, SiC, SiKubernetes, SiFigma, SiPostman } from 'react-icons/si';


export default function SkillsAndTools() {
    const skillsGroup1 = [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <SiAndroid />, name: 'Android' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiFigma />, name: 'Figma' },
        { icon: <SiPostman />, name: 'Postman' }
    ];

    const skillsGroup2 = [
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiSpringboot />, name: 'Spring Boot' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <FaLinux />, name: 'Linux' },
        { icon: <SiC />, name: 'C' },
        { icon: <FaAws />, name: 'AWS S3' },
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
                    {skillsGroup1.map((skill, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center" key={index}>
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </Col>
                    ))}
                </Row>

                <Row className="justify-content-center">
                    {skillsGroup2.map((skill, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center" key={index}>
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}