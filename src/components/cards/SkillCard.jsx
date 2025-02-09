import React from 'react';
import { Card } from 'react-bootstrap';
import '../../styles/SkillCard.css';

export default function SkillCard({icon, name}) {
    return (
        <Card className='skill-card'>
            <div className='skill-icon'>{icon}</div>
            <h5 className='skill-name'>{name}</h5>
        </Card>
    )
}
