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
            color="black"
          ></box-icon>
        </Button>
      )}
    </ScrollToUp>
  );
}

const Button = styled.button`
  background-color: rgba(146, 207, 250, 0.96);;
  border: 0px;
  border-radius: 15px;
  padding: 1rem 0.8rem 0.1rem 0.8rem;

  :focus {
    outline: none;
  }
`;
const ScrollToUp = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
