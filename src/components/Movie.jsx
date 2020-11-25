import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";

class Movie extends Component {
  render() {
    return (
      <Col className="mb-2">
        <Image
          className="img-fluid"
          src={this.props.imageSrc}
          alt="movie picture"
        />
      </Col>
    );
  }
}

export default Movie;
