import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import novacodigoLogo from '../assets/novacodigo-logo.svg';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <BootstrapNavbar bg="light" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={novacodigoLogo} 
            alt="Nova Código" 
            height="40" 
            className="me-2"
          />
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            

            
            <Nav.Link 
              as={Link} 
              to="/sobre" 
              className={location.pathname === '/sobre' ? 'active' : ''}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contato" 
              className={location.pathname === '/contato' ? 'active' : ''}
            >
              Contato
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar; 