/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Nav, Navbar, Container, NavDropdown, Image } from 'react-bootstrap';
import { NavLink as RouteLink } from 'react-router-dom';
import * as ROUTES from 'utils/routes';
import Logo from 'images/logo.svg';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={RouteLink} to={ROUTES.HOME}>
          <Image src={Logo} alt="Movie Discovery" height="20" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={RouteLink} to={ROUTES.TV}>
              TV Shows
            </Nav.Link>
            <Nav.Link as={RouteLink} to={ROUTES.MOVIE}>
              Movies
            </Nav.Link>
            <Nav.Link as={RouteLink} to={ROUTES.PERSON}>
              People
            </Nav.Link>
            <NavDropdown title="More">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Language Toggle</Nav.Link>
            <Nav.Link
              exact
              as={RouteLink}
              to={ROUTES.LOGIN}
              activeClassName="d-none"
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={RouteLink}
              to={ROUTES.SEARCH}
              activeClassName="d-none"
            >
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
