import React, { Component } from "react";
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="dropdown ml-4 mt-1">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres &nbsp;
                </button>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item text-white bg-dark" href="#">
                    Comedy
                  </a>
                  <a className="dropdown-item text-white bg-dark" href="#">
                    Drama
                  </a>
                  <a className="dropdown-item text-white bg-dark" href="#">
                    Thriller
                  </a>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              <i className="fa fa-th-large icons"></i>
              <i className="fa fa-th icons"></i>
            </div>
          </div>
          {/* <Gallery title="Trending Now" imageSrc="/assets/images/1.png">
            <div>
              <h4>{props.title}</h4>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <Movie imageSrc={props.imageSrc}>
                  <Col className="mb-2">
                    <Image
                      className="img-fluid"
                      src={props.imageSrc}
                      alt="movie picture"
                    />
                  </Col>
                </Movie>
              </Row>
            </div>
          </Gallery> */}
          <Gallery title="Trending Now" imageSrc="/assets/images/1.png" />
          <Gallery title="Watch it Again" imageSrc="/assets/images/2.png" />
          <Gallery title="New Releases" imageSrc="/assets/images/3.png" />
          <Gallery imageSrc="/assets/images/4.png" />
        </div>
      </div>
    );
  }
}
export default Home;
