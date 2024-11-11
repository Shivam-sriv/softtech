import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { submitData } from "../careerValidation/contactUsValidation";
import axios from "axios";
import { commonUrl } from '../GlobalApiUrls/urls';
import { Link } from "react-router-dom";
import 'animate.css';

const initialState = { Name: '', Email: '', Mobile: '', Massage: '' }

const Contact = () => {
  const [formData, setFormdata] = useState(initialState)
  const [NameError, setNameError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [MassageError, setMassageError] = useState('');


  const [show, setShow] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handeleForm = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const AllData = (e) => {
    e.preventDefault();
    const errorLength = submitData(formData, { setNameError, setEmailError, setMobileError, setMassageError })
    if (errorLength == 0) {
      axios.post(commonUrl + "contactUS", formData).then((res) => {
        console.log("res", res);
        setNameError('')
        setEmailError('')
        setMassageError('')
        setFormdata({ ...initialState })
      })
      setShow(true)
    }
  }
  return (
    <>

      <div className="web-page contact-page">
        <section className="">
          <div className="container px-0">
            <div className="row  pb-5 align-items-stretch xs-column-reverse">
              <div className="col-md-6 py-4 align-self-center">
                <div className="techUse-title ">
                  <h1>Contact<span className="sub-color"> Us</span></h1>
                </div>
                <p className="text-justify">Transform your business with BFC Softtech - the
                  technology experts in automation, computing, and
                  digital/social media marketing. Streamline and automate
                  your operations for success with our out-of-the box
                  solutions.</p>

              </div>
              <div className="col-md-6">
                <img src="/assets/img/solutions/contact.webp" alt="" srcset="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-light-blue py-5">
          <div className="container box1 input-s">
            <div className="row align-items-stretch ">
              <div className="col-md-7 px-5 align-self-center">
                <div className="pl-lg-3 text-smc-center" >
                  <h1 className="pb-0">Get In <span className="sub-color">Touch </span></h1>
                  <p className="short-desc"><b>Here's how you can find us </b></p>
                </div>

                <div className="row">
                  <div className="col-md-2">
                    <a className="text-black" href="tel:9919907702" target="_blank">  <div className="brand-logo brand"><i className="fa fa-phone fa-2x " aria-hidden="true"></i></div>  </a>
                  </div>
                  <div className="col-md-10 text-xs-center">
                    <h5 className="pt-4"><a className="text-black" href="tel:9919907702" target="_blank">+91-99199 07702 </a></h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <a href="https://wa.me/9919907702" target="_blank" >
                      <div className="brand-logo brand"><i className="fa fa-whatsapp fa-2x " aria-hidden="true"></i></div>
                    </a>
                  </div>
                  <div className="col-md-10 text-xs-center">
                    <h5 className="pt-4"><a href="https://wa.me/9919907702" target="_blank" >+91-99199 07702</a></h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">
                    <a href="mailto:support@bfcsofttech.com">
                      <div className="brand-logo brand"><i className="fa fa-envelope fa-2x " aria-hidden="true"></i></div>
                    </a>
                  </div>
                  <div className="col-md-10 al text-xs-center">
                    <h5 className="pt-4"><a href="mailto:support@bfcsofttech.com">support@bfcsofttech.com</a></h5>
                  </div>
                </div>
                {/* <div className=" text-center pt-4">
                  <h1>Address</h1>
                </div> */}
                <div className="row mt-3">
                  <div className="col-md-2">
                    <a href="https://goo.gl/maps/98Ufx6ubQCAuK7vw5" target="_blank" >
                      <div className="brand-logo brand"><i className="fa fa-map-marker fa-2x pl-4" aria-hidden="true"></i></div>
                    </a>
                  </div>
                  <div className="col-md-10 al text-xs-center">
                    <h5 className="pt-4"><a href="https://goo.gl/maps/98Ufx6ubQCAuK7vw5" target="_blank" >CP-61, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010</a></h5>
                    <p className="time mb-0 fs-14"><b>Hours:</b> Mon - Sat :- 09:30 am - 6:30 pm<br/>

(Second & Fourth Saturday Closed)</p>
                  
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="cont-s">
                  <div className="brand-logo"><img src="/assets/img/logo-removebg-preview.webp" alt="" className="img-fluid pt-1 pl-1" /></div>
                  <form className="inputs" onSubmit={AllData}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input className="input-box" type="text" name="Name" onKeyPress={(event) => {
                        if (!/^[a-zA-Z\s]*$/
                          .test(event.key)) {
                          event.preventDefault();
                        }
                      }} value={formData.Name} onChange={handeleForm} placeholder="Enter Your Name" />
                      <small className="text-danger pull-left">{NameError}</small>

                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Mobile No</label>
                      <input className="input-box" type="text" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }} name="Mobile" value={formData.Mobile} onChange={handeleForm} placeholder="Enter Your Mobile" />
                      <small className="text-danger pull-left">{MobileError}</small>

                    </div>
                    <div className="form-group">
                      <label htmlFor="email">EMAIL</label>
                      <input  className="input-box" type="email" name="Email" value={formData.Email} onChange={handeleForm} placeholder="Your Email" />
                      <small className="text-danger pull-left">{EmailError}</small>

                    </div>

                    <div className="form-group">
                      <label htmlFor="massege">MESSAGE</label>
                      <textarea name="Massage" id="" cols="30" rows="3" value={formData.Massage} onChange={handeleForm} placeholder="Type here...."></textarea>
                      <small className="text-danger pull-left">{MassageError}</small>

                    </div>
                    <div className="form-group">
                      <div className="d-flex">
                      <span><input type="checkbox" className="check " /></span><span className="fs-11 pl-2">I, hereby accord my consent to process my above mentioned personal data by BFC Softech Pvt. Ltd. for the purpose of Customer support/Product & Service promotion, in accordance with the provisions of DPDP Act 2023.</span>
                      </div>
                    
                      <small className="text-danger pull-left">{MassageError}</small>

                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btnc default-btn border-0 ">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14238.473501374268!2d81.022761!3d26.8520878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x937668bdbf8ad64a!2sBFC%20Softtech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1673423422867!5m2!1sen!2sin" width="100%" height="400" style={{ border: "4px solid #ecf0f3", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="">

          <Modal show={show} onHide={() => setShow(false)} centered className="animate__animated animate__zoomIn animate__faster  allset">
            <Modal.Body className="text-center">

              <h3 className="text-successc fw-500 py-3 text-poppins"> ALL SET!!</h3>
              <p className="text-black text-poppins">
                Now just sit tight. You’ll hear from us soon.
              </p>
            </Modal.Body>
            <div className="bg-red text-center py-2 order-b">
              <Link to="#" class="text-white font-weight-bold" onClick={() => setShow(false)}><h4>OK</h4></Link>
            </div>
          </Modal>


        </section>
      </div>


    </>

  );
}
export default Contact;