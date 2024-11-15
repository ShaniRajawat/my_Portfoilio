import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <footer className="footer">
      <Container>
        <Row lg={3} className="align-items-center">
          <Col xs={12} className="mt-3">
            <img src={logo} alt="Logo" id="Logo" />
          </Col>
          <Col xs={12} className="text-center mt-3">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mritunjay-pratap-singh-rajawat-894504254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ShaniRajawat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Github" />
              </a>
              <a
                href="https://www.instagram.com/face_of_storm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
          <Col xs={12} className="text-white">
            <p>
              <b>Quick Links</b>
            </p>
            <Router>
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={
                  activeLink === "services"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Router>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
