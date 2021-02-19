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
              <img src={calc} alt="" />
            </div>
            <div className="detail-card">
              <h2>JAVASCRIPT UI-CALCULATOR</h2>
              <p>
                This UI calculator was built with HTML, CSS AND JavaScript, it
                is also responsive to mobile view
              </p>
            </div>
            <a href="">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src={movieapi} alt="" />
            </div>
            <div className="detail-card">
              <h2>MOVIE API WEBSITE</h2>
              <p>
                The website is built with HTML, CSS, JavaScript and API call
                from a database using axios, it is quite responsive to mobile
                view.
              </p>
            </div>
            <a href="">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src="" alt="" />
            </div>
            <div className="detail-card">
              <h2>CurtisDev</h2>
              <p>
                This is a portfolio website of a web developer built with
                react.js, styled-components
              </p>
            </div>
            <a href="">
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
  /* height: 100vh; */
  h1 {
    font-family: lobster;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
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
