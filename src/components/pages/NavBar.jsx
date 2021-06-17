import React from "react";
import styled from "styled-components";
import Hamburger from "../pages/navs/Hamburger";

function NavBar() {
  return (
    <Header>
      <Nav>
        <h1>
          {" "}
          <span></span> <a href="/"> CurtisDev</a> <span> </span>{" "}
        </h1>
        <Hamburger />
      </Nav>
    </Header>
  );
}
export default NavBar;

const Header = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: -1px 4px 3px 0px rgb(146 207 250 / 96%);
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  margin-bottom: 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const Nav = styled.nav`
  /* overflow-x: hidden; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  height: 70px;
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px !important;
    margin-right: 70px !important;
  }

  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
 

    /* li {
      width: 100%;
      padding: 45px 0;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      transition: 0.5s;
    }
    li:nth-child(1) {
      margin-top: 50px;
    } */
  }
  h1 {
    font-family: Lobster;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
