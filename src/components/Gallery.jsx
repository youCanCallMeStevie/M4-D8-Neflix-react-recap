import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import Movie from "./Movie";

const Gallery = ({ title, movies, loading }) => {
  return (
    <div>
      <h4>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {loading
          ? [0, 1, 2, 3, 4, 5].map((item) => (
              <Col key={item}>
                <Spinner animation="border" variant="light" />
              </Col>
            ))
          : movies.map((movie) => <Movie data={movie} key={movie.imdbID} />)}
      </Row>
    </div>
  );
};
export default Gallery;
