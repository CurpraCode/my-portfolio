import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactDiv id="contact">
      <Box>
        <h1>Contact Me</h1>
        <Form
          name="contact v1"
          data-aos="fade-up"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <input type="text" placeholder="Name" name="name" required /> <br />
          <input type="email" placeholder="Email" name="email" required />{" "}
          <br />
          <input type="text" placeholder="Subject" required /> <br />
          <textarea placeholder="Message" name="message" />
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
    margin-bottom: 2rem;
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
    border: 1px solid;
    /* padding-top: 10px; */
  }
  textarea {
    width: 100%;
    height: 120px;
    font-size: 20px;
    margin-bottom: 15px;
    border: 1px solid;
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
