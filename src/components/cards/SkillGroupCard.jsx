import { Card, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';
import '../../styles/SkillGroupCard.css'

export default function SkillGroupCard({ skills }) {
    return (
        <Card className="skill-group-card p-4">
            <Row className="justify-content-center">
                {skills.map((skill, index) => (
                    <Col lg={3} md={3} sm={6} xs={6} key={index} className='mt-2 mb-2'> 
                        <SkillCard icon={skill.icon} name={skill.name} />
                    </Col>
                ))}
            </Row>
        </Card>
    );
}
