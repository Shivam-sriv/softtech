import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
function CareerPhp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a href="#" class=" rounded py-2 text-poppins" onClick={handleShow}>Read More</a>
      <Modal show={show} onHide={handleClose} className="" centered>
        <Modal.Header className='bg-light'>
          <div className="col-md-8 px-0">
            <h5 className='text-poppins'>Job Description</h5>
          </div>
          <div className="col-md-4 text-right">
            <a href='#' className="text-danger" onClick={handleClose}>
              <FaTimes />
            </a>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className='read-main'>
            <p className='text-rale'>  Job Title  : <span className='sub-color pl-2'>PHP Developer</span> </p>

            <p className='text-rale'>Responsibilities:</p>
            <ul className='pl-4 text-poppins'>
              <li>Conducting analysis of website and application requirements.</li>
              <li>Writing back-end code and building efficient PHP modules.
              </li>
              <li>Developing back-end portals with an optimized database.</li>
              <li>Troubleshooting application and code issues.</li>
              <li>Integrating data storage solutions.</li>
              <li>Responding to integration requests from front-end developers.</li>
              <li>Finalizing back-end features and testing web applications.</li>
              <li>Updating and altering application features to enhance performance.</li>
            </ul>
            <p className='text-rale'>Requirements:</p>
            <ul className='pl-4 text-poppins'>
              <li>Bachelor’s degree in computer science or a similar field.
              </li>
              <li>Knowledge of PHP web frameworks including Yii, Laravel, and CodeIgniter.</li>
              <li>Knowledge of front-end technologies including CSS3, JavaScript, and HTML5.
              </li>
              <li>Understanding of object-oriented PHP programming.</li>
              <li>Previous experience creating scalable applications.</li>
              <li>Proficient with code versioning tools including Git, Mercurial, CVS, and SVN.</li>
              <li>Familiarity with SQL/NoSQL databases.</li>
              <li>Ability to manage project(s).</li>
              <li>Good problem-solving skills.</li>

            </ul>


            <h6>  Exp:   <span className='sub-color'>2-4 years </span></h6>
            <h6> Salary: <span className='sub-color'>20k-30k</span></h6>
            <h6 > Location: <span className='sub-color'>Gomti Nagar, Lucknow </span></h6>
            <h6> Work from office: <span className='sub-color'> 9:30AM - 6:30 PM</span></h6>
            <h6> Job Type: <span className='sub-color'> Full time</span></h6>

            <p>You can send in your resume to  <a href='#'> hrd@bfcsofttech.com</a></p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CareerPhp