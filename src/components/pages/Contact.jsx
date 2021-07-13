import React from "react";
import styled from "styled-components";
import {ToastContainer, toast } from "react-toastify";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xpzkrgjb");
  if (state.succeeded) {
    toast.success("Message Sent!");
  }

  return (
    <ContactDiv id="contact">
      <ToastContainer limit={1}/>
      <Box>
        <h1>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="inpnt"
            name="name"
            required
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email"
            id="inpnt"
            name="email"
            required
          />{" "}
          <br />
          <input type="text" placeholder="Subject" id="inpnt" required /> <br />
          <textarea placeholder="Message" id="inpnt" name="message" required />
          <button type="submit" disabled={state.submitting}>
            SUBMIT
          </button>
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

const Form = styled.form`
  margin: 0 auto;
  max-width: 440px;
  input {
    width: 100%;
    height: 55px;
    font-size: 17px;
    margin-bottom: 15px;
    border-radius: 9px;
    padding-left: 10px;
    border: 2.4px solid;
    background: transparent;
    border-color: rgba(67, 172, 247, 0.96);
  }
  textarea {
    background: transparent;
    width: 100%;
    height: 120px;
    font-size: 20px;
    margin-bottom: 15px;
    border: 2.4px solid;
    border-radius: 9px;
    resize: none;
    padding-left: 10px;
    padding-top: 10px;
    border-color: rgba(67, 172, 247, 0.96);
  }
  input::placeholder {
    padding-top: 10px;
    padding-left: 10px;
    color: rgba(146, 207, 250, 0.96);
  }
  textarea::placeholder {
    padding-top: 10px;
    padding-left: 10px;
    color: rgba(146, 207, 250, 0.96);
  }
  button {
    width: 100%;
    padding: 0.7rem 2.7rem;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    border: 0px;
    border-radius: 3rem;
    text-align: center;
    color:white;
    font-size: 20px;
    font-weight:bold;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
`;
