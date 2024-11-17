import { Card, Col, Container, Row } from "react-bootstrap";
import Skill1 from "../assets/icon/html-5.png";
import Skill2 from "../assets/icon/css-3.png";
import Skill3 from "../assets/icon/js.png";
import Skill4 from "../assets/icon/bootstrap.png";
import Skill5 from "../assets/icon/react.png";
import Skill6 from "../assets/icon/java.png";
import Skill7 from "../assets/icon/mysql-icon.png";
import Skill8 from "../assets/icon/database-icon.png";
import Skill9 from "../assets/icon/spring-boot-icon.png";
import Skill10 from "../assets/icon/rest-api-icon.png";
import Skill11 from "../assets/icon/postman-icon.png";
import Skill12 from "../assets/icon/docker-icon.png";

const Experience = () => {
  const style1 = {
    background:
      "linear-gradient(90deg, rgba(13,10,125,1) 0%, rgba(18,36,105,1) 57%, rgba(9,27,99,1) 85%)",
    boxShadow:
      "0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
  };

  const style2 = {
    height: "95px",
    width: "105px",
    background: "#091b63",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className="experience" id="experience">
      <Container className="text-white">
        <h2 style={{ fontSize: "3rem" }} className="mb-5">
          Skills & Experience
        </h2>
        <Row xs={1} lg={2}>
          <Col>
            <Row lg={3} xs={3} className="ms-lg-5 p-sm-3">
              <Col id="transition">
                <Container className="shadow" style={style2}>
                  <img className="img-fluid p-2 mt-1" src={Skill1} alt="HTML" />
                </Container>
                <p className="text-center mt-2">HTML</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img className="img-fluid p-2 mt-1" src={Skill2} alt="CSS" />
                </Container>
                <p className="text-center mt-2">CSS</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill3}
                    alt="JavaScript"
                  />
                </Container>
                <p className="text-center mt-2">JavaScript</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill4}
                    alt="Bootstrap"
                  />
                </Container>
                <p className="text-center mt-2">Bootstrap</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill5}
                    alt="React"
                  />
                </Container>
                <p className="text-center mt-2">React</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img className="img-fluid p-2 mt-1" src={Skill6} alt="Java" />
                </Container>
                <p className="text-center mt-2">Java</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img className="img-fluid p-2 mt-1" src={Skill8} alt="SQL" />
                </Container>
                <p className="text-center mt-2">SQL</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill7}
                    alt="MySQL"
                  />
                </Container>
                <p className="text-center mt-2">MySQL</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill9}
                    alt="Spring Boot"
                  />
                </Container>
                <p className="text-center mt-2">Spring Boot</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill10}
                    alt="Rest API"
                  />
                </Container>
                <p className="text-center mt-2">Rest API</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill11}
                    alt="Postman"
                  />
                </Container>
                <p className="text-center mt-2">Postman</p>
              </Col>
              <Col>
                <Container className="shadow" style={style2}>
                  <img
                    className="img-fluid p-2 mt-1"
                    src={Skill12}
                    alt="Docker"
                  />
                </Container>
                <p className="text-center mt-2">Docker</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Card style={style1} id="animate" className="mb-3 text-white border-end-0">
              <Card.Body>
                <h4 className="ms-3 text-start">
                  Java SailPoint Developer, IDM 360 Analytics
                </h4>
                <p className="ms-3 text-start">Sep-2024 to Present</p>
                <p className="ms-3 text-start">
                  I maintained and upgraded Zoti Bot, a feature-rich WhatsApp
                  automated chatbot with functionalities such as chatbot flow
                  and scheduler. A major task was upgrading it from JDK 8 to JDK
                  17, utilizing Spring 3.X.X, Spring MVC, Spring JPA, and Spring
                  Security with OAuth2.0 for enhanced security and performance.
                </p>
              </Card.Body>
            </Card>

            <Card style={style1} className="mb-3 text-white border-end-0">
              <Card.Body>
                <h4 className="ms-3 text-start">
                  Java Full Stack Developer, Offiql
                </h4>
                <p className="ms-3 text-start">May-2023 to Sep-2024</p>
                <ul className="ms-3 text-start list-unstyled">
                  <li className="mb-2">
                    <strong>Maintenance and Modernization</strong>: Played a key
                    role in maintaining and enhancing Zoti Bot by fixing bugs
                    and replacing deprecated functions with modern solutions.
                    Restructured the bot into a Spring OAuth2.0 Authorization
                    Server for user authentication and JWT token generation, and
                    a Resource Server for secure API data access.
                  </li>
                  <li className="mb-2">
                    <strong>Development and Feature Expansion</strong>:
                    Developed React-based login and logout pages with
                    client-specific redirects and expanded the server to support
                    Google OAuth by managing registered clients in a database.
                    Introduced features such as message status tracking, GDrive
                    uploads, and manual scheduling.
                  </li>
                  <li className="mb-2">
                    <strong>Integration and Monitoring</strong>: Integrated
                    Spring WebSocket for chat functionality and employed Spring
                    Actuator for health monitoring. Additionally, have
                    foundational experience with Azure DevOps.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card
              style={style1}
              className="mb-3 bg-transparent text-white border-end-0"
            >
              <Card.Body>
                <h4 className="ms-3 text-start">Java Developer, Offiql</h4>
                <p className="ms-3 text-start">Mar-2023 to May-2023</p>
                <p className="ms-3 text-start">
                  I maintained and upgraded Zoti Bot, a feature-rich WhatsApp
                  automated chatbot with functionalities such as chatbot flow
                  and scheduler. A major task was upgrading it from JDK 8 to JDK
                  17, utilizing Spring 3.X.X, Spring MVC, Spring JPA, and Spring
                  Security with OAuth2.0 for enhanced security and performance.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
