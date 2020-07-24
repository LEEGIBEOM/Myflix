import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "../../Components/Loading";

const Container = styled.div`
  padding: 50px 20px;
`;

const HomePresenter = ({
  nowPlaying,
  upcomming,
  popular,
  topRated,
  error,
  loading,
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="현재 상영중">
          {nowPlaying.map((movie, index) => (
            <span key={index}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기">
          {popular.map((movie, index) => (
            <span key={index}>{movie.title}</span>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="높은 평점">
          {topRated.map((movie, index) => (
            <span key={index}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcomming && upcomming.length > 0 && (
        <Section title="개봉 예정">
          {upcomming.map((movie, index) => (
            <span key={index}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcomming: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
