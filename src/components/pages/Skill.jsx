import React from "react";
import styled from "styled-components";
import "boxicons";
import typescript from "../../assets/typescript.png"

function Skill() {
  return (
    <MainSkill id="skill">
      <BoxSet>
        <h1>Skills</h1>
        <Flex>
          <div data-aos="zoom-out">
            <box-icon
              type="logo"
              name="html5"
              size="lg"
              color="#f31800"
            ></box-icon>
          </div>
          <div data-aos="zoom-out">
            <box-icon
              type="logo"
              name="css3"
              size="lg"
              color="#4b4bff"
            ></box-icon>
          </div>
          <div data-aos="zoom-out">
            <box-icon
              name="javascript"
              type="logo"
              size="lg"
              color="#fad91f"
            ></box-icon>
          </div>
          <div data-aos="zoom-out">
            <box-icon
              name="react"
              type="logo"
              size="lg"
              color="#1fd9fa"
            ></box-icon>
          </div>
        </Flex>

        <Flex>
        <div data-aos="zoom-out">            
            <box-icon type='logo' name='redux' color="#ad0dfd" size="lg"></box-icon>
          </div>
          <div data-aos="zoom-out">            
          <img
              src={typescript}
              alt="typescript"
              width="40px"
            />
          </div>
          <div data-aos="zoom-out">
            <box-icon
              name="nodejs"
              type="logo"
              size="lg"
              color="#218f12"
            ></box-icon>
          </div>
          <div data-aos="zoom-out">
            <img
              src="https://emmax.tech/images/tools/express.png"
              alt="express"
              width="70px"
            />
          </div>
        </Flex>

        <Flex>
          <div data-aos="zoom-out">
            <box-icon
              name="git"
              type="logo"
              size="lg"
              color="#f55745"
            ></box-icon>
          </div>
          <div data-aos="zoom-out">
            <box-icon name="github" type="logo" size="lg" color="#0e88f2"></box-icon>           
          </div>
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
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  @media screen and (max-width: 840px) {
    flex-flow: wrap;
    justify-content: space-around;
  }

  div {
    background-color: ${props=>props.theme.cardColor};
    border-bottom: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    padding: 2rem;
    margin-top:2rem;
  }
  div:hover {
    border-top: 5px solid rgba(146, 207, 250, 0.96);
    border-bottom: 0px solid rgba(146, 207, 250, 0.96);
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    padding: 2rem;
    transform: scale(1);
  }
  @media screen and (max-width: 590px){
    margin-left: 20px;
    margin-right: 20px;
  }
`;
