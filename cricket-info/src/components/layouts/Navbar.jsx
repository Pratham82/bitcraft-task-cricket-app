import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Cricket Feed</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/teams">
                <Nav.Link>
                  <i className="fas fa-users"></i> Teams
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/players">
                <Nav.Link>
                  <i className="fas fa-user"></i> Players
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/matches">
                <Nav.Link>
                  <i className="fas fa-user"></i> Matches
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/scores">
                <Nav.Link>
                  <i className="fas fa-user"></i> Score Table
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
