import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink ,Link} from "react-router-dom";
import { FaChevronRight, FaDotCircle } from "react-icons/fa";
const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);
  const [nav, setNav] = React.useState(false);
  const ToggleClass = () => {
   document.getElementsByClassName('justify-content-end')[0].classList.remove('show');
   };

  React.useEffect(() => {
    setActive(!active)
    setToggle(!toggle)
  }, [])

  return (
    <>
      <Navbar expand="lg" sticky="top" className="custom-shadow">
        <div className="container-fluid px-lg-5">
          <Navbar.Brand ><NavLink to="/"><img src="../assets/img/logo/bfc-logo.webp" alt='logo' className="img-fluid logo" /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className={nav || 'justify-content-end'}>
            <ul className="navbar-nav main-menu pl-lg-5">
              <li><NavLink to="/" onClick={() => { ToggleClass(true) }}activeClassName="">Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => { ToggleClass(true) }}>About</NavLink></li>
              <li className="menu_has_children">
                <Link to="#0">Solutions</Link>
                <div className="sub-menu">
                  <div className="row">
                    <div className="col-md-3 collapse-btn">
                      <div className={active && toggle ? "col-md-12 px-0 active" : "col-md-12 px-0"} onClick={() => { setActive(true); setActive1(false) }}>
                        <Link to="#" className="hm" onClick={() => { setToggle(true) }}>Our Expertise Services
                          <FaChevronRight/>
                        </Link>
                      </div>
                      <div className={active1 ? "col-md-12 px-0 active1" : "col-md-12 px-0 "} onClick={() => { setActive1(true); setActive(false) }}>
                        <Link to="#" className="ab" onClick={() => { setToggle(!toggle) }}>Our Technologies
                          <FaChevronRight className="ml-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-9 shadow-m py-4 pl-5">
                      <div className={active && toggle ? "d-block" : " d-none"}>
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                              <div className="hover-icon1">
                                <li> <img src="/assets/img/New folder/engineer.webp" alt="" srcset="" className="img-fluid menu-img" />
                                  <span className="text-uppercase text-bold"> IT Development Consulting </span>
                                </li>
                                <li>
                                <NavLink to="/web-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Web Development
                                  </NavLink>
                                </li>
                                <li>
                                <NavLink to="/e-commerce-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon"/>
                                    e-Commerce Development
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/app-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Mobile App Development
                                  </NavLink>
                                </li>
                                <li>
                                <NavLink to="/software-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Software Development
                                  </NavLink>
                                 
                                </li>
                              </div>
                            </ul>
                            <ul>
                              <div className="hover-icon1">
                                <li> <img src="/assets/img/New folder/ui.webp" alt="" srcset="" className="img-fluid menu-img" />
                                  <span className="text-uppercase text-bold"> Digital Experience Design </span>
                                </li>
                                <li>
                                  <NavLink to="/ux-ui-design" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    UI / UX Design 
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/graphic-logo-design" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Graphic & Logo Design
                                  </NavLink>
                                </li>

                              </div>
                            </ul>
                          </div>

                          <div className="col-md-6 ">
                            <ul>
                              <div className="hover-icon1">
                                <li> <img src="/assets/img/New folder/idea.webp" alt="" srcset="" className="img-fluid menu-img" />
                                  <span className="text-uppercase text-bold"> Digital Marketing Services </span>
                                </li>
                                <li>
                                  <NavLink to="/ppc" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    PPC 
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/digital-marketing" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Digital Marketing
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/social-media-marketing" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Social Media Marketing
                                  </NavLink>
                                </li>
                               
                                <li>
                                  <NavLink to="/seo" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Search Engine Optimization
                                  </NavLink>
                                </li>
                              </div>
                            </ul>
                          </div>

                        </div>
                      </div>
                      <div className={active1 ? "d-block" : "d-none"}>
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                              <div className="hover-icon1">
                                <li> <img src="/assets/img/New folder/monitor.webp" alt="" srcset="" className="img-fluid menu-img" />
                                  <span className="text-uppercase text-bold"> IT Development Consulting </span>
                                </li>
                                <li>
                                  <NavLink to="/html5-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    HTML5 Development
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/nodejs-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Node JS Development
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/java-development" onClick={() => { ToggleClass(true) }}>
                                    <FaDotCircle className="hicon" />
                                    Java Development
                                  </NavLink>
                                </li>
                                <li>
                                <NavLink to="/php-development" onClick={() => { ToggleClass(true) }}>
                                  <FaDotCircle className="hicon" />
                                  PHP Development
                                </NavLink>
                              </li>
                               
                              </div>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="pt-4">
                             
                              <li>
                                <NavLink to="/laravel-development" onClick={() => { ToggleClass(true) }}>
                                  <FaDotCircle className="hicon" />
                                  Laravel Development
                                </NavLink>
                              </li>
                             
                             
                              <li>
                                <NavLink to="/react-development" onClick={() => { ToggleClass(true) }}>
                                  <FaDotCircle className="hicon" />
                                  React  Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/mern-development" onClick={() => { ToggleClass(true) }}>
                                  <FaDotCircle className="hicon" />
                                  Mern Stack Development
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li><NavLink to="/portfolio" onClick={() => { ToggleClass(true) }}>Portfolio</NavLink></li>
              {/* <li><NavLink to="#" onClick={() => { ToggleClass(true) }}>Blogs</NavLink></li> */}
              <li><NavLink to="/career" onClick={() => { ToggleClass(true) }}>Career</NavLink></li>
              <li><NavLink to="/contact" onClick={() => { ToggleClass(true) }}>Contact Us</NavLink></li>
              <li> <NavLink className="btnc default-btn py-2 px-3 mt-2" to="/get-proposal" onClick={() => { ToggleClass(true) }}>Get Proposal</NavLink></li>
            </ul>
            <div className="other-NavLink my-smc-3">
             
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
export default Header;