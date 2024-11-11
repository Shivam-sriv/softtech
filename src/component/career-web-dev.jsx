import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
function CareerWebDev() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<>
<a href="#" class=" rounded py-2 text-poppins" onClick={handleShow}>Read More</a>
<Modal show={show} onHide={handleClose} className=""  centered>
  <Modal.Header className='bg-light'>
    <div className="col-md-8 px-0">
      <h5 className='text-poppins'>Job Description</h5>
    </div>
    <div className="col-md-4 text-right">
      <a href='#' className="text-danger" onClick={handleClose}>
        <FaTimes/>
      </a>
    </div>
  </Modal.Header>
  <Modal.Body>
    <div className='read-main'>
      <p className='text-rale'>  Job Title  : <span className='sub-color pl-2'>Web Developer</span> </p>

      <p className='text-rale'>Roles & Responsibilities:-</p>
      <ul className='pl-4 text-poppins'>
        <li>Develop logical and efficient code independently, adhering to best coding practices. </li>
        <li>Deploy applications on AWS, Git, and Heroku, ensuring successful implementation.
</li>
        <li>Create visually appealing and user-friendly interfaces.</li>
        <li>Develop innovative solutions and clear goals that can enhance the functionality and performance of web applications</li>
       
       
      </ul>
      
      <p className='text-rale'>Skills Required:- </p>
      <ul className='pl-4 text-poppins'>
        <li>A full-time degree in B-Tech/ B.E./MCA, with preference to candidates who have completed their degree full-time.</li>
        <li>Working knowledge of PHP and experience working with any of the following frameworks: Zend, Cake PHP, Code Igniter, Symphony.</li>
   <li>Demonstrated proficiency in ReactJs, NodeJs, MySQL, jQuery, JavaScript, CSS, HTML, Angular, and MongoDB.</li>
   <li>Skilled in working with Cake PHP and other PHP frameworks to develop complex and scalable web applications.</li>
   <li>Working knowledgeable of creating visually appealing web pages and interfaces using HTML, Cake PHP and other PHP frameworks.</li>
   <li>Ability to deploy web applications on AWS servers, ensuring smooth and reliable operations.</li>
      </ul>
      
     
      <h6>  Exp:   <span className='sub-color'>2-4years </span></h6>
      <h6> Salary: <span className='sub-color'>30k-40k</span></h6>
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
export default CareerWebDev