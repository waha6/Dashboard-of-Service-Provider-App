import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message
} from "semantic-ui-react";
import firebase from "../Config/firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      message: ""
    };
  }
  handleLogin = () => {
    const { email, pass } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        this.setState({ message: errorCode });
        setTimeout(() => this.setState({ message: "" }), 4000);
        console.error(errorCode + "*****", errorMessage);
      });
  };
  render() {
    const { email, pass, message } = this.state;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  pattern="\w+@\w+.[\w+.]+"
                  value={email}
                  onChange={s => {
                    this.setState({ email: s.target.value });
                  }}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  pattern="\w{8,}"
                  value={pass}
                  onChange={s => {
                    this.setState({ pass: s.target.value });
                  }}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            {message && <Message color="red">{message}</Message>}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
