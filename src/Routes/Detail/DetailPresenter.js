import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";

const Container = styled.div``;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${result.backdrop_path}")`,
      }}
    >
      backdrop_path
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
