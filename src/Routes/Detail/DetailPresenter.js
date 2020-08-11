import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loading from "../../Components/Loading";
import Production from "../../Components/Production";
import Videos from "../../Components/Videos";
import Seasons from "../../Components/Seasons";

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.3;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 60%;
  margin-left: 30px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin: 20px 0;
`;

const Info = styled.span`
  opacity: 0.9;
  font-size: 13px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
  width: 90%;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Myfilx</title>
      </Helmet>
      <Loading />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.title || result.name
            ? result.title
              ? result.title
              : result.name
            : result.original_title
            ? result.original_title
            : result.original_name}{" "}
          | Myfilx
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPoster.png")
          }
        />
        <Data>
          <Title>
            {result.title || result.name
              ? result.title
                ? result.title
                : result.name
              : result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <InfoContainer>
            <Info>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Info>
            <Divider>•</Divider>
            <Info>
              {result.runtime !== undefined
                ? result.runtime
                : result.episode_run_time[0]}{" "}
              분
            </Info>
            <Divider>•</Divider>
            <Info>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Info>
            {result.adult && (
              <>
                <Divider>•</Divider>
                <Info>
                  <span role="img" aria-label="adult">
                    🔞
                  </span>
                  청불
                </Info>
              </>
            )}
            {result.seasons && result.seasons.length > 0 && (
              <>
                <Divider>•</Divider>
                <Info>{result.seasons[result.seasons.length - 1].name}</Info>
              </>
            )}
            {result.belongs_to_collection && (
              <>
                <Divider>•</Divider>
                <Info>{result.belongs_to_collection.name}</Info>
              </>
            )}
          </InfoContainer>
          <Overview>{result.overview}</Overview>
          <Production
            companies={result.production_companies}
            countries={result.production_countries}
            imdb={result.imdb_id}
            homepage={result.homepage}
          />
          {result.seasons && result.seasons.length > 0 && (
            <Seasons seasons={result.seasons} />
          )}
        </Data>
        <Videos videos={result.videos} />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
