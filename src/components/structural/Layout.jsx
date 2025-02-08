import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Alina Wang</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} smooth to="/#about">About</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#experience">Experience</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#projects">Projects</Nav.Link>
                            <Nav.Link as={Link} smooth to="/#skills">Skills & Tools</Nav.Link>
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
