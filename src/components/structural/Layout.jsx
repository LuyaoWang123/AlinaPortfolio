import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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

        return () => {
            window.removeEventListener('resize', adjustScrollMargin);
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
