import React from 'react';
import { Card } from 'react-bootstrap';
import { FaYoutube } from 'react-icons/fa';
import '../../styles/ProjectCard.css';

export default function ProjectCard({image, title, description, youtubelink}) {
    const handleCardClick = () => {
        window.open(youtubeLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <Card className='project-card' onClick={handleCardClick}>
            <Card.Img src={image} alt={title} className='project-image'/>
            <Card.ImgOverlay className='overlay-content'>
                <div className='overlay-text'>
                    <h5 className='project-title'>{title}</h5>
                    <p className='project-description'>{description}</p>
                </div>
                <a href={youtubelink} target='_blank' rel="noopener noreferrer" className="youtube-icon">
                    <FaYoutube size={24}/>
                </a>
            </Card.ImgOverlay>
        </Card>
    )
}