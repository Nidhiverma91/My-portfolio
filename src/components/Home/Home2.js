import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-about-img.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import {SiGeeksforgeeks,SiCodechef} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Hello Readers 😄 Myself Nidhi Verma i am currently pursuing Master of computer applications 
              <br />from
              <i>
                <b className="purple"> National Institute of Technology,Surathkal -Karnataka 🎓 </b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Web Technologies ans also </b> 
                <b className="purple">
                  Machine Learning and Data science .
                </b>
              </i>
              <br />
              <br />
              I have a good command in 
              <b className="purple"> Java , C++ and Python </b>
              And also have a good knowledge of 
              <i>
                <b className="purple">
                  {" "}
                  Javascript library and frameworks 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Node.js 👩‍💻</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nidhiverma91"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nidhi-verma-9ab11116a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://auth.geeksforgeeks.org/user/codev12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGeeksforgeeks/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/code_v12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
