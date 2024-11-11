import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,FaWhatsapp} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
      
    {/* <!-- Start Footer & Subscribe Section --> */}
  
     <footer className="bg-footer footer">
      <div className="container">
        <div className="row justify-content-between py-2">
            <div className="col-md-4">
            <div className="footer-logo">
            <img src="../assets/img/logo/bfc-logo.webp" alt='logo' className="img-fluid logo"/>
            </div>
            <div className="footer-desc text-rale">
            <p>Transform your business with BFC Softtech - the technology experts in automation, computing, and digital/social media marketing. Streamline and automate your operations for success with our out-of-the box solutions.</p>
            </div>
            <div className="footer-social-icon">
              <ul className="footer-social pt-2">
                <li className="social-icon"><a href="https://www.facebook.com/bfcsofttechpvtltd/" target="_blank"><img src="../assets/img/facebook.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://www.linkedin.com/company/bfcsofttech" target="_blank"><img src="../assets/img/linkedin.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://www.instagram.com/bfcsofttech/" target="_blank"><img src="../assets/img/instagram.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://twitter.com/BfcSofttech" target="_blank"><img src="../assets/img/twitter.webp" className="img-fluid"/></a></li>
                {/* <li className="social-icon"><Link to=""><img src="../assets/img/youtube.png" className="img-fluid"/></Link></li> */}
              </ul>
            </div>
            </div>

            <div className="col-md-3 mt-lg-4 pt-lg-2">
            <div className="footer-title">
            <h2>Our Services</h2> 
            </div>
            <ul>
                <li> <Link to="/software-development"> Software Development </Link></li>
                <li><Link to="/web-development"> Web Development </Link></li>
                <li><Link to="/app-development"> Mobile App Development </Link></li>
                <li> <Link to="/digital-marketing"> Digital Marketing </Link></li>
                <li><Link to="/social-media-marketing"> Social Media Marketing </Link></li>
            </ul>
            </div>
            <div className="col-md-4 mt-lg-4 pt-lg-2">
            <div className="footer-title">
            <h2>Contact Info</h2>  
            <ul>
                <li className="d-flex">
                <div> <FaMapMarkerAlt className="foot-icon" /></div> 
                <div className="desc"><a href="https://goo.gl/maps/98Ufx6ubQCAuK7vw5" target="_blank" >CP-61, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010</a>
                <p className="time mb-0 fs-14"><b>Hours:</b> Mon - Sat :- 09:30 am - 6:30 pm<br/>

                   (Second & Fourth Saturday Closed)</p>
                
                </div>
                </li>
                <li className="d-flex">
                <div> <FaWhatsapp className="foot-icon" /></div> 
                <div className="desc"><a className="text-black" href="https://wa.me/9919907702" target="_blank">+91-99199 07702 </a></div>
                </li>
                <li className="d-flex">
                <div> <FaPhoneAlt className="foot-icon" /></div> 
                <div className="desc"><a className="text-black" href="tel:9919907702" target="_blank">+91-99199 07702 </a></div>
                </li>
             
                <li className="d-flex">
                <div> <FaEnvelope className="foot-icon" /></div> 
                <div className="desc"><a href="mailto:support@bfcsofttech.com">support@bfcsofttech.com</a></div>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <hr/>
                <div className="text-center p-3 card border-0 bg-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                    <h6 className="copyr">© {(new Date().getFullYear())} Copyright: BFC Softtech. All Rights Reserved</h6> </div>
                    </div>
                </div>
                </div>
      </div>
     </footer>
    {/* <!-- End Footer & Subscribe Section -->*/}

    </>
    );
    }
    export default Footer;
