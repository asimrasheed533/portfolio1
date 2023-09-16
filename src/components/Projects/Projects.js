import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import electro from "../../Assets/Projects/electro.png";
import fun from "../../Assets/Projects/fun.png";
import furniture from "../../Assets/Projects/furniture.png";

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
              imgPath={electro}
              isBlog={false}
              title="Electro Mart Ecommerce "
              description="Discover a tech-lover's paradise at our e-commerce store. Explore cutting-edge gadgets, high-performance electronics, and innovative accessories. From smart wearables to DIY kits, find everything to elevate your tech game. Enjoy secure shopping, expert customer service, and a seamless experience. Upgrade your lifestyle with our curated electronic portfolio today."
              demoLink="https://electromart-web.web.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="Furniture Store"
              description="Create your dream home with our online furniture store! Explore a curated selection of stylish and affordable furniture for every room. Shop hassle-free, enjoy convenient delivery options, and transform your space effortlessly. Discover quality craftsmanship, unique designs, and exceptional customer service. Elevate your home décor with us today!"
              ghLink="https://github.com/asimrasheed533"
              demoLink="https://asmughal-furniture.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
