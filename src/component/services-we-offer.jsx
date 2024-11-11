import React from "react";
import {Link } from "react-router-dom";
const Services_We_Offer = () =>
{
return(
<>
<div className="container py-5 ">
  <div className="row justify-content-center">
    <div className="col-md-10 pb-3">
      <div className="bfc-advantage-title text-center">
        <h2 className="headm">Services <span className="sub-color">We Offer</span> </h2>
        <div className="about-desc pt-3">
          <p className="short-desc">From custom web development and automation services to professional content creation and app marketing, we possess the expertise and resources needed to meet your unique business needs. Read on to figure more out.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row offer">
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow">
      <div className="normal">
        <div className="icon d-flex pt-3">
         <img src="/assets/img/New folder/computer.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">Website Design &amp; Development</h6>
        </div>
        <p className="pt-4">BFC Softtech specializes in delivering exceptional web design and development services. Our team of experts will work with you to bring your vision to life with a visually stunning and user-friendly website that meets your needs and goals.</p>
     
      </div>
      <Link to="/web-development">
      <div className="service-hover bg-blue text-white">
        <img className="img-fluid" src="/assets/img/New folder/website.webp"/>
        
        <p>Website Design &amp; Development</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">      
          <img src="/assets/img/New folder/app-dev.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">Mobile App Development</h6>
        </div>
        <p className="pt-4">We are a leader in custom mobile app development for both Android and iOS. Our technicians will ensure that your app provides a seamless and safe user experience to your customers without compromising on functionality.</p>
     
      </div>
      <Link to="/app-development">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/app.webp"/>
       
        <p>Mobile App Development</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
        
        <img src="/assets/img/New folder/engineer.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">Software Development</h6>
        </div>
        <p className="pt-4">We specialize in creating state-of-the-art software to streamline and optimize business operations. Let us help you leverage the latest technology to increase the efficiency of your business and grow your company to where you actually want it.</p>
      
      </div>
      <Link to="/software-development">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/software.webp"/>
       
        <p><a href="" className="none">Software Development</a></p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-mdc-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
       
          <img src="/assets/img/New folder/seos.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">SEO Services</h6>
        </div>
        <p className="pt-4">BFC Softtech's SEO services are tailored to match clients’ unique business needs and goals. Our customized approach will improve your online visibility and drive traffic to your website, bringing you closer to success.</p>
  
      </div>
      <Link to="/seo">
      <div className="service-hover bg-blue text-white">
      <img className="img-fluid" src="/assets/img/New folder/seo.webp"/>
       
        <p>SEO Services</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
        <img src="/assets/img/New folder/social-media.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">Social Media Marketing</h6>
        </div>
        <p className="pt-4">Maximize your business's potential with BFC Softtech's social media marketing services. Leverage our expertise to reach new customers and drive growth through targeted campaigns potent enough to penetrate all social media platforms, Facebook, Instagram, Twitter & YouTube included.</p>
       
      </div>
      <Link to="/social-media-marketing">
           <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/smm.webp"/>
       
        <p>Social Media Marketing</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
        <img src="/assets/img/New folder/copy-writing.webp" alt="" srcset="" className="img-fluid" />      
          <h6 className="pl-3 pt-2 color-red"> PPC Services</h6>
        </div>
        <p className="pt-4">Our pay-per-click (PPC) management service is designed to drive targeted traffic to your website without breaking the bank, ultimately leading to increased conversions and revenue.</p>
      
      </div>
      <Link to="/ppc">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/cc.webp"/>        
        <p>PPC Services</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ">
      <div className="normal">
        <div className="icon d-flex pt-3">
        <img src="/assets/img/New folder/advertising.webp" alt="" srcset="" className="img-fluid" />
        
          <h6 className="pl-3 pt-2 color-red"> UI UX Design </h6>
        </div>
        <p className="pt-4">At BFC Softtech, we are committed to providing top-notch UI/UX design services. Our designs are carefully crafted to align with your business objectives, resulting in an exceptional user experience for your customers, without compromising on functionality.</p>
        
      </div>
      <Link to="/ux-ui-design">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/mam.webp"/>
       
        <p>UI UX Design</p>
        <a href="" className="theme-btn none">Learn More</a>
      </div>
      </Link>

    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
        <img src="/assets/img/New folder/shopping-store.webp" alt="" srcset="" className="img-fluid" />
         
          <h6 className="pl-3 pt-2 color-red">E-Commerce Solutions</h6>
        </div>
        <p className="pt-4">We help businesses tap into the power of e-commerce with custom online stores and streamlined payment processing. Our team will work with you to create a seamless and effective shopping experience for your users.</p>
       
      </div>
      <Link to="/e-commerce-development">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/ecom.webp"/>
     
        <p>E-Commerce Solutions</p>
        <a href="#" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
    <div className="col-md-6 col-lg-4 service-box wow fadeInUp delay-0-4s  animated service-normal shadow ml-2">
      <div className="normal">
        <div className="icon d-flex pt-3">
        <img src="/assets/img/New folder/ux-design.webp" alt="" srcset="" className="img-fluid" />
          <h6 className="pl-3 pt-2 color-red">Graphic & Logo Design</h6>
        </div>
        <p className="pt-4">Let our team of design experts help you craft a cohesive and visually appealing brand identity. From logo design to graphic elements, we will work with you to create a strong and memorable image for your business.</p>
      </div>
      <Link to="/graphic-logo-design">
      <div className="service-hover bg-blue text-white">
       <img className="img-fluid" src="/assets/img/New folder/logo.webp"/>
      
        <p>Graphic & Logo Design</p>
        <a href="#" className="theme-btn none">Learn More</a>
      </div>
      </Link>
    </div>
  </div>
</div>
</>
)
}
export default Services_We_Offer