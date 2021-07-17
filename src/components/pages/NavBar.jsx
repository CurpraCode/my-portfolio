import React from "react";
import styled from "styled-components";
import Hamburger from "../pages/navs/Hamburger";

function NavBar({icons, change}) {

  return (
    <Header>
      <Nav>
        <h1>
          {" "}
          <span></span> <a href="/"> CurtisDev</a> <span> </span>{" "}
        </h1>
     <div className="btn-toggle">
     <Hamburger />
        <Toggle onClick={change}>
  {icons}
</Toggle>
     </div>
        
      </Nav>
    </Header>
  );
}
export default NavBar;

const Header = styled.div`
 background-color: ${props=>props.theme.pageBackground};
  box-shadow: -1px 4px 3px 0px rgb(146 207 250 / 96%);
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  overflow: hidden;
  margin-bottom: 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const Nav = styled.nav`
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  height: 70px;
  .btn-toggle{
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
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
  }
  h1 {
    font-family: Lobster;
   color: ${props=>props.theme.titleColor};
  }
  a {
    text-decoration: none;
    color: ${props=>props.theme.titleColor};
  }
  
`;
const Toggle=styled.button`
 background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4; 
cursor:pointer;
height:40px;
width:40px;
border-radius:0.7rem;
border:none;
color: ${props=>props.theme.pageBackground};
&:focus{
  outline:none
}
transition: all .5 ease;
@media screen and (max-width: 790px) {
   margin-right:4rem
     }
`
