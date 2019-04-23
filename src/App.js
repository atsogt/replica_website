import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { tsConstructorType } from "@babel/types";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tab: ""
    };
  }
  handleClick = () => {
    if (this.state.tab === "open") {
      this.setState({
        tab: "closed"
      });
    } else {
      this.setState({
        tab: "open"
      });
    }
  };

  render() {
    return (
      <div>
        <section>
          <nav>
            <header>
              <h2 className="title">Start Bootstrap</h2>
            </header>
            <button className="btn2">
              <img
                onClick={this.handleClick}
                className="asianBoy"
                src="https://cdn2.iconfinder.com/data/icons/music-player-icons-line/45/Menu_Bar-512.png"
                alt="image"
              />
            </button>
            <ul>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
            <div className={"side-menu-" + this.state.tab}>
              <ul className="div2">
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </nav>
          <body className="welcome">
            <h2 className="italics">Welcome to Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button className="btn1">TELL ME MORE</button>
          </body>
        </section>
      </div>
    );
  }
}
export default App;
