import React,{useEffect} from "react";
import {Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import check from "../images/check.webp";
import {Helmet} from "react-helmet";
const Graphic_Logo_Design = () =>
{

return(
<>
<Helmet>
  <title>
  Best Graphic Designing in Lucknow | Logo Design | Brand Design
  </title>
  <meta name="description" content="We provide  Graphic & Logo Design services solutions to help businesses establish a unique visual identity with stunning graphics and logos."/>
  <meta  name="keywords" content="graphic & logo designer company in lucknow,best graphic design agency in lucknow,
graphic & logo designer company in india,graphic design company in lucknow,logo design company in Lucknow,graphic design agency in lucknow,"/>
  <link rel="canonical" href="https://bfcsofttech.com/graphic-logo-design" />
</Helmet>
<div className="web-page">
  <section className="">
    <div className="container px-0">
      <div className="row  xs-column-reverse  align-items-stretch">
        <div className="col-md-6 align-self-center ">
          <div className="techUse-title ">
            <h1><span className="sub-color">Graphic & Logo  </span>Design</h1>
          </div>
          
          <p className="text-justify">Our designers specialise in creating designs for a variety of mediums, print, digital, and web included. From business cards and brochures to websites and social media graphics, we can help you create a consistent and professional look across all your marketing materials.</p>
          <Link to="/contact" className="btn btn-s">
          Let's Talk
          </Link>
        </div>
        <div className="col-md-6">
          <img src="../assets/img/solutions/graphic.webp" alt="" srcset="" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="work-process py-5">
    <div className="container px-0">
      <div className="row">
        <div className="col-md-12">
          <div className="techUse-title text-center">
            <h2 class="headm">Our <span className="sub-color"> Graphic & Logo
              </span> Design Process 
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="../assets/img/solutions/graphics-des.webp" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="py-lg-5">
    <div className="container px-0">
      <div className="row justify-content-center pt-4">
        <div className="col-md-12 text-center">
          <div className="techUse-title text-center">
            <h2 class="headm">Our <span className="sub-color"> Graphic Design Services </span> Include
            </h2>
          </div>
          <p className="short-desc">We offer a comprehensive range of graphic design services to our patrons in India and abroad, helping businesses create a strong brand identity and stand out in the marketplace. Our services include: </p>
        </div>
      </div>
      <div className="row why-go pb-4">
        <div className="col-md-4 ml-3 ba">
          <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Logo Design </h4>
            <p>
            A well-designed logo is an important part of every brand. More often than not, the logo works as an identity card, helping consumers identify brands at a mere glance. Case in point, Nike and Apple. Our designers can build for you a logo that captures the soul of your brand and appeals to your target audience. 
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Print Design </h4>
            <p>
            We can design for your business professional and eye-catching business cards, brochures and flyers, helping your marketing materials leave a lasting imprint on your consumers.
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Web Design</h4>
            <p>
            Your website is usually the first point of contact for potential clients, making it all the more important to have a design that makes a good first impression. Our designers can build for you visually appealing and user-friendly websites that match your brand and encourage repeat visits.
            </p>
          </div>
          </span>
        </div>
        </div>
        <div className="row why-go justify-content-center">
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Social Media Design </h4>
            <p>
            Social media platforms are a valuable tool for reaching and engaging your target audience. Our designers can help you create eye-catching visual content, especially tailored for social networks. 
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Branding </h4>
            <p>
            We can help you with developing a consistent and unified brand identity across all of your marketing materials. Our designers will collaborate with you to create a brand style guide, covering colours, fonts, and other design components. 
            </p>
          </div>
          </span>
        </div>
    
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="techUse-title text-center">
            <h2 class="headm">  Why Hire <span className="sub-color">BFC Softtech</span> As Your<span className="sub-color"> Graphic Design </span>Company In India 
            </h2>
          </div>
        </div>
        <div className="col-md-12 text-center ">
          <p className="short-desc">BFC Softtech is the name to know when it comes to graphic design services in India. Our skilled design team is dedicated to generating aesthetically appealing and effective designs that will make your business stand out. Here are some more reasons why we believe we are the best solution for your graphic design requirements: </p>
        </div>
      </div>
      <div className="row py-lg-5">
        <section className="web-banner mb-4">
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="banner-content">
                <div className="container px-0">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="banner-img">
                        <div className="">                       
                          <img src="../assets/img/solutions/new/solutions.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title pt-3">
                            <h4 className="color-bluec ">Innovative Designs
                            </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">We believe in pushing the boundaries of creativity and innovation. As a result, our designers are always current with the newest design trends and technologies, and they try to produce designs that are not only visually attractive but also impactful.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="banner-content">
                <div className="container px-0">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="banner-img">
                        <div className="">                       
                          <img src="../assets/img/solutions/new/beskope.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title ">
                            <h4 className="color-bluec ">Quick Turnaround Time
                            </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">We know that time is of great significance in business, which is why we are dedicated to creating high-quality designs in the least amount of time. Our streamlined design approach ensures that your designs are delivered on time and without sacrificing quality.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="banner-content">
                <div className="container px-0">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="banner-img">
                        <div className="">                       
                          <img src="../assets/img/solutions/dev.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title ">
                            <h4 className="color-bluec ">Expert Advice
                            </h4>
                          </div>
                          <div className="banner-disc">
                            <p className=""> Our designers are always available to offer help and direction on all elements of graphic design. We can help you select the proper colour scheme for an upcoming creative or decide the finest design format for your website- ask and you shall receive.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="banner-content">
                <div className="container px-0">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="banner-img">
                        <div className="">                       
                          <img src="../assets/img/solutions/expert.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title ">
                            <h4 className="color-bluec ">Quality Control
                            </h4>
                          </div>
                          <div className="banner-disc">
                            <p className=""> We have a strict quality assurance process in place to ensure that all of our designs satisfy the highest quality standards. We are committed to delivering designs that not just meet, but in fact, surpass your expectations.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </div>
  </section>
  
</div>
</>
)
}
export default Graphic_Logo_Design