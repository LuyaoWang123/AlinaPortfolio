import React from 'react';
import { Card } from 'react-bootstrap';
import '../..//styles/ExperienceCard.css'

export default function ExperienceCard({number, role, company, date}) {
    return (
        <Card className='experience-card'>
            <span className='card-number'>{number}</span>
            <Card.Body>
                <Card.Title className='fw-bold'>{role}</Card.Title>
                <Card.Subtitle className='mb-2'>{company}</Card.Subtitle>
                <Card.Text className='mb-2'>{date}</Card.Text>
            </Card.Body>
        </Card>
    )
}