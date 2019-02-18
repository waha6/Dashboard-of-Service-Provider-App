import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "./Config/firebase";
import Login from "./Component/Login";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login"
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({ page: "main" });
        console.log("User");
      } else {
        // No user is signed in.
        console.log("Not User");
      }
    });
  }
  render() {
    const { page } = this.state;
    return <div className="App">{page == "login" && <Login />}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
