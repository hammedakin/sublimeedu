import styled from "styled-components";
import { TextTitle } from "../../styles";
import GetInTouch from "../GetInTouch";



const InfoProvided = () => {

      const infoNeeded = [
            {
                  title: 'Bsc',
                  data: [
                        '1.(International)Passport',
                        '2. WAEC / NECO certificate ',
                        '3. Passport photograph'
                  ],
                  fade: 'left'
            },
            {
                  title: 'Msc',
                  data: [
                        '1.(International)Passport',
                        '2. WAEC / NECO certificate ',
                        '3. Passport photograph',
                        '4. Bachelor\'s degree certificate ',
                        '5. Transcripts ',
                        '6. Statement of Purpose'
                  ],
                  fade: 'right'
            },
            {
                  title: 'Phd',
                  data: [
                        '1.(International)Passport',
                        '2. WAEC / NECO certificate ',
                        '3. Passport photograph',
                        '4. Bachelor\'s degree certificate ',
                        '5. Transcripts ',
                        '6. Statement of Purpose',
                        '7. Master\'s degree certificate ',
                        '8. Proposal ',
                  ],
                  fade: 'left'
            },
            {
                  title: 'Visiting Visa',
                  data: [
                        '1.(International)Passport',
                        '2. Passport photograph',
                        '3. Employment Letter',
                  ],
                  fade: 'right'
            },
      ];


      return (
            <StyledInfoProvided>
                  <TextTitle pry center
                        data-aos="fade-left"
                        data-aos-duration="1000"
                  >
                        What you need to provide
                  </TextTitle>
                  <div className="row justify-content-center mt-5">

                        {infoNeeded.map(({ title, data, fade }, i) =>
                              <div className="col-md-5 mb-4" key={i}
                                    data-aos={`fade-${ fade }`}
                                    data-aos-duration="1000"
                              >
                                    <div className="card br-md"
                                          style={{ minHeight: '340px' }}
                                    >
                                          <div className="card-body">
                                                <h5 className="">{title}</h5>
                                                {data.map((item, i) =>
                                                      <p className="m-0 small" key={i}> {item}
                                                      </p>
                                                )}
                                          </div>
                                          <div className="card-footer text-end border-0 mb-4">
                                                <GetInTouch
                                                      text='b'
                                                />
                                          </div>

                                    </div>
                              </div>
                        )}
                  </div>
            </StyledInfoProvided>
      );
};

export default InfoProvided;

const StyledInfoProvided = styled.section`
      padding: 5rem 0;

h1{
      font-size:35px;
}
`;