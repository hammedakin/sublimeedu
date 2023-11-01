import styled from "styled-components";
import { ICON_NOTICE } from "../../utils/icons";


const KindlyNote = () => {
      return (
            <StyledKindlyNote
                  data-aos="zoom-in"
                  data-aos-duration="1000"
            >
                  <div className="col-md-9 col-11 mx-auto">
                        <div className="row align-items-center">
                              <div className="col-md-2 col-lg-1 text-center ">
                                    <h1 className="me-0 me-md-0">
                                          {ICON_NOTICE}
                                    </h1>
                              </div>
                              <div className="col-md-10 col-lg-11 mt-3 mt-md-0">
                                    <p className="m-0 small">
                                          Kindly Note: We advise that you weigh your options carefully, as we do not make refunds of any kind
                                          with an exception on the death of applicants, and in this case, we are obliged to make a refund of not
                                          more than 55% - 60% of the amount paid.
                                    </p>
                              </div>
                        </div>
                  </div>
            </StyledKindlyNote>
      );
};

export default KindlyNote;

const StyledKindlyNote = styled.section`
      padding: 2rem 0;
      background-color: #FFE0E1 ;
      
      @media screen and (max-width: 580px) {
            /* padding: 1rem 0; */
      }

      border-radius: 30px;

      h1{
            color:#D73D43 ;
      }
`;