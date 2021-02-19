import React from "react";
import styled from "styled-components";
import html from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css-3.svg";

function Skill() {
  return (
    <MainSkill id="skill">
      <BoxSet>
        <h1>Skills</h1>
        <Flex>
          <div data-aos="zoom-out">
                       <img src={html} alt=""/>
                       
          </div>
          <div data-aos="zoom-out">
            <Css  />
          </div>
          <div data-aos="zoom-out">JAVASCRIPT</div>
          <div data-aos="zoom-out">REACT.JS</div>
        </Flex>

        <Flex>
          <div data-aos="zoom-out">NODE.JS</div>
          <div data-aos="zoom-out">EXPRESS</div>
        </Flex>

        <Flex>
          <div data-aos="zoom-out">GIT</div>
          <div data-aos="zoom-out">GITHUB</div>
        </Flex>
      </BoxSet>
    </MainSkill>
  );
}

export default Skill;

const MainSkill = styled.div`
  padding: 100px 0;
`;
const BoxSet = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  h1 {
    font-family: lobster;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  div {
    border-bottom: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    padding: 2rem;
  }
  div:hover {
    border-top: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom: 0px solid rgba(146, 207, 250, 0.96);
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    padding: 2rem;
    transform: scale(1);
  }
  
`;
