import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
function Career_Read() {
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
      <p className='text-rale'>  Job Title  : <span className='sub-color pl-2'>IT Sales Officer</span> </p>
      <p className='text-poppins'>We are searching for driven professionals with experience in sales and
business development to join our high-performing and growing team. The
ideal candidate shall be smart, innovative, and have a passion for solving
business problems. They should have excellent communication skills, a
knack for teamwork, and a drive to exceed customer expectations and beat
deadlines and targets.
      </p>
      <p className='text-rale'> Key Responsibilities:</p>
      <ul className='pl-4 text-poppins'>
        <li>Generate inbound leads through marketing activities (events, digital
marketing), partner/channel leads</li>
        <li>Develop a business pipeline and forward opportunities to account
executives
</li>
        <li>Prospect potential customers and grow the business pipeline through both
inbound (marketing) and outbound (prospecting) channels, with focus on
B2B tech sales</li>
        <li>Utilize first and third-party research and tools for lead generation</li>
        <li>Drive demand through collaboration with marketing and sales personnel,
and execute effective campaigns</li>
      </ul>
      <p className='text-rale'>Desired Profile:</p>
      <ul className='pl-4 text-poppins'>
        <li>Strong analytical and problem-solving skills</li>
        <li>Excellent verbal and written communication</li>
        <li>Ability to work effectively in a team environment
</li>
<li> Background in BFSI and CRM is a plus</li>
      </ul>
      <p className='text-rale'>Qualifications:</p>
      <ul className='pl-4 text-poppins'>
        <li> Bachelor's degree in Computer Science or IT-related field, preferably from
a reputable institute</li>
<li>0-3 years of proven experience in sales development for software products</li>
      </ul>
      <p className='text-rale'>Key Skills:</p>
      <ul className='pl-4 text-poppins'>

       
<li> B2B Sales, Field Sales, Corporate Sales, Negotiation, Direct Sales, IT Sales, Sales Lead Generation, Cold Calling
, Business Development, Software Sales, Demonstration, Enterprise Sales, Demand Generation</li>
      </ul>
      <h6>  Education:  <span className='sub-color'> BCA, B.Tech/B.E., B.Sc in Computers </span></h6>
      <h6> Compensation: <span className='sub-color'>3-5 LPA</span></h6>
      <h6 > Location: <span className='sub-color'>CP-61 Viraj Khand, Gomti Nagar, Lucknow </span></h6>
      <h6> Work from office: <span className='sub-color'> 9:30AM - 6:30 PM</span></h6>
      <h6> Job Type: <span className='sub-color'> Full time</span></h6>
     
      <p>You can send in your resume to  <a href='#'> hrd@bfcsofttech.com</a></p>
    </div>
  </Modal.Body>
</Modal>
</>
);
}
export default Career_Read