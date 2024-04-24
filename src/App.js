import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home'; // Import your Home component
import Features from './artist'; // Import your Features component
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';



        function App() {
          return (
            <Router>
              <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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

                <footer style={{ marginTop: 'auto', backgroundColor: 'black', padding: '10px', textAlign: 'center', color: 'white' }}>
                  &copy; 2024 Beast Cut. All rights reserved.
                </footer>
              </div>
            </Router>
          );
        }

        export default App;