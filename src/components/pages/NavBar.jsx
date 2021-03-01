import React from "react";
import styled from "styled-components";
// import About from "../pages/About"

function NavBar() {
  return (
    <Header>
      <Nav>
        <h1>
          {" "}
          <span></span> <a href="/"> CurtisDev</a> <span> </span>{" "}
        </h1>
        <label class="menuBox" for="bars">
          <div class="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <ul>
          <li>
            {" "}
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
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
  overflow-x:hidden;
  top: 0;
 
  margin-bottom: 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  
`;
const Nav = styled.nav`
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
    margin-left: 70px ;
    margin-right: 70px;
    ul {
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: rgb(48, 5, 48);
      z-index: 998;
      top: -100vh;
      left: 50%;
      transform: translate(-50%, -100vh);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transition: 0.5s;
    }

    li {
      width: 100%;
      padding: 45px 0;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      transition: 0.5s;
    }
    li:nth-child(1) {
      margin-top: 50px;
    }
  }
  h1 {
    font-family: Lobster;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style-type: none;
    padding: 15px;
    font-weight: bold;
  }
  li a {
    text-decoration: none;
    color: black;
    letter-spacing: 1.5px;
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: black;
  }
  li:hover {
    border-bottom: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;
