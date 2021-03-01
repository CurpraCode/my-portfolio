import React from "react";
import styled from "styled-components";
import calc from "../../assets/calc.jpg";
import movieapi from "../../assets/movieapi.jpg";

function Project() {
  return (
    <MainPro id="project">
      <Body>
        <h1>Some of My Works</h1>

        <Box>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={calc} alt="calc" />
            </div>
            <div className="detail-card">
              <h2>JAVASCRIPT UI-CALCULATOR</h2>
              <p>
                This UI calculator was built with HTML, CSS AND JavaScript, it
                is also responsive to mobile view
              </p>
            </div>
            <a href="h">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src={movieapi} alt="movie" />
            </div>
            <div className="detail-card">
              <h2>MOVIE API WEBSITE</h2>
              <p>
                The website is built with HTML, CSS, JavaScript and API call
                from a database using axios, it is quite responsive to mobile
                view.
              </p>
            </div>
            <a href="h">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src="" alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>CurtisDev</h2>
              <p>
                This is a portfolio website of a web developer built with
                react.js, styled-components
              </p>
            </div>
            <a href="h">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
        </Box>
      </Body>
    </MainPro>
  );
}

export default Project;

const MainPro = styled.div`
  padding: 100px 0;
`;
const Body = styled.div`
  margin: 0 auto;
  max-width: 1240px;
 
  h1 {
    font-family: lobster;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 590px){
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 999px) {
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
  }
`;
const InnerBox = styled.div`
  border: 0px;
  margin: 1rem;
  flex: 1;
  box-shadow: 0px 7px 8px 0px rgba(146, 207, 250, 0.96);

  img {
    width: 100%;
  }
  .detail-card {
    padding: 1rem;
  }
  button {
    border: 0px;
    background-color: blue;
    padding: 0.99rem;
    color: white;
  }
  a {
    text-decoration: none;
  }
`;
