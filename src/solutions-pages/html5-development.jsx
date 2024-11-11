import React,{useEffect} from "react";
import {Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import check from "../images/check.webp"
import {Helmet} from "react-helmet";
const Html5_Development = () =>
{

return(
<>
<Helmet>
  <title> HTML5 Development | Expert Web Development Services in Lucknow  </title>
  <meta name="description" content="BFC Softtech offers professional HTML5 development services in Lucknow to help businesses create engaging and dynamic web experiences"/>
  <meta  name="keywords" content="web design,web development,web design company in Lucknow,web development company  in Lucknow,website development company in Lucknow,web development services in Lucknow,HTML5 Development services,"/> 
 <link rel="canonical" href="https://bfcsofttech.com/html5-development" />
</Helmet>
<div className="web-page">
  <section className="">
    <div className="container px-0">
      <div className="row pt-2 align-items-stretch xs-column-reverse">
        <div className="col-md-6 py-4 align-self-center">
          <div className="techUse-title ">
            <h1><span className="sub-color">HTML5 </span>Development</h1>
          </div>
          <p>HTML  5 Development assists websites to perform better with higher user engagement. Begin the development of applications and websites with advanced functionalities, higher speed, innovative UI and seamless user experience. </p>
          <Link to="/contact" className="btn btn-s">
          Let's Talk
          </Link>
        </div>
        <div className="col-md-6">
          <img src="../assets/img/solutions/html5.webp" alt="" srcset="" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="work-process py-5">
    <div className="container px-0">
      <div className="row">
        <div className="col-md-12">
          <div className="techUse-title text-center">
            <h2 class="headm">Our <span className="sub-color"> HTML5 </span> Development Process </h2>          
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="../assets/img/solutions/IT Process.webp" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="">
    <div className="container px-0">
      <div className="row pt-2 align-items-stretch ">
      <div className="col-md-6">
          <img src="../assets/img/solutions/html2.webp" alt="" srcset="" className="img-fluid" />
        </div>
        <div className="col-md-6 py-4 align-self-center">
          <div className="techUse-title ">
            <h2 class="headm">Trustworthy<span className="sub-color">HTML5 </span>development team for hire</h2>
          </div>
          <p>Hire reputed, experienced, and incredibly trained teams meriting in HTML5 development for high-value solutions. These solutions are a combination of performance and innovative features.  </p>
         
        </div>
        
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container px-0">
      <div className="row justify-content-center pt-4">
        <div className="col-md-11 text-center">
          <div className="techUse-title text-center">
            <h2 class="headm">Why you should Go for <span className="sub-color"> HTML5 Development </span> </h2>
          </div>
          <p className="short-desc">HTML 5 is the latest and more progressive version of HTML and it aids in providing secure and sustainable solutions. Smooth HTML 5 website development and app design solutions will meet all the business and industry needs.  </p>
        </div>
      </div>
      <div className="row why-go pb-4">
        <div className="col-md-4 ml-3 ba">
          <span>
          <div className="hover-icon">
            <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Browser Compatibility</h4>
            <p>
            HTML5 is simple to implement as it is compatible with CSS3. Browsers such as Chrome, Firefox, Opera support HTML5 tags. This shall render the webpages correctly.
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Offline browsing </h4>
            <p>
            HTML5 allows the internet users to browse the webpages and apps even in the absence of the internet. Users can also save informative data to their database locally.
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Cleaner Code</h4>
            <p>
            In HTML previous versions, divisions were used for content. HTML5 has better ID attributes that can not only describe, but also format the website content.
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
            <h4 className="color-bluec pt-3">Easy to implement  </h4>
            <p>
            When compared to other languages like C, C++, HTML is the easiest to implement. The simple tag-based format helps the web designers and developers to build interactive and engaging web pages that can help in attracting the customers to the website.
            </p>
          </div>
          </span>
        </div>
        <div className="col-md-4 ml-3 ba">
        <span>
          <div className="hover-icon">
          <img src={check} alt="" srcset="" className="img-fluid" />
            <h4 className="color-bluec pt-3">Improved interactions </h4>
            <p>
            HTML5 offers more active website that promptly responds to the users and allow them to interaction with the content. With offline storage of the database, document editing, and timely media playback, HTML offer a dynamic application.  
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
            <h2 class="headm">  Why Choose <span className="sub-color">BFC Softtech</span> as a <span className="sub-color"> HTML5 Development </span> Company? </h2>
          </div>
        </div>
        <div className="col-md-12 text-center ">
          <p className="short-desc">BFC Softtech offers guaranteed SLAs, timely delivery, and advanced programming. With BFC Softtech, the clients can expect a team of collaborative, accountable, transparent, and dedicated project managers.   </p>
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
                          <img src="../assets/img/solutions/dev.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title pt-3">
                            <h4 className="color-bluec ">Experience </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">BFC Softtech comes with an extremely skilled team of experts and developers that deliver world-class experience in HTML. The team will build secure, robust, as well as customized HTML apps and websites to meet the specific operational and business needs. Through innovation and advanced techniques, the designers will create a website that is faster and engaging.</p>
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
                          <img src="../assets/img/solutions/new/account.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title ">
                            <h4 className="color-bluec ">Accountability  </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">The clients can expect complete accountability from the team at the time of project. The developers will be completely responsible with the timely delivery of the projects and well within the expected budget. </p>
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
                          <img src="../assets/img/solutions/new/transperancy.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title ">
                            <h4 className="color-bluec ">Transparency   </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">BFC Softtech offers complete transparency throughout the project process and execution. The team make sure to carry out a smooth flow of communication to meet the client’s expectations.   </p>
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
                          <img src="../assets/img/solutions/new/security.webp" className="img-fluid" alt="" />                           
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch ">
                      <div className="align-self-center">
                        <div className="banner-content">
                          <div className="banner-title">
                            <h4 className="color-bluec ">Security  </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">BFC Softtech methodology ensures safe verification and reviewing at every step of development for maximum safety and protection.   </p>
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
                          <div className="banner-title">
                            <h4 className="color-bluec ">Requirement specific </h4>
                          </div>
                          <div className="banner-disc">
                            <p className="">Clients can list all their requirements, goals, and specifications and BFC Softtech will deliver. The project managers and developers will give confirmation of the project delivery in respect to the client’s budget and deadline.    </p>
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
  {/* <section className="pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="techUse-title text-center mb-5">
            <h2 class="headm">Your <span className="sub-color"> FAQ's </span>  </h2>
            <p className="short-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <Accordion className="border-0" allowZeroExpanded={"true"}>
        <div className="row">
          <div className="col-md-6">
            <AccordionItem>
              <AccordionItemHeading className="bg-light-blue">
                <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div className="col-md-6">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
      
    </div>
    
  </section> */}
</div>
</>
)
}
export default Html5_Development