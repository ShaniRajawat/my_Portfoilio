import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "animate.css";
import TextAnimation from "../util/TextAnimation";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Shani`}
                    <br />
                    <span>
                      <TextAnimation
                        statement1={"Java Developer"}
                        statement2={"Java Full Stack Developer"}
                        statement3={"Java SailPoint Developer"}
                      />
                    </span>
                  </h1>
                  <p>
                    Skilled Java Full Stack Developer with expertise in Java,
                    Spring, and OAuth2.0, focusing on secure, scalable
                    solutions. Maintained and upgraded a WhatsApp chatbot,
                    restructuring it into two applications with enhanced
                    authentication and API handling. Developed a React-based
                    application using Bootstrap, integrated new features, and
                    utilized Spring WebSocket and Actuator, with basic Azure
                    DevOps experience. <br /> Currently Assigned as SailPoint Developer
                    in IDM360 Analytics
                  </p>
                  <Router>
                    <Nav.Link href="#connect">
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  </Nav.Link>
                  </Router>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
