import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { goBack },
      location: { pathname },
    } = this.props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      goBack();
    }
    this.isMovie = pathname.includes("/movie/");
    console.log("This is Detail Container.");
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
