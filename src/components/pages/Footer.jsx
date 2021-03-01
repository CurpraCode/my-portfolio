import React from "react";
import styled from "styled-components";
// import { ReactComponent as Css } from "../../assets/css-3.svg";

function Footer() {
  return (
    <FooterPage>
      <FooterDiv>
        <div>
          <h2>CurtisDev</h2>
          <p>
            {" "}
            <a
              href="https://web.facebook.com/curtis.ayoposi.3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="facebook"
                type="logo"
                size="md"
                color="#4b4bff"
              ></box-icon>
            </a>
            <a
              href="https://www.youtube.com/channel/UCU_r3L-K7rw0As7J8K2Zt6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="youtube"
                size="md"
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
                size="md"
                color="#4b4bff"
              ></box-icon>
            </a>
            <a
              href="https://www.instagram.com/curpra_code/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="instagram"
                type="logo"
                size="md"
                color="#4b4bff"
              ></box-icon>
            </a>{" "}
          </p>
          <P>Design and Developed by Curtis</P>
        </div>
      </FooterDiv>
    </FooterPage>
  );
}
export default Footer;

const FooterPage = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -4px 3px 0px rgb(146 207 250 / 96%);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  /* width:100%; */
`;
const FooterDiv = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  /* width: 100%; */

  div {
    padding-top: 2rem;
  }
  h2 {
    font-family: lobster;
    margin-bottom: 1.5rem;
  }
  p a {
    margin-left: 1.5rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
 
`;
const P=styled.p`
 font-family: lobster;
`