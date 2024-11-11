import React,{useEffect} from "react";
import Career_Apply from "../component/career-apply";
import CareerPhp from "../component/career-php";
import Career_Read from "../component/career-read-more";
import CareerWebDev from "../component/career-web-dev";
const Career = () =>
{

return(
<>
<div className="web-page">
  <section className="">
    <div className="container px-0">
      <div className="row  pb-lg-5 align-items-stretch xs-column-reverse">
        <div className="col-md-6 py-4 align-self-center">
          <div className="techUse-title">
            <h1>Careers <span className="sub-color">With Us</span></h1>
          </div>
          <p className="text-justify">BFC Softech deals in automation and IT-based solutions, and therefore our quality is a by-product of the workforce we house. We regularly and continuously strive to upgrade the skills and efficiency of our employees and provide them with a process-driven atmosphere to perform. Our HR Policies are one of the best in the industry and have been widely appreciated for transparency of norms.</p>
       
        </div>
        <div className="col-md-6 py-4">
          <img src="/assets/img/solutions/career.webp" alt="" srcset="" className="img-fluid"/>
        </div>
      </div>
    </div>
  </section>
  <section className=" ">
    <div className="container">
      <div className="heading text-center">
        <h1>Current <span className="sub-color">Openings </span> </h1>
      </div>
      <div class="row py-5">
        <div class="col-md-6 col-lg-4">
          <div class="service-card-c">
            <div class="service-card_number">01</div>
            <div class="shape-icon"> <span class="dots"></span></div>
            <h3 class="box-title pb-3"><a href="service-details.html">IT Sales Officer</a></h3>
            <div class="service-card_text d-flex justify-content-around py-3">
              <div>
                <h6 className="text-poppins">  <img src="/assets/img/calendar.webp" alt="bg" className="img-fluid mx-w-24"/> 1 Year</h6>
              </div>
              <div>
                <h6 className="text-poppins">  <img src="/assets/img/google-maps.webp" alt="bg" className="img-fluid mx-w-24"/> Lucknow</h6>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <Career_Read/>
              </div>
              <div>
                <Career_Apply/>
              </div>
            </div>
            <div
              class="bg-shape"><img src="/assets/img/New folder/service-card-bg.webp" alt="bg"/></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 my-smc-3">
          <div class="service-card-c">
            <div class="service-card_number">02</div>
            <div class="shape-icon"> <span class="dots"></span></div>
            <h3 class="box-title pb-3"><a href="service-details.html">PHP Developer</a></h3>
            <div class="service-card_text d-flex justify-content-around py-3">
              <div>
                <h6 className="text-poppins">  <img src="/assets/img/calendar.webp" alt="bg" className="img-fluid mx-w-24"/> 1 Year</h6>
              </div>
              <div>
                <h6 className="text-poppins"> <img src="/assets/img/google-maps.webp" alt="bg" className="img-fluid mx-w-24"/> Lucknow</h6>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <CareerPhp/>
              </div>
              <div>
                <Career_Apply/>
              </div>
            </div>
            <div
              class="bg-shape"><img src="/assets/img/New folder/service-card-bg.webp" alt="bg"/></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="service-card-c">
            <div class="service-card_number">03</div>
            <div class="shape-icon"> <span class="dots"></span></div>
            <h3 class="box-title pb-3"><a href="service-details.html">Web Developer</a></h3>
            <div class="service-card_text py-3 d-flex justify-content-around">
              <div>
                <h6 className="text-poppins"><img src="/assets/img/calendar.webp" alt="bg" className="img-fluid mx-w-24"/>   1 Year</h6>
              </div>
              <div>
                <h6 className="text-poppins"> <img src="/assets/img/google-maps.webp" alt="bg" className="img-fluid mx-w-24"/>  Lucknow</h6>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <CareerWebDev/>
              </div>
              <div>
                <Career_Apply/>
              </div>
            </div>
            <div
              class="bg-shape"><img src="/assets/img/New folder/service-card-bg.webp" alt="bg"/></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</>
);
}
export default Career;