import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default class extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    topRated: null,
    error: "",
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcomming },
      } = await moviesApi.upcomming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();

      this.setState({
        nowPlaying,
        upcomming,
        popular,
        topRated,
      });
    } catch {
      this.setState({
        error: "Can't fine Movies data.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
    //console.log("This is Movie(Home) Part.");
  }

  render() {
    const {
      nowPlaying,
      upcomming,
      popular,
      topRated,
      error,
      loading,
    } = this.state;
    // console.log("I'm rendering");
    // console.log(
    //   typeof nowPlaying,
    //   typeof upcomming,
    //   typeof popular,
    //   typeof topRated,
    //   typeof error,
    //   typeof loading
    // );
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
      />
    );
  }
}
