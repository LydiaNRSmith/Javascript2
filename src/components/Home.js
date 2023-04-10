import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import heroImage from '../assets/bootstrap-themes.png'

function Home() {
  return (
  <Container>
    <Row className = "flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} lg={6}>
            <Image src={heroImage} className="d-block mx-lg-auto img-fluid"/>
        </Col>
        <Col lg={6}>
            <h1 className = "display-5 fw-bold lh-1 mb-3">
                Welcome, take a look around and have fun!
            </h1>
            <p className = "lead">
            In publishing and graphic design, Lorem ipsum is a 
            placeholder text commonly used to demonstrate the visual 
            form of a document or a typeface without relying on meaningful
             content. Lorem ipsum may be used as a placeholder before final 
             copy is available.
            </p>
            <div className="d-grid-gap2 d-md-flex justify-content-md-start">
                <Button variant = "success">My Projects</Button>
            </div>
        </Col>
    </Row>
  </Container>
  );
}

export default Home
