import React from "react";
import styled from "styled-components";
import curtis from "../../assets/curtis.jpg";
import ReactRotatingText from "react-rotating-text";
import "boxicons";

function Body() {
  //   const textType = document.querySelector(".text-effect");
  //   const cursorBlink = document.querySelector(".cursor");

  //   const txtArr = [
  //     "Oyakoya Curtis",
  //     "a Web Developer",
  //     "a Front-End Developer",
  //     "a React Developer",
  //   ];

  //   const typeDelay = 200;
  //   const clearDelay = 100;
  //   const newTextDelay = 2000;

  //   let txtArrIndex = 0;
  //   let charIndex = 0;

  //   const type = () => {
  //     if (charIndex < txtArr[txtArrIndex].length) {
  //       if (!cursorBlink.classList.contains("typing"))
  //         cursorBlink.classList.add("typingtext");
  //       textType.textContent += txtArr[txtArrIndex].charAt(charIndex);
  //       charIndex++;
  //       setTimeout(type, typeDelay);
  //     } else {
  //       cursorBlink.classList.remove("typing");
  //       setTimeout(erase, newTextDelay);
  //     }
  //   };
  //   const erase = () => {
  //     if (charIndex > 0) {
  //       if (!cursorBlink.classList.contains("typing"))
  //         cursorBlink.classList.add("typing");
  //       textType.textContent = txtArr[txtArrIndex].substring(0, charIndex - 1);
  //       charIndex--;
  //       setTimeout(erase, clearDelay);
  //     } else {
  //       cursorBlink.classList.remove("typing");
  //       txtArrIndex++;
  //       if (txtArrIndex >= txtArr.length) txtArrIndex = 0;
  //       setTimeout(type, typeDelay + 1100);
  //     }
  //   };
  //   document.addEventListener("DOMContentLoaded", () => {
  //     if (txtArr.length) setTimeout(type, newTextDelay + 250);
  //   });

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
            I build web experience and awesome web app, i solve variant <br />
            web problem and also write code to make things works
          </p>

          <a
            href="https://wa.me/23409097297157?text=HELLO%20CURPRA%20CODE,%20%20PLEASE%20I%20NEED%20WEBSITE%20OR%20WEB-APP%20"
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
                size="lg"
                animation="spin-hover"
                color="#4b4bff"
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
                size="lg"
                animation="spin-hover"
                color="#4b4bff"
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
                size="lg"
                animation="spin-hover"
                color="#4b4bff"
              ></box-icon>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={curtis} alt="my pics here" />
        </div>
      </Section>
    </Main>
  );
}

export default Body;

const Main = styled.div`
  padding: 100px 0;
`;

const Section = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  overflow-x:hidden;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat, sans-serif;
  /* margin-left: 70px !important; */
  /* margin-right: 70px; */
 
  @media screen and (max-width: 1024px) {
    margin-left: 70px !important;
    margin-right: 70px !important;
    flex: none;
    div:nth child(2){
      display:none;
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
    h3{
      margin-top:1rem  !important;
    }
    p {
      font-size: 0.9rem !important;
    }
    h1 {
      font-size: 1.3rem !important;
      font-weight: bolder !important;
      margin-top:1.5rem !important;
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
  }
  span {
    color: #4b4bff;
  }
  h1 {
    font-family: Montserrat, sans-serif;
    font-size: 2.3rem;
    font-weight: bolder;
    /* margin-top:1rem; */
  }
  img {
    width: 85%;
  }
  box-icon {
    margin-right: 20px;
  }
  p {
    font-family: Montserrat, sans-serif;
    line-height: 2rem ;
    font-size: 1.3rem ;
    margin-top: 1.2rem ;
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
    background-color: #4b4bff;
    border: 0px;
    font-family: Montserrat, sans-serif;
    font-size: 0.85rem;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    margin-top: 1rem;

    :hover {
      border: 2px solid #3434f3;
      background-color: transparent;
      transition: 0.1s;
      color: #3939fd;
      font-size: 1.1rem;
      transform: scale(0.9);
    }
    :focus {
      outline: none;
    }
  }
  .social-body {
    margin-top: 5rem;
  }
`;
