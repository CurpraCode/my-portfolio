import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "boxicons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollToUp>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <box-icon
            name="chevrons-up"
            type="regular"
            size="md"
            animation="fade-up"
            color="#ffffff"
          ></box-icon>
        </Button>
      )}
    </ScrollToUp>
  );
}

const Button = styled.button`
   background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
  border: 0px;
  z-index: 1000;
  border-radius: 1.1rem;
  padding: 0.8rem 0.5rem 0rem 0.5rem;

  :focus {
    outline: none;
  }
`;
const ScrollToUp = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 5.5rem;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  @media screen and (max-width: 590px) {
    right: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
