import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
                 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              
                <Link to="/category/0">Home</Link>
           
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
       
                  <FaUserCircle
                    style={{ fontSize: "2rem" }}
                  ></FaUserCircle>{" "}
                </Nav.Link>
              )}
     
                {user ? (
                  <Button variant="secondary">Log Out</Button>
                ) : (
                  <Link to="/login">
                    {" "}
                    <Button variant="secondary">Log In</Button>
                  </Link>
                )}
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;