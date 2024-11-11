import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { submitData } from "../careerValidation/pruposalValiadte";
import { commonUrl } from "../GlobalApiUrls/urls";
import { Link } from "react-router-dom";
import axios from 'axios'
const initialState = { Name: '', Email: '', Mobile: '', City: '', InformUs: '' }
const Get_Proposal = () => {
  const [objData, setObjData] = useState(initialState)
  const [NameError, setNameError] = useState('')
  const [EmailError, setEmailError] = useState('')
  const [MobileError, setMobileError] = useState('')
  const [CityError, setCityError] = useState('')
  const [InformUsError, setInformUsError] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AllData = (e) => {
    setObjData({ ...objData, [e.target.name]: e.target.value })
  }
  const Submit = (e) => {
    e.preventDefault();
    const lengthErroor = submitData(objData, { setNameError, setEmailError, setMobileError, setCityError, setInformUsError })

    if (lengthErroor == 0) {
      axios.post(commonUrl + "purposal", objData).then((res) => {
        setShow(true)
        setObjData({...initialState})
        setNameError('')
        setEmailError('')
        setMobileError('')
        setCityError('')
        setInformUsError('')
      })

    }
  }



  return (
    <>

      <div className="web-page contact-page get-pro">
        <section className="">
          <div className="container px-0">
            <div className="row  pb-lg-5 align-items-stretch xs-column-reverse">
              <div className="col-md-6 py-4 align-self-center">
                <div className="techUse-title ">
                  <h1>Get <span className="sub-color">Proposal</span></h1>
                </div>
                <p>Want to take your business to the next level? Talk to our experts, helping us diagnose your specific needs, so we can curate a solution tailored keeping in mind your business objectives.</p>

              </div>
              <div className="col-md-6">
                <img src="../assets/img/New folder/proposal.webp" alt="" srcset="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-light-blue py-5">
          <div className="container box1 input-s">
            <div className="row align-items-stretch ">
              <div className="col-md-12 text-center pb-4" >
                <p className="proposal">Please <span className="sub-color"> provide </span> the request details and our team will filter results and will get back to you.</p>
              </div>
              <div className="col-md-5 align-self-center">
                <img src="/assets/img/New folder/Checklist.webp" alt="" srcset="" className="img-fluid" />

              </div>
              <div className="col-md-7 align-self-center">

                <div className="cont-s">
                  <div className="brand-logo"><img src="/assets/img/logo-removebg-preview.webp" alt="" className="img-fluid pt-1 pl-1" /></div>
                  <form className="inputs" onSubmit={Submit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Name <span>*</span></label>
                        <input className="input-box" type="text" name="Name" placeholder="Your Name" value={objData.Name}       onKeyPress={(event) => {
                                  if (!/^[a-zA-Z\s]*$/
                                  .test(event.key)) {
                                    event.preventDefault();
                                  }
                                }} onChange={AllData} />
                        <small className="text-danger pull-left">{NameError}</small>

                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="email">EMAIL <span>*</span></label>
                        <input className="input-box" type="email" name="Email" placeholder="Your Email" value={objData.Email} onChange={AllData} />
                        <small className="text-danger pull-left">{EmailError}</small>

                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="mobile">Mobile no<span>*</span></label>
                        <input className="input-box" type="text"       onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }} name="Mobile" placeholder="Mobile no" value={objData.Mobile} onChange={AllData} />
                        <small className="text-danger pull-left">{MobileError}</small>

                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="city">City <span>*</span></label>
                        <input className="input-box" type="text" name="City" placeholder="City" value={objData.City} onChange={AllData} />
                        <small className="text-danger pull-left">{CityError}</small>
                      </div>

                      <div className="form-group col-md-12">
                        <label>Anything else you want to inform us? <span>*</span></label>
                        <textarea name="InformUs" id="" cols="30" rows="3" value={objData.InformUs} onChange={AllData} placeholder="Type here...."></textarea>
                        <small className="text-danger pull-left">{InformUsError}</small>

                      </div>
                      <div className="form-group">
                      <div className="d-flex">
                      <span><input type="checkbox" className="check " /></span><span className="fs-11 pl-2">I, hereby accord my consent to process my above mentioned personal data by BFC Softech Pvt. Ltd. for the purpose of Customer support/Product & Service promotion, in accordance with the provisions of DPDP Act 2023.</span>
                      </div>
                                       

                    </div>
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

        {/* <section className="">
  <div className="container px-0">
    <div className="row  pb-5 align-items-stretch">
      <div className="col-md-12 py-4 align-self-center">
        <div className="techUse-title text-center">
          <h1>Google  <span className="sub-color">Reviews</span></h1>
          <p className="short-desc">Google rating score:4.8 of 5,based on 112 reviews.</p>
          <div className="reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
        </div>
            
      </div>
      <div className="testimonial-box-container">
      
            <div className="testimonial-box">
      
                <div className="box-top">
                    
                    <div className="profile">
                      
                        <div className="profile-img">
                            <img src="/assets/img/New folder/user.png" alt="" />
                        </div>
                       
                        <div className="name-user">
                            <strong>Liam mendes</strong>
                            <span>@liammendes</span>
                        </div>
                    </div>
                  
                    <div className="reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
               
                <div className="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                </div>
            </div>
          
            <div className="testimonial-box">
              
                <div className="box-top">
                   
                    <div className="profile">
                      
                        <div className="profile-img">
                        <img src="/assets/img/New folder/user.png" alt="" />
                        </div>
                       
                        <div className="name-user">
                            <strong>Noah Wood</strong>
                            <span>@noahwood</span>
                        </div>
                    </div>
                
                    <div className="reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
               
                <div className="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                </div>
            </div>
         
            <div className="testimonial-box">
             
                <div className="box-top">
                
                    <div className="profile">
                    
                        <div className="profile-img">
                        <img src="/assets/img/New folder/user.png" alt="" />
                        </div>
                       
                        <div className="name-user">
                            <strong>Oliver Queen</strong>
                            <span>@oliverqueen</span>
                        </div>
                    </div>
                   
                    <div className="reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
              
                <div className="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                </div>
            </div>
           
            <div className="testimonial-box">
            
                <div className="box-top">
                  
                    <div className="profile">
                     
                        <div className="profile-img">
                        <img src="/assets/img/New folder/user.png" alt="" />
                        </div>
                      
                        <div className="name-user">
                            <strong>Barry Allen</strong>
                            <span>@barryallen</span>
                        </div>
                    </div>
               
                    <div className="reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
           
                <div className="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                </div>
            </div>
        </div>
     
      
    </div>
  </div>
</section> */}
        <section className="">

          <Modal show={show}  onHide={() => setShow(false)} centered className="animate__animated animate__zoomIn animate__faster  allset">
            <Modal.Body className="text-center">

              <h3 className="text-successc fw-500 py-3 text-poppins"> Thank You For Taking The First Good Step Towards Business Growth.!!</h3>
              <p className="text-black text-poppins">
              We Have Received Your Request. Wait For Our Call And Share The Maximum Details You Have On-Call With Our Expert To Get Better Help.
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
export default Get_Proposal;