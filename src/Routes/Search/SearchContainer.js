import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "good",
    loading: false,
    error: "",
  };

  // handleChange = (e) => {
  // const {
  // target: { value },
  // } = e;
  // this.setState({
  // term: value,
  // });
  // };

  handleSubmit = () => {
    const { term } = this.state;
    if (term !== "") {
      this.searchByTerm(term);
    }
  };

  componentDidMount() {
    this.handleSubmit();
  }

  searchByTerm = async (term) => {
    try {
      this.setState({
        loading: true,
      });
      const {
        data: { results: movieResults },
      } = await moviesApi.search(term);
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
    } finally {
      this.setState({
        loading: false,
      });
    }

    //console.log("This is Search Part.");
  };

  render() {
    //console.log(this.props);
    const { movieResults, tvResults, term, loading, error } = this.state;
    // console.log(
    //   typeof movieResults,
    //   typeof tvResults,
    //   typeof term,
    //   typeof loading,
    //   typeof error,
    //   typeof this.handleSubmit
    // );
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        term={term}
        loading={loading}
        error={error}
        // handleSubmit={this.handleSubmit}
        // handleChange={this.handleChange}
      />
    );
  }
}
