import React from "react";
import Curtis_Resume from "../../assets/Curtis_Resume.pdf";
import styled from "styled-components";
// import circle from "../../assets/circle.svg";
import "boxicons";

function About() {
  return (
    <MainAbout id="about">
      <AboutSection>
        <ImgDiv></ImgDiv>
        <AboutDiv>
          <h1>About Me</h1>
          <p data-aos="fade-left">
            I am a creative FullStack Engineer and Self-Proclaimed genius. I
            have always been passionate about everything related to technology
            and IT, especially the web professions, which I made my career by
            always giving the best of myself as a Web Developer. I also love to
            code things from scratch, and enjoy bringing ideas to life in the
            browser, combining the acquisition of new knowledge with independent
            work on various projects. Aside code I love watching movies and
            travelling to different places.
          </p>
         
            {/* <i class="bx bxs-like bx-fade-down-hover"></i> */}
            <a href={Curtis_Resume} download="curtis-resume">
            <button data-aos="fade-up">
              Download My Resume
              </button>
            </a>
         
        </AboutDiv>
      </AboutSection>
    </MainAbout>
  );
}
export default About;
const MainAbout = styled.div`
  padding: 100px 0;
`;

const AboutSection = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  /* font-family: Montserrat, sans-serif; */
  /* height: 40vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media screen and (max-width: 590px) {
    margin-left: 20px;
    margin-right:20px;
  }
  @media screen and (max-width: 350px) {
    a {
      font-size: 0.8rem !important;
    }
  }
`;
const ImgDiv = styled.div`
  img {
    width: 100%;
  }
`;
const AboutDiv = styled.div`
@media screen and (max-width: 590px) {
    p{
    font-size:0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bolder;
    font-size: 1.1rem;
   
  }
  h1 {
    font-family: lobster;
    margin-bottom: 2rem;
  }
  p {
    line-height: 2rem;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 3rem;
    text-align: justify;
  }
  button {
    padding: 0.7rem 2rem 0.7rem 2rem;
    color: white;
    background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;    
    border: 0px;
    border-radius:3rem;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: bolder;
    font-family: 'Space Grotesk', sans-serif;

    :hover {
      border:2px solid rgba(67, 172, 247, 0.96);
      background-color: transparent;
      transition: 0.3s;
      color: rgba(67, 172, 247, 0.96);
    }
    :focus {
      outline: none;
    }
  }
`;
