import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  font-size: 15px;
  border-bottom: 1px solid white;
`;

const VideoList = styled.div`
  font-size: 20px;
  margin-top: 100px;
  width: 10%;
`;

const Video = styled.div`
  margin: 10px 0;
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.7;
  transition: opacity 0.2s linear;
  :hover {
    opacity: 1;
  }
`;

const Videos = ({ videos }) =>
  videos &&
  videos.results &&
  videos.results.length > 0 && (
    <VideoList>
      관련 영상
      <span role="img" aria-label="link">
        👇
      </span>
      {videos.results.map((video, index) => (
        <Video key={index}>
          <Link href={`https://www.youtube.com/watch?v=${video.key}`}>
            {video.name}
          </Link>
        </Video>
      ))}
    </VideoList>
  );

Videos.propTypes = {
  videos: PropTypes.objectOf(PropTypes.array),
};

export default Videos;
