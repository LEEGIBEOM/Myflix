import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "",
    loading: false,
    error: null,
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
      />
    );
  }
}
