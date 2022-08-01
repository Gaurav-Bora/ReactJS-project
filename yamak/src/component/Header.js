import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container id="for-css">
        <a className="yamak" href="#home">
          Yamak<span style={{color:'black'}}>.ai</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="nav-element" href="#">
              Home
            </Link>
            <Link to={"/marketing"} className="nav-element" href="#">
              Marketing
            </Link>
            <Link to={"/social"} className="nav-element" href="#">
              Social Media
            </Link>
            <Link to={"/sales"} className="nav-element" href="#">
              Sales Copy
            </Link>
            <Link to={"/blogs"} className="nav-element" href="#">
              Blogs
            </Link>
            <Link to={"/others"} className="nav-element" href="#">
              Other
            </Link>
          </Nav>
          <div className="img-set">
            <a href="#">
              <img className="refresh" src="./img/OIP.jpg" alt="profile" />
            </a>
            <a href="#">
              <img className="image" src="./img/profile.jpg" alt="profile" style={{marginLeft:20}} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
