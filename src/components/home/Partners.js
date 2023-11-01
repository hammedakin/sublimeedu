import styled from "styled-components";
import { countries } from "../../assets";
import GetInTouch from "../GetInTouch";


const Partners = () => {

      return (
            <StyledPartners>
                  <div className="container">
                        <div className="row justify-content-between align-items-center ">
                              <div className="col-md-5"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >
                                    <img src={countries} alt="countries" width='100%' />
                              </div>
                              <div className="col-md-6 mt-5 mt-md-0"
                                    data-aos="fade-right"
                                    data-aos-duration="1000">


                                    <p className="">
                                          We work with over 100 international education partners, many of whom are top international universities throughout the world, offering foundation, undergraduate, postgraduate, and doctorate programs. We have direct access to the university admissions teams, making it easy for you to apply and get your enrollment letter.
                                    </p>

                                    <div className="mt-4 ">
                                          <GetInTouch
                                                text='a'
                                          />
                                    </div>

                              </div>

                        </div>
                  </div>
            </StyledPartners>
      );
};

export default Partners;

const StyledPartners = styled.section`
      padding: 3rem 0;

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