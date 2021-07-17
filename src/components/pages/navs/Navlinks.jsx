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
    display: flex;
    justify-content: space-between;
    align-items: center;
    
@media screen and (max-width: 780px) {  
  background-color: ${props=>props.theme.cardColor};
    box-shadow: ${props=>props.theme.cardShadow};
 
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
    /* font-weight: bold; */
    color:${props=>props.theme.titleColor};
  }
  li a {
    color:${props=>props.theme.titleColor};
    letter-spacing: 1.5px;
    font-family: 'Space Grotesk', sans-serif;
  }
  a {
    text-decoration: none;
  }
  li:hover {
    border-bottom: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`
