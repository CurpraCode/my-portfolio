import React from 'react';
import styled from "styled-components"

function Navlinks({open}) {
    return (
        <div>
            <NavLink open={open}>
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
        </NavLink>
        </div>
    )
}

export default Navlinks;

const NavLink=styled.ul`
 background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
@media screen and (max-width: 780px) {   
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  top: 0;
  right: 0;
  width: 300px;
  height:100vh;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
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
`
