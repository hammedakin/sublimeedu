import styled from "styled-components";
import { whychoose } from "../../assets";
import { TextTitle } from "../../styles";
import { ICON_RIBBON, ICON_SHIELD } from "../../utils/icons";


const WhySublime = () => {
      return (
            <div id="why-us">
                  <StyledWhySublime>
                        <div className="row justify-content-around align-items-center ">

                              <div className="col-md-5 "
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >

                                    <TextTitle pry left className="mb-4">
                                          Why Choose Sublime
                                          Education:
                                    </TextTitle>

                                    <div className="bg-choose tested text-center py-4 px-3 my-3">
                                          <h5>
                                                Tested and Trusted
                                          </h5>

                                          {ICON_SHIELD}
                                    </div>
                                    <div className="bg-choose expert text-center py-4 px-3 my-3">
                                          <h5>
                                                Expert Team
                                          </h5>
                                          {ICON_RIBBON}
                                    </div>
                              </div>
                              <div className="col-md-6 mt-5 mt-md-0"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                              >
                                    <img src={whychoose} alt="Why Choose Us" width='100%' />
                              </div>
                        </div>
                  </StyledWhySublime>
            </div>
      );
};

export default WhySublime;

const StyledWhySublime = styled.section`
      padding: 5rem 0;

      svg{
            margin-top:2rem;
            font-size: 100px;
      }

      .bg-choose {
      min-height: 259px;
      top: 1952px;
      left: 166px;
      border-radius: 17px;
      
      font-size: 20px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0em;

      &.tested {
            background: #FFDEDF;
            color: #C6161D;
      }

      &.expert {
            background: #DFFFDE;
            color: #03610C;
      }
      }
`;