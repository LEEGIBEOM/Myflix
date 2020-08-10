import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "../../Components/Loading";
import Poster from "../../Components/Poster";

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
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_data && movie.release_data.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기">
          {popular.map((movie, index) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_data && movie.release_data.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="높은 평점">
          {topRated.map((movie, index) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_data && movie.release_data.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcomming && upcomming.length > 0 && (
        <Section title="개봉 예정">
          {upcomming.map((movie, index) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_data && movie.release_data.substring(0, 4)}
              isMovie={true}
            />
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
