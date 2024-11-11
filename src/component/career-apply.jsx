import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {submitData} from '../careerValidation/formValidate'
import axios from 'axios'
import {commonUrl} from '../GlobalApiUrls/urls'

const initialState = { Name: "", Email: "", Mobile: "", PostAppliedFor: "", Cv: "" };

function Career_Apply() {
  const [formDatas, setFormDatas] = useState(initialState)
  const [NameError, setNameError] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [CvError, setCvError] = useState('');
  const [PostAppliedForError, setPostAppliedForError] = useState('');
  const [show, setShow] = useState(false);
  const [showThanks, setShowThanks] = useState(false);


  const handleClose = () => {
    setShow(false)
    setFormDatas({...initialState})
    setNameError('');
    setEmailError('');
    setMobileError('');
    setPostAppliedForError('');
    setCvError('');


  };
  const handleShow = () =>{ setShow(true)};

  const handeleForm = (e) => {

    if (e.target.name == "Cv") {
      setFormDatas({ ...formDatas, [e.target.name]: e.target.files[0] })
    } else {
      setFormDatas({ ...formDatas, [e.target.name]: e.target.value })

    }

  }

  const allFormData = async (e) => {
    e.preventDefault();

    const  errorLength =submitData(formDatas,{ setNameError, setEmailError, setMobileError, setPostAppliedForError, setCvError })
    const {Name,Mobile,Email,PostAppliedFor,Cv} = formDatas
    if(errorLength==0){
      const formData = new FormData();
      formData.append('Mobile', Mobile)
      formData.append('Email', Email)
      formData.append('Name', Name)
      formData.append('PostAppliedFor', PostAppliedFor)
      formData.append('Cv', Cv)
      axios.post(commonUrl+'career', formData).then((res) => {
        setFormDatas({})
        setNameError('');
        setEmailError('');
        setMobileError('');
        setPostAppliedForError('');
        setCvError('');
        setShow(false)
        setShowThanks(true)
    
      })
    }
  }

  return (
    <>
      <a href="#" class="btn-s rounded pb-2 pt-1 text-poppins" onClick={(e) => handleShow()}>Apply<i class="fa fa-arrow-right ml-2 app-i"></i></a>
      <Modal show={show} onHide={handleClose} className="" centered>
        <Modal.Header className='bg-light'>
          <div className="col-md-8 px-0">
            <h5 className='text-poppins'>Apply for this job</h5>
          </div>
          <div className="col-md-4 text-right">
            <a href='#' className="text-danger" onClick={handleClose}>
              <FaTimes />
            </a>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="apply-main">
            <Form onSubmit={allFormData}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text"  onKeyPress={(event) => {
                                  if (!/^[a-zA-Z\s]*$/
                                  .test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}  placeholder="Full Name" value={formDatas.Name} name="Name" onChange={handeleForm} />
                <small className="text-danger pull-left">{ NameError }</small>


              </Form.Group>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" 
                 onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                 placeholder=" Your Mobile Number" value={formDatas.Mobile} name="Mobile" onChange={handeleForm} />
                <small className="text-danger pull-left">{ MobileError }</small>

              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" placeholder="Your Email" value={formDatas.Email} name="Email" onChange={handeleForm} />
                <small className="text-danger pull-left">{ EmailError }</small>

              </Form.Group>
              <Form.Group className="mb-3" controlId="post">
                <Form.Label>Post Applied For?</Form.Label>
                <Form.Control type="text" placeholder="" name="PostAppliedFor" value={formDatas.PostAppliedFor} onChange={handeleForm} />
                <small className="text-danger pull-left">{ PostAppliedForError }</small>

              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Resume / CV</Form.Label>
                <input type="file" id="formFile" className='' name="Cv" onChange={handeleForm} />

              </Form.Group>
              <small className="text-danger pull-left">{ CvError }</small>
              <Form.Group controlId="check" className="mb-3">
                      <div className="d-flex">
                      <span><input type="checkbox" className="check " /></span><span className="fs-11 pl-2">I, hereby accord my consent to process my above mentioned personal data by BFC Softtech Pvt. Ltd. for the purpose of employment, in accordance with the provisions of DPDP Act 2023. </span>
                      </div>
                    
                   

                    </Form.Group>
              <Form.Group className="text-right " controlId="exampleForm.ControlInput1">
                <button type='submit'  className='btn-s py-2 rounded border-0'>Submit</button>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <section>
      <Modal show={showThanks} onHide={()=>setShowThanks(false)} centered  className="animate__animated animate__zoomIn animate__faster  allset">
        <Modal.Body className="text-center">
       
        <h3 className="text-successc fw-500 py-3 text-poppins"> Thank you for reaching out to us!!</h3>
        <p className="text-black text-poppins">
        Your request has been received and acknowledged at our end.Our HR Department will get in touch with you shortly.
        </p>
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white font-weight-bold" onClick={()=>setShowThanks(false)}><h4>OK</h4></Link>
       </div>
      </Modal>
      </section>
      {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Modal centered show={showThanks} onHide={()=>setShowThanks(false)}>
                <Modal.Body>
                  <h2>Thank you for reaching out to us!</h2>
                  <p>Your request has been received and acknowledged at our end.Our HR Department will get in touch with you shortly.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn3" variant="outline-primary" onClick={()=>setShowThanks(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div> */}
    </>
  );
}
export default Career_Apply