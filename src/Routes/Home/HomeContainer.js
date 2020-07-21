import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

export default class extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  render() {
    const {
      nowPlaying,
      upcomming,
      popular,
      topRated,
      error,
      loading,
    } = this.state;
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
