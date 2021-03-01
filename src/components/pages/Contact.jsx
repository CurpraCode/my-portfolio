import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactDiv id="contact">
      <Box>
        <h1>Contact Me</h1>
        <Form data-aos="fade-up">
          <input type="text" placeholder="Name" required /> <br />
          <input type="text" placeholder="Email" required /> <br />
          <input type="text" placeholder="Subject" required /> <br />
          <textarea placeholder="Message" />
          <button type="submit">SUBMIT</button>
        </Form>
      </Box>
    </ContactDiv>
  );
}

export default Contact;
const ContactDiv = styled.div`
  padding: 100px 0;
`;
const Box = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  /* height: 90vh; */
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
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
  h1 {
    font-family: lobster;
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Form = styled.div`
  margin: 0 auto;
  max-width: 440px;
  input {
    width: 100%;
    height: 55px;
    font-size: 17px;
    margin-bottom: 15px;
    border-radius: 9px;
    padding-left: 10px;
    /* padding-top: 10px; */
  }
  textarea {
    width: 100%;
    height: 120px;
    font-size: 20px;
    margin-bottom: 15px;
    border-radius: 9px;
    resize: none;
    padding-left: 10px;
    padding-top: 10px;
  }
  input::placeholder {
    /* padding-top: 10px;
    padding-left: 10px; */
  }
  textarea::placeholder {
    /* padding-top: 10px;
    padding-left: 10px; */
  }
  button {
    width: 100%;
    padding: 0.7rem 2.7rem;
    background-color: lightblue;
    border: 0px;
    text-align: center;
    font-size: 20px;
    border-radius: 9px;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
    border-color: rgba(146, 207, 250, 0.96);
  }
  textarea:focus {
    outline: none;
    border-color: rgba(146, 207, 250, 0.96);
  }
`;
