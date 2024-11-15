import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill text-white" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Services</h2>
              <p>
                Proficient in Java, Spring Framework, OAuth2.0, React with
                Bootstrap,
                <br /> and integrating scalable backend solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* meter1 = 95%, meter2 = 80%, meter3=90% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Full Stack Development <br />(React+Spring)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>BackEnd Development <br />(Java+SpringBoot)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Java Developer <br />(Java+DSA)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SailPoint Developer <br />(Java+SailPoint IIQ)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Services;
