import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 10%;
  border: 1px solid white;
  width: 26%;
  height: 60%;
  border-radius: 5px;
  float: right;
`;

const SeasonList = styled.select`
  width: 100%;
  height: 8%;
  background-color: inherit;
  border: none;
  outline: none;
  color: white;
`;
const Season = styled.option`
  background-color: rgba(20, 20, 20, 0.9);
`;

const Cover = styled.div`
  width: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 92%;
`;

const Seasons = ({ seasons }) => {
  const [poster, setPoster] = useState(seasons[0].poster_path);

  const handleChangeSeason = (e) => {
    const season = seasons.filter((season) => season.name === e.target.value);
    setPoster(season[0].poster_path);
  };

  return (
    <Container>
      <SeasonList onChange={handleChangeSeason}>
        {seasons.map((season, index) => (
          <Season key={index}>{season.name}</Season>
        ))}
      </SeasonList>
      <Cover
        className="season_poster"
        bgImage={
          poster
            ? `https://image.tmdb.org/t/p/original${poster}`
            : require("../assets/noPoster.png")
        }
      />
    </Container>
  );
};

Seasons.propTypes = {
  seasons: PropTypes.array,
};

export default Seasons;
