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

  // handleChange = (e) => {
  // const {
  // target: { value },
  // } = e;
  // this.setState({
  // term: value,
  // });
  // };

  // handleSubmit = () => {
  //   const { term } = this.state;
  //   if (term !== "") {
  //     this.searchByTerm(term);
  //   }
  // };

  componentDidMount() {
    // this.handleSubmit();
    const {
      match: {
        params: { q: term },
      },
    } = this.props;
    if (term !== "") {
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
