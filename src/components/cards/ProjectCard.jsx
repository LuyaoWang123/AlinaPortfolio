import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import '../../styles/ProjectCard.css';

export default function ProjectCard({image, title, description, githublink}) {
    return (
        <Card className='project-card'>
            <Card.Img src={image} alt={title} className='project-image'/>
            <Card.ImgOverlay className='overlay-content'>
                <div className='overlay-text'>
                    <h5 className='project-title'>{title}</h5>
                    <p className='project-description'>{description}</p>
                </div>
                <a href={githublink} target='_blank' rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={24}/>
                </a>
            </Card.ImgOverlay>
        </Card>
    )
}