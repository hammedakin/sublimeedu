import styled from "styled-components";
import { world } from "../../assets";
import GetInTouch from "../GetInTouch";
import { numbers } from "../../utils/data";


const OurNumbers = () => {
    
      return (
            <StyledOurNumbers>
                  <div className="container">
                        <div className="row justify-content-between align-items-center ">
                              <div className="col-md-4"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >
                                    <img src={world} alt="our numbers" width='100%' />
                              </div>
                              <div className="col-md-5  mt-5 mt-md-0"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                              >

                                    <div className="row">
                                          {numbers?.map(({ number, text }, i) =>
                                                <div className="col-6 text-center" key={i}>
                                                      <h1 className="pry-text">
                                                            {number}
                                                      </h1>
                                                      <p className="grey-bold-text small text-uppercase">
                                                            {text}
                                                      </p>
                                                </div>
                                          )}
                                    </div>
                                    <div className="text-center mt-4 text-md-end">
                                          <GetInTouch
                                                text='a'
                                          />
                                    </div>

                              </div>

                        </div>
                  </div>
            </StyledOurNumbers>
      );
};

export default OurNumbers;

const StyledOurNumbers = styled.section`
      margin: 2rem 0;
      padding: 3rem 0;
      background-color: var(--sec-color);

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