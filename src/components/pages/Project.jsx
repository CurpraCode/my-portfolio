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
            <a href="https://curpra-calc.netlify.app/">
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
            <a href="https://movieapicurpra.netlify.app/">
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
            <a href="https://curtisdev.netlify.app/">
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
  border-radius:2rem;
  border-radius: 12.8028px;
    background-color: #f9f9f9;
    box-shadow: -9.1159px -18.2318px 24.3091px #fff, 9.1159px 18.2318px 24.3091px #eceef1;
    width: 100%;

  /* :hover{
    box-shadow: -15px 6px 26px 6px rgba(0,0,0,0.26);
-webkit-box-shadow: -15px 6px 26px 6px rgba(0,0,0,0.26);
-moz-box-shadow: -15px 6px 26px 6px rgba(0,0,0,0.26);
  } */

  img {
    width: 100%;
    border-radius:5rem;
  }
  .detail-card {
    padding: 1rem;
    text-align:center;
  }
  button {
    border: 0px;
    background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.99rem 1.2rem;
    color: white;
    border-radius:2rem;
    display:flex;
    justify-content:space-between;
  }
  a {
    text-decoration: none;
  }
  
`;
