import { Link } from "react-router-dom";
import { ICON_LIST } from "../utils/icons";
import { navLink } from "../utils/data";
import { StyledNavbar } from "../styles/Navbar.styled";
import { logo } from "../assets";
import GetInTouch from "./GetInTouch";

const Navbar = () => {


      return (
            <StyledNavbar className="navbar shadow-none navbar-expand-lg fixed-to light-bg border border-bottom" id="navbar">
                  <div className="container">
                        <Link to="/" className="navbar-brand mt-2 mb-3 sec-text fit-content">
                              <img src={logo} width="30px" alt="Sublime" loading="lazy" />
                        </Link>
                        <div className="d-flex mb-2">
                              <a
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <span className="navbar-toggler-icon toggler">
                                          <span className="h3 m-0 pry-text">
                                                {ICON_LIST}
                                          </span>
                                    </span>
                              </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ms-auto text-center">
                                    {navLink?.map(({ title, to }, i) => {
                                          return (
                                                <li className="nav-item" key={i}>
                                                      <a href={to}>
                                                            {title}
                                                      </a>
                                                </li>
                                          );
                                    })}
                              </ul>
                              <ul className="navbar-nav ms-auto text-center mt-3 mt-md-0">
                                    <GetInTouch
                                          text='a'
                                    />
                              </ul >
                        </div >
                  </div >
            </StyledNavbar >

      );
};

export default Navbar;
