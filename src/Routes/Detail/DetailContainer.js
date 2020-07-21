import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

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

    this.isMovie = pathname.includes("/movie/");
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      goBack();
    }

    let result = null;
    try {
      if (this.isMovie) {
        ({ data: result } = await moviesApi.detail(parsedId));
      } else {
        ({ data: result } = await tvApi.detail(parsedId));
      }
    } catch {
      this.setState({
        error: "Can't find detail data.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
    console.log("This is Detail Container.");
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
