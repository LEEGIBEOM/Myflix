import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "",
    loading: true,
    error: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { q: term },
      },
    } = this.props;
    if (term !== "") {
      this.setState({ term });
      this.searchByTerm(term);
    }
  }

  searchByTerm = async (term) => {
    try {
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
    } catch (e) {
      this.setState({ error: e });
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
      />
    );
  }
}
