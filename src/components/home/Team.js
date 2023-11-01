import styled from "styled-components";
import { ourTeam } from "../../utils/data";
import { useRef, useEffect, useState } from "react";

const Team = () => {

      const [activeIndex, setActiveIndex] = useState(0);
      const carouselRef = useRef(null);

      useEffect(() => {
            function handleScroll() {
                  const newIndex = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
                  setActiveIndex(newIndex);
            }
            carouselRef.current.addEventListener('scroll', handleScroll);
            return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
      }, []);

      const handleScroll = (scrollOffset) => {
            carouselRef.current.scrollLeft += scrollOffset;
      };

      return (
            <StyledTeam>
                  <div className="carousel-container ">
                        <div className="carousel justify-content-between" ref={carouselRef}>
                              {
                                    ourTeam.map(({ img, name, position, location }, i) =>
                                          <div className="col-lg-2 col-10 col-md-3 mb-3" key={i}>

                                                <div className="profile-img  pry-text">
                                                      <img src={img} alt={name} width="100%" />
                                                      <div className="text-content py-2">
                                                            <h5 className="mb-0">
                                                                  {name}
                                                            </h5>
                                                            <p className="m-0 small">{position}</p>
                                                            <p className="small" style={{ fontSize: '10px' }}>({location}) </p>
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              }

                        </div>
                        <div className="d-block d-lg-none">
                              <div className="carousel-indicator ">
                                    <button
                                          className="scroll-button scroll-left"
                                          onClick={() => handleScroll(-100)}
                                    >
                                          ←
                                    </button>
                                    <button
                                          className="scroll-button scroll-right"
                                          onClick={() => handleScroll(100)}
                                    >
                                          →
                                    </button>
                              </div>
                        </div>
                  </div>

            </StyledTeam>
      );
};

export default Team;

const StyledTeam = styled.section`
      padding: 4rem 0;
            
            .profile-img {
            position:relative;
            width:100%;
            height:250px;
            border-radius: 10px;
            
            img {
                  width:100%;
                  border-radius: 10px;
                  height:100%;
                  object-fit:cover;
                  background-position: center;
            }
            .text-content {
                  background: rgba(255, 255, 255, 0.72);
                  position:absolute;
                  bottom:0;
                  left: 0;
                  transform: translate(-50%, -50%, -50%, -50%);
                  width: 100%;
                  text-align: center;
                  opacity:0;
                  transition: opacity 0.5s ease;
            } 

            :hover .text-content {
                  opacity: 1;
            }
      }
            

.carousel {
display: flex;
gap: 10px;
overflow: scroll;
scroll-behavior: smooth;
scrollbar-width: none;
  -ms-overflow-style: none; 
  ::-webkit-scrollbar {
    display: none; 
  }
}

.carousel-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
}
      
   .scroll-button {
/* position: absolute; */

  color: var(--pry-color);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: var(--light-color);
  border: var(--pry-color) 1px solid;
}

.scroll-left {
  left: 0;
}

.scroll-right {
  right: 0;
}   

`;