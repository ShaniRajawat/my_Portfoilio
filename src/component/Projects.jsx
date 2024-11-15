import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Electronic from "../assets/img/Electrnonic Store.png";
import writematics from "../assets/img/writematics.png";
import IDM360 from "../assets/img/IDM360.png";
import ElectBackEnd from "../assets/img/Electro BackEnd.png";
import CricketBackEnd from "../assets/img/Cricker BackEnd.png";
import FullStack from "../assets/img/React+Java.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const reactjsP = [
    {
      title: "IDM 360 Analytics WebApp using React",
      description: "Design & Development",
      imgUrl: IDM360,
    },
    {
      title: "Electronic Store FrontEnd Using React",
      description: "Design & Development",
      imgUrl: Electronic,
    },
    {
      title: "Writamatics website using React",
      description: "Design & Development",
      imgUrl: writematics,
    },
  ];
  const javaSpringP = [
    {
      title: "Electronic Store Backend",
      description: "Java + Spring",
      imgUrl: ElectBackEnd,
    },
    {
      title: "A Cricket Score BackEnd App",
      description: "Java + Spring",
      imgUrl: CricketBackEnd,
    },
  ];
  const fullStack = [
    {
      title: "Electronic Store FullStack",
      description: "React+Sprong(Rest API)",
      imgUrl: FullStack,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have developed projects using React for building dynamic,
                    user-friendly interfaces, and Spring for creating robust,
                    scalable backend solutions. Combining React and Spring, I
                    have built full-stack applications that bridge front-end and
                    back-end seamlessly, ensuring efficient data flow, secure
                    authentication, and smooth user experiences. This experience
                    enhanced my problem-solving and development skills.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {reactjsP.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {javaSpringP.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {fullStack.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <p>
          Note:- Some of these Projects are not Live as They are Developed for the
          demonstration purpose. If you want to hire me to build any of react or
          Spring App Kindly Contact on <b>LinkedIn</b>
        </p>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="right"
      ></img>
    </section>
  );
};

export default Projects;
