import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom"

class Movie extends Component {
  render() {
    return (
      <Col className="mb-2">
        <Image
          className="img-fluid"
          src={this.props.data.Poster}
          alt="movie picture"
          onClick={() => this.props.history.push(`/details/${this.props.data.imdbID}`)}

        />
      </Col>
    );
  }
}

export default withRouter(Movie);
