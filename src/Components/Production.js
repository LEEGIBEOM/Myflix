import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Companies = styled.div`
  margin-top: 30px;
  font-size: 13px;
  opacity: 0.7;
  width: 50%;
`;

const Countries = styled.div`
  margin-top: 10px;
  font-size: 13px;
  opacity: 0.7;
  width: 50%;
`;

const Link = styled.a`
  font-size: 15px;
  border-bottom: 1px solid white;
`;

const IMDB = styled.div`
  margin: 20px 0;
  margin-top: 30px;
  width: 50%;
`;

const Homepage = styled.div`
  margin: 20px 0;
  width: 50%;
`;

const Production = ({ companies, countries, imdb, homepage }) => (
  <>
    {companies && companies.length > 0 && (
      <Companies>
        제작사:{" "}
        {companies.map((com, index) =>
          index === companies.length - 1 ? com.name : `${com.name}, `
        )}
      </Companies>
    )}

    {countries && countries.length > 0 && (
      <Countries>
        국가:{" "}
        {countries.map((com, index) =>
          index === countries.length - 1 ? com.name : `${com.name}, `
        )}
      </Countries>
    )}
    <IMDB>
      {imdb && (
        <Link href={`https://www.imdb.com/title/${imdb}`}>
          IMDB 홈페이지 접속{" "}
          <span role="img" aria-label="link">
            👉
          </span>
        </Link>
      )}
    </IMDB>
    <Homepage>
      {homepage && (
        <Link href={homepage}>
          홈페이지 접속{" "}
          <span role="img" aria-label="link">
            👉
          </span>
        </Link>
      )}
    </Homepage>
  </>
);

Production.propTypes = {
  companies: PropTypes.array,
  countries: PropTypes.array,
  imdb: PropTypes.string,
  homepage: PropTypes.string,
};

export default Production;
