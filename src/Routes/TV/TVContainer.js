import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: "",
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch {
      this.setState({
        error: "Can't find TV Shows data.",
      });
    } finally {
      this.setState({
        loading: false,
      });
      // console.log("This is TV Part.");
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    // console.log(
    // typeof topRated,
    // typeof popular,
    // typeof airingToday,
    // typeof error,
    // typeof loading
    // );
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
