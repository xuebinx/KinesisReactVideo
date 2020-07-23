import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Card } from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelName: "",
      clientId: "",
      region: "",
      video: false,
      audio: false,
      masterView: "master",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      [name]: val,
    });
  };

  handleCheckbox = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleRadio = (e) => {
    this.setState({
      masterView: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.video);
    console.log(this.state.audio);
    console.log(this.state.channelName);
    console.log(this.state.clientId);
    console.log(this.state.region);
    console.log(this.state.masterView);
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Enter your details here to connect</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formChannel">
                <Form.Label>Channel Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Channel Name"
                  name="channelName"
                  value={this.state.channelName}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formClientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Client Id (optional)"
                  name="clientId"
                  value={this.state.clientId}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formRegion">
                <Form.Label>Region</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Region"
                  name="region"
                  value={this.state.region}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group id="formChecks">
                <Form.Check
                  inline
                  type="checkbox"
                  id="video"
                  label="Enable Video"
                  name="video"
                  onChange={this.handleCheckbox}
                  checked={this.state.video}
                />
                <Form.Check
                  inline
                  type="checkbox"
                  id="audio"
                  label="Enable Audio"
                  name="audio"
                  onChange={this.handleCheckbox}
                  checked={this.state.audio}
                />
              </Form.Group>

              <Form.Group id="formRadio">
                <Form.Check
                  inline
                  type="radio"
                  id="master"
                  label="Master"
                  value="master"
                  onChange={this.handleRadio}
                  checked={this.state.masterView === "master"}
                />
                <Form.Check
                  inline
                  type="radio"
                  id="viewer"
                  label="Viewer"
                  value="viewer"
                  onChange={this.handleRadio}
                  checked={this.state.masterView === "viewer"}
                />
              </Form.Group>

              <Button variant="warning" type="submit" size="lg" block>
                Connect
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default login;
