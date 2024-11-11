import React,{useEffect} from "react";
import {Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Services_We_Offer from "../component/services-we-offer";
import What_Sets_Apart from "../component/what-sets-apart";
import {Helmet} from "react-helmet";
import 'animate.css';
import Otherd from "../component/What-we-offer-that-others-don't";
function Home() {   
return (
<>
<Helmet>
  <title>
    Best IT| Digital Marketing| Software & Web Development Services
  </title>
  <meta
    name="description"
    content="Best IT & Digital Marketing company based in Lucknow. We offer top-notch services such as web development, SEO, PPC, social media marketing, and more."
    />
  <meta
    name="keywords"
    content="Best It Company in Lucknow,Top Digital Marketing Company in Lucknow,Web Development Company in Lucknow,Website Development Company in Lucknow,Mobile App Development Company in Lucknow,Website Designing Company in Lucknow,Digital Marketing Company in Lucknow,Web Development Company in India,Digital Marketing Company in India,Web Development Agency in Lucknow,Digital Marketing Agency in Lucknow,Best Digital Marketing & Web Development Agency in Lucknow,Software Development company in Lucknow,Digital Marketing Agency in Lucknow,Web Development Agency in Lucknow,Online Marketing Agency in Lucknow,"/>
  <link rel="canonical" href="https://bfcsofttech.com/" />
  <meta  property="og:title" content="Best IT| Digital Marketing| Software & Web Development Services " />
  <meta property="og:site_name" content="BFC Softtech" />
  <meta property="og:url" content="https://bfcsofttech.com/" />
  <meta property="og:description" content="Best IT & Digital Marketing company based in Lucknow. We offer top-notch services such as web development, SEO, PPC, social media marketing, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://bfcsofttech.com/assets/img/logo/bfc-logo.png"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:site" content="@BfcSofttech"/>
  <meta name="twitter:title" content="Best IT| Digital Marketing| Software & Web Development Services"/>
  <meta name="twitter:description" content="Best IT & Digital Marketing company based in Lucknow. We offer top-notch services such as web development, SEO, PPC, social media marketing, and more. "/>
  <meta name="twitter:image" content="https://bfcsofttech.com/assets/img/logo/bfc-logo.png"/>
 
</Helmet>
{/* ========= Start Home Area ========= */}
<section className="home-banner">
  <Carousel>
    <Carousel.Item>
      <div className="banner-content">
        <div className="container-fluid  px-lg-5 mx-lg-4 ">
          <div className="row xs-column-reverse align-items-stretch xs-t-column-reverse">
            <div className="col-lg-6 d-flex  mt-3 align-self-center">
              <div className="">
                <div className="banner-content">
                  <div className="banner-title typing-demo">
                    <div className="my-smc-3">
                      <h1 className="hms">Digital & Social Media </h1>
                      <h1 className="hms">  Marketing Services  </h1>
                    </div>
                    <h5 className="py-lg-3 animate__animated animate__fadeInUp">SEO | Google Ads | Social Media | Content Writing</h5>
                  </div>
                  <div className="banner-disc">
                    <p className="mb-4">Hire a digital marketing agency that will set you apart from the competition, propelling your industry standing from “a player” to “the player”.</p>
                  </div>
                </div>
                <div className="banner-btn animate__animated animate__fadeInDown pt-3">
                  <Link to="/about" className="btnc default-btn-one">
                  About Us</Link>
                  <Link className="btnc default-btn" to="/contact">
                  Contact Us </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <div className="banner-img">
                <div className="">
                  <img src="../assets/img/banner/website-creative_2.webp" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="banner-content">
        <div className="container-fluid  px-lg-5 mx-lg-4">
          <div className="row xs-column-reverse align-items-stretch xs-t-column-reverse">
            <div className="col-lg-6 d-flex  mt-3 align-self-center">
              <div className="">
                <div className="banner-content">
                  <div className="banner-title typing-demo home-c">
                    <div className="my-smc-3">
                      <h2 className="hms">Information Technology  </h2>
                      <h2 className="hms">   & Automation Solutions  </h2>
                    </div>
                    <h5 className="py-lg-3 animate__animated animate__fadeInUp">Web Development  |  App Development | E-Commerce </h5>
                  </div>
                  <div className="banner-disc">
                    <p className="mb-4">Automation & computing solutions to help your business grow. Sit back & let our team take care of your design and development worries!</p>
                  </div>
                </div>
                <div className="banner-btn animate__animated animate__fadeInDown pt-3">
                  <Link to="/about" className="btnc default-btn-one">
                  About Us</Link>
                  <Link className="btnc default-btn" to="/contact">
                  Contact Us </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <div className="banner-img">
                <div className="">
                  <img src="../assets/img/banner/banner-4.webp" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</section>
{/* ======== End Home Area ======== */}  
{/* ======== What We Offer That Others Don't ======== */}        
<section className="bg-light-blue mt-n3">
  <Otherd />
</section>
{/* ========End  What We Offer That Others Don't ======== */}
{/* ====================  Sticky Section  Start ================== */}
<section className='stiky'>
  <What_Sets_Apart />
</section>
{/* ====================  Sticky Section End ================== */}
{/* ====================  what we offer Section End ================== */}
<section className="offer-c">
  <Services_We_Offer />
</section>
{/* ==================== portfolio ================== */}
<section className="home-portfolio-section pt-5 ">
  <div className="container ">
    <div className="row justify-content-center">
      <div className="col-md-6 pb-lg-4">
        <div className="portfolio-title text-center">
          <h2 className="py-3 headm">   <span className="sub-color">Our </span>  Portfolio    </h2>
          <div className="portfolio-desc">
            <p className="short-desc">Take a look at our portfolio to check out projects we have delivered!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="portfolio py-lg-2 portfolio-bg">
    <div className="container ">
      <div className="row align-items-center justify-content-between pt-4">
        <div className="col-md-5">
          <div className="portfolio-info">
            <h3>Koshala Literature Festival</h3>
            <p>With BFC Softtech as its technological partner, KLF-Awadh promised to bring together the biggest names in the fields of Literature, Arts, Music, Politics and Filmmaking on one stage. Here’s how we helped them:</p>
            <ul className="pl-3">
              <li>Developed and optimized the Koshala Literature Festival’s official website.</li>
              <li>Brainstormed and created content for distribution on social media.</li>
              <li>Outlined and implemented an infallible social media and digital marketing campaign to ensure a healthy footfall at the festival.  </li>
            </ul>
            <Link to="/portfolio" className="btnc default-btn-one mt-4">
            View  Projects</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="portfolio-img">
            <img src="../assets/img/portfolio/koshala-literature-festival.webp" className="img-fluid featured-banner" alt="" />
          </div>
          <p> <img src="../assets/img/animeted-icon/oval-3.webp" className="img-fluid tenMT01 mobile-none" alt="" />
            <br />
            <img src="../assets/img/animeted-icon/combined-shape.webp" className="img-fluid tenMT02 mobile-none" alt="" />
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="portfolio py-lg-2 portfolio-bg  bg-light-blue">
    <div className="container ">
      <div className="row align-items-center justify-content-between pt-4">
        <div className="col-md-5">
          <div className="portfolio-info">
            <h3>Orgeen </h3>
            <p>Orgeen is an agri-tech startup cultivating and distributing hydroponic and organic farm produce in and around Lucknow. Here’s how we helped them:</p>
            <ul className="pl-3">
              <li>Developed and optimized Orgeen’s official website.</li>
              <li>Designed and set up the company's e-commerce-enabled online store.</li>
              <li>Designed and developed an app to facilitate the sale of Orgeen products</li>
              <li>Brainstormed & created content for distribution on social media.</li>
            </ul>
            <Link to="/portfolio" className="btnc default-btn-one mt-4">
            View  Projects</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="portfolio-img">
            <img src="../assets/img/portfolio/orgeen.webp" className="img-fluid featured-banner" alt="" />
          </div>
          <img src="../assets/img/animeted-icon/shape1.webp" className="img-fluid dotted-circle mobile-none" alt="" />
          <br />
          <img src="../assets/img/animeted-icon/shape3.webp" className="img-fluid dotted-circle3 mobile-none" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="portfolio py-lg-2  portfolio-bg">
    <div className="container ">
      <div className="row align-items-center justify-content-between pt-4">
        <div className="col-md-5">
          <div className="portfolio-info">
            <h3>BFC Publications </h3>
            <p>BFC Publications is a publishing house functioning out of Lucknow, helping publish authors with a penchant for delivering brilliant works of literature. Here’s how we helped them:</p>
            <ul className="pl-3">
              <li>Developed and optimized the company’s official website.</li>
              <li>Designed and developed the company’s e-commerce platform and online bookstore store.</li>
              <li>Designed and developed an app to facilitate online publishing at the company’s behest.</li>
              <li>Outlined and implemented an infallible social media and digital marketing campaign on the company’s behalf.</li>
              <li>Brainstormed & created content for marketing the company on social media.</li>
            </ul>
            <Link to="/portfolio" className="btnc default-btn-one mt-4">
            View  Projects</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="portfolio-img">
            <img src="../assets/img/portfolio/publications.webp" className="img-fluid featured-banner" alt="" />
          </div>
          <p> <img src="../assets/img/animeted-icon/11.webp" className="img-fluid shape1 mobile-none" alt="" />
            <br />
            <img src="../assets/img/animeted-icon/12.webp" className="img-fluid shape2 mobile-none" alt="" />
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="portfolio py-lg-2 portfolio-bg  bg-light-blue">
    <div className="container ">
      <div className="row align-items-center justify-content-between pt-4">
        <div className="col-md-5">
          <div className="portfolio-info">
            <h3>BFC Capital</h3>
            <p>BFC Capital is one of the biggest mutual funds distributors in North India that has been providing client-centric wealth management services for over two decades. Here’s how we helped the company expand its business:</p>
            <ul className="pl-3">
              <li>Developed and optimized the company’s official website.</li>
              <li>Designed and set up the company’s e-commerce funnel.</li>
              <li>Designed and developed a fintech app to facilitate online investments at the company’s behest.</li>
              <li>Designed and developed the company’s flagship algorithm for recommending mutual fund schemes based on user inputs, namely Prodigy Pro.</li>
              <li>Outlined and implemented an infallible social media and digital marketing campaign on the company’s behalf.</li>
              <li>Brainstormed & created content for marketing the company on social media.</li>
            </ul>
            <Link to="/portfolio" className="btnc default-btn-one mt-4">
            View  Projects</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="portfolio-img">
            <img src="../assets/img/portfolio/capital.webp" className="img-fluid featured-banner" alt="" />
          </div>
          <img src="../assets/img/animeted-icon/shape1.webp" className="img-fluid dotted-circle mobile-none" alt="" />
          <br />
          <img src="../assets/img/animeted-icon/shape3.webp" className="img-fluid dotted-circle3 mobile-none" alt="" />
        </div>
      </div>
    </div>
  </section>
</section>
</>
);
}
export default Home;