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
        <button>Dark/Light mode</button>
      </Nav>
    </Header>
  );
}
export default NavBar;

const Header = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 7px 8px 0px rgba(146, 207, 250, 0.96);
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  /* left: 0;
  right: 0; */
  margin-bottom: 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  /* bottom:0; */
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  height: 70px;

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
