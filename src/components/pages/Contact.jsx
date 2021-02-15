import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <div>
      <Box>
        <form id="contact">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
         
        </form>
      </Box>
    </div>
  );
}

export default Contact;

const Box = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`;
