import styled from "styled-components";
import { logo } from "../assets";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { locations, socials } from "../utils/data";


const Footer = () => {


      return (
            <StyledFooter>
                  <div className="container">
                        <div className="row">
                              <div className="col-md-6">
                                    <img src={logo} alt="" width="50%" />

                                    <div className="d-flex mt-4">
                                          {socials?.map(({ icon, url }, i) =>
                                                <a href={url} target="_blank" rel="noopener noreferrer"
                                                      className="px-2 h4 pry-text"
                                                      key={i}
                                                >
                                                      {icon}
                                                </a>
                                          )}
                                    </div>
                              </div>
                              <div className="col-md-6 mt-5 mt-md-0">
                                    {
                                          locations?.map(({ title, content }, i) => {
                                                const id = (i + 1);
                                                return (
                                                      <MDBAccordion borderless initialActive={1} key={i}>
                                                            <MDBAccordionItem collapseId={id} headerTitle={title}>
                                                                  {content}
                                                            </MDBAccordionItem>
                                                      </MDBAccordion>
                                                );
                                          })}
                              </div>
                        </div>
                  </div>
                  <div className="footer-copyright pry-text text-center mt-5 py-3">
                        © 2023{" "}
                        <a href="https://sublimeeducation.ng" className="pry-text text-decoration-underline">               {" "}
                              sublimeeducation.ng
                        </a>{" "}
                        || All rights reserved

                        <hr className="my-1 mx-auto w-50" />

                        <div style={{ fontSize: "smaller" }}>
                              Developed by {' '}
                              <a href="https://hammedakin.nelify.app" className="pry-text text-decoration-underline" target="_blank">
                                    Hammed Akin Technologies
                              </a>
                        </div>
                  </div>
            </StyledFooter>
      );
};

export default Footer;


const StyledFooter = styled.footer`
      background-color: var(--sec-color);
      padding: 2rem 0 0;
      
      
      
      .accordion-item{
            margin-bottom: 5px;
            
      }
      
      .accordion-header{
      .accordion-button {
            
            box-shadow: 3.74701px 0px 0px 0px var(--pry-color) inset;
            border-radius: 0 !important;
            font-weight: 700 !important;
            font-size: 18px;
            background-color: transparent;
            color: var(--dark-color) !important;
            
            
      }
}
.accordion-button:not(.collapsed){
      border-radius: 0 !important;
      box-shadow: 3.7470059394836426px 0px 0px 0px var(--pry-color) inset !important;
      color: var(--dark-color) !important;
      background-color: transparent !important;
}

.accordion-body {
      border-radius: 0 !important;
      padding: 0px 1.15rem 1.5rem;
      font-weight: 600 ;
      box-shadow: 3.74701px 0px 0px 0px var(--pry-color) inset;
      font-size:15px;
}
     

.footer-copyright {
      background: rgba(3, 47, 94, 0.064);
}
`;