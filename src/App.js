import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Insta from './assets/instagram.png';
import Facebook from './assets/facebook.png';
import Logo from './assets/logo1.png';
import Home from './components/Home';
import Gigs from './components/Gigs';
import Kontakt from './components/Kontakt';
import { Datenschutz } from './components/Datenschutz';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cookie from './components/Cookie';

function App() {
  return (
    <div className="App">
      <>
        <Navbar className="Navbar" bg="light" expand="lg">
          <Container>
            <Nav.Link as={Link} to="/">
              {' '}
              <img className="logo" src={Logo} alt="Logo" width="30%"></img>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                style={{
                  fontSize: '1.4em',
                  fontFamily: 'Montserrat',
                }}
              >
                <Nav.Link className="Link " as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="Link" as={Link} to="/gigs">
                  Auftritte
                </Nav.Link>
                <Nav.Link className="Link" as={Link} to="/kontakt">
                  Kontakt
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div
          className="social-nav"
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: '7.5vw',
            justifyContent: 'flex-end',
          }}
        >
          <a
            className="insta"
            href="https://www.instagram.com/baierbuamandfriends/"
            target="blank_"
            style={{
              textDecoration: 'none',
              padding: '2.5vh',
            }}
          >
            {' '}
            <img src={Insta} width="40px" alt="Instagram"></img>
          </a>
          <a
            href="https://www.facebook.com/baierbuamandfriends/"
            target="blank_"
            style={{
              textDecoration: 'none',
              padding: '2.5vh',
            }}
          >
            {' '}
            <img src={Facebook} width="40px" alt="Facebook"></img>
          </a>
        </div>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gigs" element={<Gigs />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
          <Route path="/datenschutz" element={<Datenschutz />}></Route>
        </Routes>
      </div>
      <Cookie></Cookie>
      <footer>
        <Navbar fixed="bottom" bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="Link" as={Link} to="/datenschutz">
                  Impressum/DSGVO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
