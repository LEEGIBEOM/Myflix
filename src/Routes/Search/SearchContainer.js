import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "hi",
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    const { term } = this.state;
    if (term !== "") {
      this.searchByTerm(term);
    }
  };

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
  };

  render() {
    const { movieResults, tvResults, term, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        term={term}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
