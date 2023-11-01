import styled from "styled-components";
import { faq } from "../../assets";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { TextTitle } from "../../styles";
import { faqs } from "../../utils/data";


const FAQs = () => {


      return (
            <div id="faqs">
                  <StyledFaqs>
                        <TextTitle dark center
                              data-aos="fade-left"
                              data-aos-duration="1000"
                        >
                              Frequently Asked Questions About Studying Abroad
                        </TextTitle>

                        <div className="row mt-5">
                              <div className="col-md-4"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                              >
                                    <img src={faq} alt="FAQs" width='100%' />
                              </div>
                              <div className="col-md-8 mt-5 mt-md-0"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                              >
                                    {
                                          faqs?.map(({ title, content }, i) => {
                                                const id = (i + 1);
                                                return (
                                                      <MDBAccordion borderless initialActive={1} key={i}>
                                                            <MDBAccordionItem collapseId={id} headerTitle={title} className="p-">
                                                                  {content}
                                                            </MDBAccordionItem>
                                                      </MDBAccordion>
                                                );
                                          })}
                              </div>
                        </div>
                  </StyledFaqs>
            </div>
      );
};

export default FAQs;

const StyledFaqs = styled.section`
      padding: 4rem 1rem;
      margin: 4rem 0rem;
      box-shadow: 5.296121120452881px 5.296121120452881px 19.860454559326172px 0px rgba(0, 0, 0, 0.1);
      border-radius: 20px;


 
      .accordion-item{
            margin-bottom: 15px;

      }


.accordion-header{
      
      .accordion-button {

box-shadow: 3.74701px 0px 0px 0px #A9D4FF inset, 0px 0.50046px 0px 0px #A9D4FF;
border-radius: 0.5rem 0px 0px 0.5rem !important;
font-weight: 700 !important;
font-size: 18px;
background-color: transparent;
color: var(--dark-color) !important;
/* margin-bottom: 15px; */


}
}
.accordion-button:not(.collapsed){
      border-radius: 0.5rem 0px 0px 0px !important;
      box-shadow: 3.7470059394836426px 0px 0px 0px #A9D4FF inset !important;
      color: var(--dark-color) !important;
      background-color: transparent !important;
      /* margin-bottom: 0px; */
}

.accordion-body {
      /* margin-bottom: 15px !important; */
      border-radius: 0px 0px 0px 0.5rem !important;
      box-shadow: 3.74701px 0px 0px 0px #A9D4FF inset, 0px 0.50046px 0px 0px #A9D4FF;
padding: 1.15rem 1.5rem;
}
`;