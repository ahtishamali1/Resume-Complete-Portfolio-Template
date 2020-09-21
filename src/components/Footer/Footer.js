import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle} from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
export default class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <ion-icon Name={network.Name}></ion-icon>
            </a>
          </li>
        );
      });
    }
    return (
      <React.Fragment>
        <footer>
          <Container>
            <Row>
              <Col xs={12}>
                <ul className="social-links">{networks}</ul>
                <ul className="copyright">
                  <li>&copy; Copyright 2017 Nordic Giant</li>
                  <li>
                    Design by{" "}
                    <a title="Styleshout" href="http://www.styleshout.com/">
                      Styleshout
                    </a>
                  </li>
                </ul>
              </Col>
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                {/* <FontAwesomeIcon icon={faBicycle}/> */}
                
                  <ion-icon size="large" name="chevron-up-circle-outline"></ion-icon>
                </a>
              
              </div>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}
