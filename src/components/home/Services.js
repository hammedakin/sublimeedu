import styled from "styled-components";
import { TextTitle } from "../../styles";
import { rod } from "../../assets";
import GetInTouch from "../GetInTouch";



const Services = () => {

      const services = [
            {
                  title: 'Institution Search',
                  content: 'We help you browse through our catalogue of partnered international universities and educational institutions to discover what they have to offer and how that matches what you have to offer.'
            },
            {
                  title: 'Tailored Admission Advice',
                  content: 'We help you browse through our catalogue of partnered international universities and educational institutions to discover what they have to offer and how that matches what you have to offer.'
            },
            {
                  title: 'Admission and Application Support',
                  content: 'We are in charge of your financial statements, which will prove to our partner universities that you are eligible to study abroad.'
            },
            {
                  title: 'Visa Application Assistance',
                  content: 'Once you’ve been accepted at an international university, our advisers will guide you through the visa application process and assist you in preparing the necessary documents required for submission.'
            },
            {
                  title: 'Proof of Funds and Bank Statement',
                  content: 'We will be in charge of your financial statements, which will prove to our partner universities that you are eligible to study abroad.'
            },
            {
                  title: 'Visa Interview Training',
                  content: 'After your interview has been scheduled, you are entitled to mock visa interview sessions with our travel consultants, which will prepare you for your interview at the embassy.'
            },
            {
                  title: 'Predeparture and Post-departure Assistance',
                  content: 'We can help you organise everything from helping you find affordable on-campus and off campus  accommodation to airport pickups at state airports (where applicable) and orientation in your new destination.'
            },
            {
                  title: 'Tuition Payment on Arrival to destination',
                  content: 'Our arrangement with our partner institutions allows you to pay your tuition upon arrival at your destination; this option is limited to our institutions in the United States only.'
            },
            {
                  title: 'Internal Document Evaluation',
                  content: 'As opposed to paying a third party for document evaluation, our partner universities allow an internal evaluation for a token. This allows you to conveniently skip the process of writing external exams like IELTS, TOEFL etc.'
            }

      ];


      return (
            <StyledServices>
                  <div className="container">
                        <TextTitle pry left
                              data-aos="fade-left"
                              data-aos-duration="1000"
                        >
                              What Sublime can do for you
                        </TextTitle>
                  </div>
                  <div className="d-flex justify-content-center mt-5"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                  >
                        <div className="d-md-block d-none">
                              <img src={rod} alt="Rod" width='100%' />
                        </div>
                        <div className="col-md-8 mb-4 me-auto"
                        >
                              {services.map(({ title, content }, i) =>
                                    <div className=""
                                          key={i}
                                    >
                                          <div className="card-body">
                                                <h6 className="fw-bold pry-text">{title}</h6>
                                                <p className="m-0 small" key={i}> {content}
                                                </p>

                                          </div>

                                    </div>
                              )}
                              <div className="my-5">
                                    <GetInTouch
                                          text='a'
                                    />
                              </div>
                        </div>
                  </div>
            </StyledServices>
      );
};

export default Services;

const StyledServices = styled.section`
      padding: 5rem 0;

h1{
      font-size:35px;
}
`;