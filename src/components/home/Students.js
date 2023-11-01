import styled from "styled-components";
import { TextTitle } from "../../styles";
import { avatar } from "../../assets";
import { students } from "../../utils/data";


const Students = () => {

      return (
            <StyledStudents>
                  <div className="container">
                  <TextTitle pry center
                              data-aos="fade-left"
                              data-aos-duration="1000"
                  >
                        Meet Students We Have Helped
                  </TextTitle>

                  <div className="row mt-5 justify-content-around">
                        {students?.map(({ img, name, word }, i) =>
                              <div className="col-md-3 text-center mb-4" key={i}
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                              >
                                    <div className="student h-100">
                                          <div className="mb-4 img-container mx-auto">
                                                <img src={img} alt={name} width='80px' />
                                          </div>
                                          <div className="">
                                                <h6 className="pry-text">
                                                      {name}
                                                </h6>
                                                <p className="small">
                                                      {word}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
                  </div>
            </StyledStudents>
      );
};

export default Students;

const StyledStudents = styled.section`
   margin: 2rem 0;
      padding: 4rem 0;
      background-color: var(--sec-color);      

      .student {
border-radius: 26.322px;
padding: 32.903px 19.742px;
border: 1.65px solid #093DA2
      }


.img-container {
      width:100px;
                  height:100px;
                  border-radius:15rem;
                  /* text-align:center; */
                  
                  img {
                        width:100%;
                        height:100%;
                        margin:auto;
                        object-fit:cover;
                        border-radius:15rem;
                        background-position: top;
                  }
}


`;