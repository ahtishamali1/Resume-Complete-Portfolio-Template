import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css"
export default class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }
    return (
      <React.Fragment>
        <section id="contact">
          <Container>
          <div className="geth1">Get In Touch</div>
            <Row>
             
              <Col lg={2}>
                <h1 className="mt-2">
                  <span>Get In Touch</span>
                </h1>
              </Col>
              <Col lg={10}>
                <p className="lead ml-4">{message}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <form
                  action=""
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        onChange={this.handleChange}
                      />
                    </div>

                   
                      <div>    
                       <label htmlFor="contactMessage" className="wid"> Message 
                       <span className="required">*</span>
                      </label>
                     

                     
                      <textarea
                        cols="55"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                      ></textarea>
                    </div>

                    <div>
                      <Button className="submit p-3">Submit</Button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning">Error boy</div>
                <div id="message-success">
                  <ion-icon Name="checkbox-outline"></ion-icon>Your message was
                  sent, thank you!
                  <br />
                </div>
              </Col>
              <Col lg={3}>
                <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                      {name}
                      <br />
                      {street} <br />
                      {city}, {state} {zip}
                      <br />
                      <span>{phone}</span>
                    </p>
                  </div>

                  <div className="widget widget_tweets">
                    <h4 className="widget-title">Latest Tweets</h4>
                    <ul id="twitter">
                      <li>
                        <span>
                          This is Photoshop's version of Lorem Ipsum. Proin
                          gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum
                          <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b>
                          <a href="#">2 Days Ago</a>
                        </b>
                      </li>
                      <li>
                        <span>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi
                          <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b>
                          <a href="#">3 Days Ago</a>
                        </b>
                      </li>
                    </ul>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
