import React, { Component } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import "./About.css"

export default class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumeDownload;
    }
    return (
      <section id="about">
        <Container>
          <Row>
            <Col lg={3}>
              <div>
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt="profile pic"
                />
              </div>
            </Col>
            <Col lg={9}>
              <div className="pr-5">
                <h2>About Me</h2>
                <p>{bio}</p>
                <Row>
                  <Col lg={6}>
                    <div className="contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>{name}</span>
                        <br />
                        <span>
                          {street}
                          <br />
                          {city} {state}, {zip}
                        </span>
                        <br />
                        <span>{phone}</span>
                        <br />
                        <span>{email}</span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="download">
                      <p>
                        <Button href={resumeDownload} className="button p-3 border-0 mt-3">
                        <FontAwesomeIcon className="down" icon={faDownload}/>
                          Download Resume
                        </Button>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
