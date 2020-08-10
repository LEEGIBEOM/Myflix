import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "../../Components/Loading";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 50px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="오늘 방영">
          {airingToday.map((tv, index) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.original_name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기">
          {popular.map((tv, index) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.original_name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="높은 평점">
          {topRated.map((tv, index) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.original_name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
