import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import a1 from "../images/canadian-wanderlust.jpg"
import a2 from "../images/fury-fighting-gear.jpg"
import a3 from "../images/original-thai-food.jpg"
import a4 from "../images/resume-website.jpg"
import a5 from "../images/smirkspace.jpg"
import "./Portfolio.css"
export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
        portfolio: [{ id: 1, img: a1, title: "Canadian Wanderlust", category: "My Travel Blog for my post-university travels", href: "#", }, 
         { id: 2, img: a2, title: "Fury Fighting Gear",category:"Website I built for a restaurant I like in Thailand", href: "#", },
          { id: 3, img: a3, title: "Original Thai Food",category:"A React based resume website template", href: "#", }, 
          { id: 4, img: a4, title:  "Resume Website",category:"(MVP Only) A React and Meteor based chat University project.", href: "#", },
           { id: 5, img: a5, title: "Smirkspace",category:"(MVP Only) A React and Meteor based chat University project.", href: "#", }, 
           
        ]
    }
}
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <Container>
          <h1>Check out Some of My Works.</h1>
            <Row>
{this.state.portfolio.map((d,i)=>(
  <Col key={d.id} lg={3} md={4} xs={6}>
    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
    <div className="portfolio-item">
      <div className="item-wrap mb-4">
        <a href="d.href">
          <img src={d.img} className="img-fluid"/>
          <div className="overlay">
          <div className="portfolio-item-meta">
<h5>{d.title}</h5>
<p>{d.category}</p>
          </div>
          </div>
        </a>
      </div>
    </div>
    </div>
  </Col>
))}
            </Row>
        
          </Container>

        </section>

      </React.Fragment>
    )
  }
}














































