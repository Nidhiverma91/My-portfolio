import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import facedetection from "../../Assets/Projects/face-recognition-attendance-system.png";
import emotiondetection from "../../Assets/Projects/emotiondetection.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of my projects !
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facedetection}
              isBlog={false}
              title="Automated Face Recognition System"
              description="It is an system that recognises the face of the students and make there attendance in the excel file which will be maintained by the admin. This project includes the knowledge of OpenCV,Tkinter,Pillow etc libraries and maintain the accuracy of 89%."
              ghLink="https://github.com/Nidhiverma91/automated-attendance"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotiondetection}
              isBlog={false}
              title="Emotion Detector"
              description="This is an Emotion detector project in this project the system will take the images of the person and train those data further to detect the kind of face reaction the person has .In this project we have use keras library and tensorflow library in order to maintain the accuracy of the project."
              ghLink="https://github.com/Nidhiverma91/Emotion-detector"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
