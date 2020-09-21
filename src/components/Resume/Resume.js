import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css"
export default class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.random() * 16];
    }
    return color;
  }
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title} <span>&bull;</span>
              <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span
              style={{
                width: skills.level,
                bacgroundColor: this.getRandomColor(),
              }}
              className={className}
            ></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }
    return (
      <React.Fragment>
        <section id="resume">
          <Container>
            <div className="education">
              <Row>
                <Col lg={3}>
                  <div className="header-col">
                    <h1>
                      <span>Education</span>
                    </h1>
                  </div>
                </Col>

                <Col lg={9}>
                  <div className="item">
                    <Row>
                      <Col lg={12}>{education}</Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="work">
              <Row>
                <Col lg={3}>
                  <div className="header-col">
                    <h1>
                      <span>Work</span>
                    </h1>
                  </div>
                </Col>
                <Col lg={9}>
                  <div className="main-col">{work}</div>
                </Col>
              </Row>
            </div>

            <div className="skill">
              <Row>
                <Col lg={2}>
                  <div className="header-col">
                    <h1>
                      <span>Skills</span>
                    </h1>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className="main-col ml-5 pl-2">
                    <p className="text-muted ml-4 pl-3">{skillmessage}</p>

                    <div className="bars">
                      <ul className="skills">{skills}</ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
