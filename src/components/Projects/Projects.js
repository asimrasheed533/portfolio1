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
              description="Welcome to our Food Recipe App! Unleash your inner chef with a variety of delicious dishes, from breakfast delights to gourmet dinners and desserts. Enjoy step-by-step guidance, ingredient lists, and cooking tips for success in the kitchen. Download now and create memorable dining moments with your loved ones!"
              demoLink="https://food-sevary.web.app/"
              ghLink="https://github.com/asimrasheed533"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prism}
              isBlog={false}
              title="Prism Web"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              demoLink="https://prism-webapp.web.app/"
              ghLink="https://github.com/asimrasheed533"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fun}
              isBlog={false}
              title="Fundamental Textile"
              description="Welcome to Fundamental Textiles - Your premier destination for quality textiles. Explore our wide range of meticulously crafted fabrics, perfect for various applications. From elegant home furnishings to durable industrial materials, we offer the finest selection. With a commitment to excellence, we cater to your textile needs with reliability and style. Browse our collections and experience the art of textiles at Fundamental Textiles."
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
