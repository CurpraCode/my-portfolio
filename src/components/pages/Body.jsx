import React from "react";
import styled from "styled-components";
import dev from "../../assets/dev.svg";
import ReactRotatingText from "react-rotating-text";
import "boxicons";

function Body() {
   return (
    <Main id="home">
      <Section>
        <div data-aos="fade-left">
          <h3>Hi there,</h3>
          <h1>
            I am{" "}
            <span>
              <ReactRotatingText
                items={[
                  "Oyakoya Curtis",
                  "a Web Developer",
                  "a Front-End Developer",
                  "a React Developer",
                ]}
              />
            </span>
          </h1>
          <p>
            I build web experience and awesome web app, <br /> i solve variant
            web problem and also write code <br /> to make things works
          </p>

          <a
            href="https://wa.me/23408032347546?text=HELLO%20CURPRA%20CODE,%20%20PLEASE%20I%20NEED%20WEBSITE%20OR%20WEB-APP%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>HIRE ME</button>
          </a>
          <div className="social-body">
            <a
              href="https://github.com/CurpraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="spin-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/curtis-oyakoya-b70b091b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="linkedin"
                size="md"
                animation="spin-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
            <a
              href="https://twitter.com/CurpraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="twitter"
                type="logo"
                size="md"
                animation="spin-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
          </div>
        </div>
        
          <img src={dev} alt="my pics here" data-aos="fade-right" />
     
      </Section>
    </Main>
  );
}

export default Body;

const Main = styled.div`
  padding: 100px 0;
  overflow-x: hidden;
`;

const Section = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  overflow-x: hidden;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat, sans-serif;

  @media screen and (max-width: 1024px) {
    margin-left: 70px !important;
    margin-right: 70px !important;
    flex: none;
    div:nth child(2) {
      display: none;
    }
    img {
      visibility: visible;
    }
  }
  @media screen and (max-width: 890px) {
    margin-left: 70px !important;
    margin-right: 70px !important;

    img {
      display: none;
    }
  }

  @media screen and (max-width: 590px) {
    h3 {
      margin-top: 1rem !important;
    }
    p {
      font-size: 0.9rem !important;
    }
    h1 {
      font-size: 1.3rem !important;
      font-weight: bolder !important;
      margin-top: 1.5rem !important;
    }
    button {
      font-size: 0.7rem !important;
    }
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px !important;
    margin-right: 70px !important;
    .social-body {
      margin-top: 3rem !important;
    }
  }

  h3 {
    font-family: Lobster;
    font-weight: bolder;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
  span {
    color: rgba(67, 172, 247, 0.96);
  }
  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.3rem;
    font-weight: bolder;
    margin-top: 1.3rem;
  }
  img {
    width: 50%;
  }
  box-icon {
    margin-right: 20px;
  }
  p {
    font-family: "Space Grotesk", sans-serif;
    font-weight: 300;
    line-height: 25.92px;
    font-size: 1rem;
    margin-top: 1.9rem;
  }

  .react-rotating-text-cursor {
    animation: blink 1s infinite;

    @keyframes blink {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }

  button {
    padding: 0.7rem 2rem 0.7rem 2rem;
    color: white;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    border: 0px;
    border-radius: 3rem;
    font-size: 0.85rem;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    margin-top: 2rem;
    font-family: 'Space Grotesk', sans-serif;

    :hover {
      border: 2px solid rgba(67, 172, 247, 0.96);
      background-color: transparent;
      transition: 0.3s;
      color: rgba(67, 172, 247, 0.96);
    }
    :focus {
      outline: none;
    }
  }
  .social-body {
    margin-top: 3rem;
  }
`;
