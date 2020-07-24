import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 50px 20px;
`;

// const Form = styled.form`
//   width: 100%;
//   height: 50px;
// `;

// const Input = styled.input`
//   border: none;
//   outline: none;
//   background-color: white;
//   width: 100%;
//   height: 50px;
// `;

const SearchPresenter = ({
  movieResults,
  tvResults,
  term,
  loading,
  error,
  // handleSubmit,
  // handleChange,
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <Section title="영화">
        {movieResults &&
          movieResults.length > 0 &&
          movieResults.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
      </Section>
      <Section title="TV 프로그램">
        {tvResults &&
          tvResults.length > 0 &&
          tvResults.map((tv) => <span key={tv.id}>{tv.name}</span>)}
      </Section>
    </Container>
  );

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  term: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  // handleSubmit: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default SearchPresenter;
