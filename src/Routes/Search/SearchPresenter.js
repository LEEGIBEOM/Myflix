import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 50px 20px;
`;

const SearchPresenter = ({ movieResults, tvResults, term, loading, error }) => (
  <>
    <Helmet>
      <title>Loading | Myfilx</title>
    </Helmet>
    {loading ? (
      <Loading />
    ) : (
      <Container>
        <Helmet>
          {console.log(term)}
          <title>{term ? term : "검색"} | Myfilx</title>
        </Helmet>
        <Section title="영화">
          {movieResults &&
            movieResults.length > 0 &&
            movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_data && movie.release_data.substring(0, 4)}
                isMovie={true}
              />
            ))}
        </Section>
        <Section title="TV 프로그램">
          {tvResults &&
            tvResults.length > 0 &&
            tvResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
        </Section>
      </Container>
    )}
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  term: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
