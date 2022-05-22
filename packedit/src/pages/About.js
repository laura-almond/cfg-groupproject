import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import dog1 from "../styles/Images/Photos/dog1.jpg";
import dog2 from "../styles/Images/Photos/dog2.jpg";
import dog3 from "../styles/Images/Photos/dog3.jpg";
import dog4 from "../styles/Images/Photos/dog4.jpg";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Home.scss";


const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <nav>
            <NavBar />
          </nav>
          <div className="row" style={{ paddingTop: "170px", paddingLeft: "2%" }}>
            <Col sm={6}>
              <div className="about-head-text">
                <h2>Hi!</h2>
              </div>
              <div className="about-body-text">
                <p>We are Grace, Laura, Michelle & Eilidh.</p>
                <p>
                  We are aspiring software developers and this website is our final
                  project for the <a href="https://codefirstgirls.com/" className="a" target="_blank" rel="noreferrer">Code First Girls</a> Degree!
                </p>
                <p>
                  PackedIt makes trip planning easier by allowing users to make an
                  organised list.
                </p>
                <p>No more forgetting any essentials! So, have you PackedIt yet?</p>
              </div>
            </Col>
            <Col sm={5}>
              <Row>
                <Col>
                  <Image width="95%" roundedCircle src={dog1} />
                </Col>
                <Col>
                  <Image width="95%" roundedCircle src={dog2} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Image width="95%" roundedCircle src={dog3} />
                </Col>
                <Col>
                  <Image width="95%" roundedCircle src={dog4} />
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
