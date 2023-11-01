import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ICON_ARROW_UP } from '../utils/icons';

function ScrollToTopButton() {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
            const toggleVisibility = () => {
                  if (window.scrollY > 100) {
                        setIsVisible(true);
                  } else {
                        setIsVisible(false);
                  }
            };

            window.addEventListener('scroll', toggleVisibility);

            return () => {
                  window.removeEventListener('scroll', toggleVisibility);
            };
      }, []);

      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
            });
      };

      return (
            <StyledScrollToTop className={`scroll-to-top ${ isVisible ? 'visible' : 'hidden' }`}
            title='Scroll to Top'
            >
                  <button onClick={scrollToTop}>
                        {ICON_ARROW_UP}
                  </button>
            </StyledScrollToTop>
      );
}

export default ScrollToTopButton;

const StyledScrollToTop = styled.div`
      
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  transition: opacity 0.3s;


&.hidden {
  opacity: 0;
  pointer-events: none;
}

 button {
  background-color: var(--sec-color);
  color: var(--pry-color);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
}

 button:focus {
  outline: none;
}

`;
