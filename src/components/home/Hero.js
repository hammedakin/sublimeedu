import styled from "styled-components";
import { hero, hero2, hero3 } from "../../assets";
import { ICON_BOOK, ICON_TELEPHONE, ICON_TICKET } from "../../utils/icons";
import { useState } from "react";
import GetInTouch from "../GetInTouch";


const Hero = () => {
      const [selectedLink, setselectedLink] = useState('abroad');

      const abroad = {
            text: 'Broaden your horizons; study at top institutions across 10 countries.',
            content: '',
            img: hero
      };
      const visa = {
            text: 'Unlock your American dream today: ',
            content: 'Migrate to the United States through a visiting visa.',
            img: hero2
      };
      const consult = {
            text: 'Unlock your educational potential: ',
            content: 'Get expert guidance for individuals and institutions from our trusted consultants.',
            img: hero3
      };
      const [selectedData, setselectedData] = useState(abroad);


      function selectData(e) {
            if (e === 'visa') {
                  setselectedLink('visa');
                  setselectedData(visa);
            } else if (e === 'consultancy') {
                  setselectedLink('consultancy');
                  setselectedData(consult);
            } else {
                  setselectedLink('abroad');
                  setselectedData(abroad);
            }
      }

      const links = [
            { name: 'Study Abroad', icon: ICON_BOOK, tag: 'abroad' },
            { name: 'Visa', icon: ICON_TICKET, tag: 'visa' },
            { name: 'Consultancy', icon: ICON_TELEPHONE, tag: 'consultancy' },
      ];

      const { text, img, content } = selectedData;


      return (
            <StyledHero>
                  <StyledTab className="d-flex justify-content-around mb-4 pry-border d-block d-md-none">
                        {links.map(({ name, tag, icon }) =>
                              <a className={`links  ${ tag === selectedLink && 'active' }`}
                                    onClick={() => selectData(tag)}
                                    key={tag}
                              >
                                    <h1 className="display1 m-0">
                                          {icon}
                                    </h1>
                                    <p className="small mb-2">
                                          {name}
                                    </p>
                              </a>
                        )}
                  </StyledTab>
                  <div className="row hero-bg py-4 align-items-cente justify-content-between flex-row-reverse ps-0 ps-md-5"
                        data-aos="zoom-out"
                        data-aos-duration="2000"
                  >
                        <div className="col-md-5 text-center"
                              data-aos="zoom-in"
                              data-aos-duration="3000"
                              data-aos-delay="1000"
                        >
                              <img src={img} alt="Hero" width='70%' />
                        </div>
                        <div className="col-md-6  mt-5 mt-md-0 "
                              data-aos="zoom-in"
                              data-aos-duration="3000"
                              data-aos-delay="1000"
                        >
                              <div className="d-none d-md-block">
                                    <StyledTab className="d-flex justify-content-around ">
                                          {links.map(({ name, tag, icon }) =>
                                                <a className={`links  ${ tag === selectedLink && 'active' }`}
                                                      onClick={() => selectData(tag)}
                                                      key={tag}
                                                >
                                                      <h1 className="display1 m-0">
                                                            {icon}
                                                      </h1>
                                                      <p className="small mb-2">
                                                            {name}
                                                      </p>
                                                </a>
                                          )}
                                    </StyledTab>
                              </div>

                              <div className=" light-text mt-4 d-flex align-items-center h-75"
                                    data-aos="flip-up"
                                    data-aos-duration="3000"
                                    data-aos-delay="2000"
                              >
                                    <div className="">
                                          <h1 className="mb-4">
                                                {text}
                                          </h1>
                                          <p className="">
                                                {content}
                                          </p>
                                          <GetInTouch
                                                color='light'
                                                text='a'
                                          />
                                    </div>
                              </div>
                        </div>

                  </div>
            </StyledHero>
      );
};

export default Hero;

const StyledHero = styled.section`
      padding: 2rem 0;

       img {
            @media screen and (max-width: 780px) {
                  width: 100%;
            }
      }

      .pry-border {
            border: 1px solid var(--pry-color);
      }
.hero-bg{
      background: linear-gradient(90deg, #0746CB 2.1%, #4B53FF 100%);

      border-radius:15px;
}
`;


export const StyledTab = styled.div`
  background: var(--light-color);
  display: flex;
  gap: 12px ;
  border-radius: 5px;
  padding: .4rem .4rem 0;
  text-align: center;
  /* width: fit-content; */
  /* margin-left: auto ; */
  
  
  .links {
    transition:ease 0.5s;
    color: var(--pry-color);
    padding:0 .4rem;
    font-size: 14px;
    text-transform:capitalize;
    cursor:pointer;
    border-bottom: 5px solid transparent;

    &.active{
      border-bottom: 5px solid var(--pry-color);
      border-radius: 4px;
    }
  }
  `;
