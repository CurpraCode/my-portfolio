import React from "react";
import styled from "styled-components";
// import { ReactComponent as Css } from "../../assets/css-3.svg";

function Footer() {
  return (
    <FooterPage>
      <FooterDiv>
        <div>
          <h2>CurtisDev</h2>
          <p>Social Media Icons </p>
          <p>Design and Developed by Curtis</p>
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
    padding-top: 3rem;
  }
`;
