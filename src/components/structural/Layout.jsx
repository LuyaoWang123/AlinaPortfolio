import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Theme from '../../utils/theme';

export default function Layout() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const navBarRef = useRef();

    useEffect(() => {
        const adjustScrollMargin = () => {
            const navBarHeight = navBarRef.current.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', `${navBarHeight}px`);
        };

        adjustScrollMargin();
        window.addEventListener('resize', adjustScrollMargin);
        const navbar = navBarRef.current;
        navbar.addEventListener('shown.bs.collapse', adjustScrollMargin);
        navbar.addEventListener('hidden.bs.collapse', adjustScrollMargin);

        return () => {
            window.removeEventListener('resize', adjustScrollMargin);
            window.removeEventListener('shown.bs.collapse', adjustScrollMargin);
            window.removeEventListener('hidden.bs.collapse', adjustScrollMargin);
        };
    }, []);

    const isSmallScreen = () => {
        return window.innerWidth < 992;
    }
    const handleNavClick = () => {
        if (isSmallScreen()) {
            setIsNavCollapsed(true);
        }
    }
    const handleToggleClick = () => {
        setIsNavCollapsed(pre=>!pre); 
    };

    const fetchAIColors = async () => {
        const response = await fetch('/colormind-api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: 'default' })
        });
        const data = await response.json();
        const colors = data.result;

        const newTheme = {
            sectionBackground: `${colors[0].join(', ')}`,
            sectionContent: `#${colors[1].map(x => x.toString(16).padStart(2, '0')).join('')}`,
            subtitle: `${colors[2].join(', ')}`,
            footerBackground: `#${colors[3].map(x => x.toString(16).padStart(2, '0')).join('')}`,
            footerText: `#${colors[4].map(x => x.toString(16).padStart(2, '0')).join('')}`
        }
        Theme.setTheme(newTheme);
    }
    

    return (
        <>
            <Navbar ref={navBarRef} className="custom-navbar" variant="dark" expand="lg" fixed='top' expanded={!isNavCollapsed}>
                <Container>
                    <Navbar.Brand as={Link} smooth to="/#home" onClick={handleNavClick}>Alina Wang</Navbar.Brand>
                    <Navbar.Toggle onClick={handleToggleClick} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" onClick={handleNavClick}>
                            <Nav.Link as={Link} smooth to="/#about">About</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#experience">Experience</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#projects">Projects</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#skills">Skills & Tools</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#connect">Connect</Nav.Link>
                            <Nav.Link as='button' onClick={fetchAIColors}>AI theme</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Outlet />
            </div>
        </>
    );
}
