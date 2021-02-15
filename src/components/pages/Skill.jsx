import React from "react";
import styled from "styled-components";

function Skill() {
  return (
    <div id="skill">
      <BoxSet>
        <h2>Skills</h2>
        <Flex>
          <div data-aos="zoom-out">HTML</div>
          <div data-aos="zoom-out">CSS</div>
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
    </div>
  );
}

export default Skill;

const BoxSet = styled.div`
  margin: 0 auto;
  max-width: 1240px;
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
