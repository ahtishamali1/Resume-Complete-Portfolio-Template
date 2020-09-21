import React, { Component } from "react";
import $ from "jquery";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }
  getResumeData() {
    $.ajax({
      url: "./data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }
  componentDidMount() {
    this.getResumeData();
  }
  render() {
    return (
      <React.Fragment>
        <Home data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </React.Fragment>
    );
  }
}
