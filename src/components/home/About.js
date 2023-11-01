import styled from "styled-components";
import { about } from "../../assets";
import { TextTitle } from "../../styles";
import GetInTouch from "../GetInTouch";


const About = () => {
      return (
            <div id="about">
                  <StyledAbout >
                        <div className="row justify-content-around align-items-center flex-row-reverse">

                              <div className="col-md-5 "
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >
                                    <p className="pry-text small mb-4 fw-bold">
                                          ABOUT US
                                    </p>
                                    <TextTitle pry left>
                                          Welcome to Sublime
                                          Education and Global
                                          Resources.
                                    </TextTitle>
                                    <p>
                                          We are a multi-dimensional company split into three
                                          categories to enable optimum satisfaction for our clients.
                                          We are your trusted partner in helping you study, travel,
                                          and explore the world beyond borders. We are a dedicated
                                          team of professionals who offer comprehensive educational
                                          services to individuals seeking overseas study opportunities.
                                          At Sublime, we understand that studying abroad not only
                                          provides the chance to gain a world-class education but also
                                          offers a unique cultural experience that broadens horizons and
                                          fosters personal growth. We take pride in our strong network of
                                          renowned educational institutions around the world.
                                    </p>
                                    <GetInTouch
                                          text='a'
                                    />
                              </div>
                              <div className="col-md-6 mt-5 mt-md-0"
                                    data-aos="fade-right"
                                    data-aos-duration="1000">
                                    <img src={about} alt="About Us" width='100%' />
                              </div>
                        </div>
                  </StyledAbout>

            </div>
      );
};

export default About;

const StyledAbout = styled.section`
      padding: 5rem 0;

`;