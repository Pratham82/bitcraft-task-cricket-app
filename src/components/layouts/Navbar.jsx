import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Nav.Link>
              <Navbar.Brand>
                <i className="fas fa-cricket"> Cricket Feed</i>
              </Navbar.Brand>
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/teams">
                <Nav.Link>Teams</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/players">
                <Nav.Link>Players</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/matches">
                <Nav.Link>Matches</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/scores">
                <Nav.Link>Score Table</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
