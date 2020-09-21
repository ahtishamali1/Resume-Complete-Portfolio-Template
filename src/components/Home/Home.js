import React, { Component } from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faArchive,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import ParticlesBg from "particles-bg";
import "./Home.css"

export default class Home extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
    }
    return (
      <React.Fragment>
        <header id="home">
          <ParticlesBg type="circle" bg={true} />
          <Container>
            <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className="text-white px-3" href="#home">Home</Nav.Link>
                <Nav.Link className="text-white px-3" href="#about">About</Nav.Link>
                <Nav.Link className="text-white px-3" href="#resume">Resume</Nav.Link>
                <Nav.Link className="text-white px-3" href="#portfolio">Works</Nav.Link>
                <Nav.Link className="text-white px-3" href="#contact">Contact</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Row>
              <div className="banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3>{description} .</h3>
                  <hr />
                  <ul className="social">
                    <li>
                    <a href={project} className="button btn project-btn rounded-0 px-4 py-3">
                    <FontAwesomeIcon icon={faBook} className="icon"/>
                      Project
                    </a></li>
                    <li>
                    <a href={github} className="button btn github-btn rounded-0 px-4 py-3">
                    <FontAwesomeIcon className="icon" icon={faArchive} />
                      Github
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
            <p className="scrolldown">
              <a href="#about" className="smoothscroll">
              <FontAwesomeIcon icon={faChevronCircleDown} className="icon"/>
              </a>
            </p>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}
