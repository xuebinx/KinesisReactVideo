import React from "react";
import "./App.css";
import { SignalingClient } from "amazon-kinesis-video-streams-webrtc";
import Video from "./component/video";
import Login from "./component/login";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Link to="/Video">
            <Button variant="primary">Video</Button>
          </Link>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/Video" component={Video} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
