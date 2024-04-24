import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home'; // Import your Home component
import Features from './artist'; // Import your Features component
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Valo Nudes</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className='linker'>Home</Link>
              <Link to="/artist" className='linker'>Artist</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;