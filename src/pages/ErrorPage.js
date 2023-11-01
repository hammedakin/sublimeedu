
import { Link } from 'react-router-dom';
import { Button, ErrorPageMain } from '../styles';
// import HomeNavbar from './homepage/HomeNavbar';

const ErrorPage = () => {
  return (
    <>
      {/* <HomeNavbar /> */}
      <ErrorPageMain className="light-bg">
        <div className="container">
          <div className="col-md-7 mx-auto text-center ">
            <div className="sec br-md py-5 container">
              <h1 className="mb-1 display-1 pry-text">
                404
              </h1>
              <h5 className="pry-text fw-light mb-5"> Page not found. </h5>
              <Link to="/user/dashboard">
                <Button pry className="btn mt-3 btn-lg "> Home </Button>
              </Link>

            </div>
          </div>

        </div>
      </ErrorPageMain>
    </>
  );
};

export default ErrorPage;