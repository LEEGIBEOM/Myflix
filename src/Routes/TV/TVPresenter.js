import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "../../Components/Loading";

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
            <span key={index}>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기">
          {popular.map((tv, index) => (
            <span key={index}>{tv.name}</span>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="높은 평점">
          {topRated.map((tv, index) => (
            <span key={index}>{tv.name}</span>
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
