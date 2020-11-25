import React, { Component } from "react";
import Gallery from "./Gallery";
import { Alert } from "react-bootstrap";

class Home extends Component {
  state = {
    harryPotterMovies: [],
    spiderManMovies: [],
    starWarsMovies: [],

    error: false,
    loading: true,
  };
  url = "http://www.omdbapi.com/?apikey=1bee4676";


  fetchMovies = () => {
    Promise.all([
      fetch(this.url + "&s=harry%20potter")
        .then((response) => response.json())
        .then((responseObject) => {
          this.setState({ harryPotterMovies: responseObject.Search }, () =>
            console.log(this.state.harryPotterMovies)
          );
        }),
      fetch(this.url + "&s=spider%20man")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ spiderManMovies: responseObject.Search })
        ),
      fetch(this.url + "&s=star%20wars")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ starWarsMovies: responseObject.Search })
        ),
    ])
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

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

          {this.state.error && (
            <Alert variant="danger" className="text-center">
              An error has occurred, please try again later
            </Alert>
          )}

          {!this.state.error &&
            (this.props.searchedMovies.length > 0 ||
              this.props.searchedLoading === true) && (
              <Gallery
                title="Search Results"
                loading={this.props.searchedLoading}
                movies={this.props.searchedMovies}
              />
            )}

          {!this.state.error &&
            (!this.props.searchedMovies.length > 0 ||
              this.props.searchedLoading === null) && (
              <>
                <Gallery
                  title="Spider Man"
                  loading={this.state.loading}
                  movies={this.state.spiderManMovies.slice(0, 6)}
                />
                <Gallery
                  title="Star Wars"
                  loading={this.state.loading}
                  movies={this.state.starWarsMovies.slice(0, 6)}
                />
                <Gallery
                  title="Harry Potter"
                  loading={this.state.loading}
                  movies={this.state.harryPotterMovies.slice(0, 6)}
                />
              </>
            )}
        </div>
      </div>
    );
  }
}
export default Home;
