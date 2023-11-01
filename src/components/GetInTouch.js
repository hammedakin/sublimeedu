import { Button } from "../styles";


const GetInTouch = ({ color, text }) => {

      const content = text === 'a' ? 'Speak to a Constultant' : 'Get Started';

      return (
            <>
                  {color === 'light' ?
                        <a href="#contact">
                              <Button light
                                    className="btn ">
                                    Speak to a Consultant
                              </Button>
                        </a>
                        :
                        <a href="#contact">
                              <Button pry
                                    className="btn ">
                                    {content}
                              </Button>
                        </a>

                  }
            </>
      );
};

export default GetInTouch;