import React, { useState } from "react";
import styled from "styled-components";
import Navlinks from "../navs/Navlinks";

function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Navlinks open={!open} />
    </>
  );
}
const Burger = styled.div`
  width: 10%;
  height: 2rem;
  position: fixed;
    border-radius: 12.8028px;
  top: 15px;
  right: 50px;
  z-index: 20;
  display: none;

  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
  }
  div {
    width: 1.4rem;
    height: 0.2rem;
    border-radius: 10px;
    position:${({open})=>(open ? "absolute" : "unset")};
    transform: origin;
    background-color: ${props=>props.theme.titleColor};
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      border-radius: 10px;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: translateX(-30%);
    }
    &:nth-child(3) {
     
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin-top: 0px;
    }
  }
`;

export default Hamburger;
