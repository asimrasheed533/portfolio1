import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import prism from "../../Assets/Projects/prism.png";
import fun from "../../Assets/Projects/fun.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Recipe App"
              description="TasteBuds, the ultimate online food recipe app, offers a vast collection of mouthwatering recipes from various cuisines. Enjoy smart search, step-by-step instructions, and personalized recommendations. Plan meals, access cooking tips, and join a vibrant culinary community. Available on Web for a delightful cooking experience anytime, anywhere."
              demoLink="https://food-sevary.web.app/"
              ghLink="https://github.com/asimrasheed533"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prism}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fun}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/asimrasheed533"
              demoLink="https://fundamental-textile.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
