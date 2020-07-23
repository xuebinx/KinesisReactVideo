import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignalingClient } from "amazon-kinesis-video-streams-webrtc";
import { Container, Row } from "react-bootstrap";

class Video extends Component {
  state = {};

  remoteView = () => {
      console.log("Potato")
  }
  

  render() {
    return (
      <Container>
        <Row>
          <video id="remoteView" autoPlay></video>
        </Row>
      </Container>
    );
  }
}

export default Video;
