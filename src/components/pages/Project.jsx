import React from "react";
import styled from "styled-components";
import calc from "../../assets/calc.jpg";
import movieapi from "../../assets/movieapi.jpg";

function Project() {
  return (
    <MainPro id="project">
      <Body>
        <h1>Projects</h1>

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
    background-color: ${props=>props.theme.cardColor};
    box-shadow: ${props=>props.theme.cardShadow};
    width: 100%;
text-align:center;
padding: 2rem 1rem;
  

  img {
    width: 50%;
    border-radius:45rem;
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
    margin-bottom: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  } 
  a {
    text-decoration: none;
  }
  p{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  h2{
  font-size: 1.4rem;
  margin-bottom: 1rem;
  }
`;
