import React,{useEffect} from "react";
import {Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import {Helmet} from "react-helmet";
const Portfolio = () =>
{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
return(
<>
<Helmet>
  <title> BFC Softtech - Portfolio | Expertise in Custom Software Development & Digital Marketing</title>
  <meta name="description" content=" BFC Softtech's impressive portfolio showcasing our projects that demonstrate commitment to delivering high-quality software solutions & marketing tailored to your unique business needs"/>
  <meta  name="keywords" content="Web Development Agency in Lucknow,Digital Marketing Agency in Lucknow,
Best Digital Marketing & Web Development Agency in Lucknow,Software Development company in Lucknow,Digital Marketing Agency in Lucknow,Online Marketing Agency in Lucknow,Online Marketing Company in India,IT Services in lucknow,"/> 
 <link rel="canonical" href="https://bfcsofttech.com/portfolio" />
</Helmet>
<style>
    {`    
    .box-shadow
{
	-webkit-box-shadow: 0 1px 1px rgba(72,78,85,.6);
	box-shadow: 0 1px 1px rgba(72,78,85,.6);
	-webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	-ms-transition: all .2s ease-out;
	-o-transition: all .2s ease-out;
	transition: all .2s ease-out;
    cursor:pointer;
}
.box-shadow:hover
{
	-webkit-box-shadow: 0 20px 40px rgba(72,78,85,.6);
	box-shadow: 0 20px 40px rgba(72,78,85,.6);
	-webkit-transform: translateY(-15px);
	-moz-transform: translateY(-15px);
	-ms-transform: translateY(-15px);
	-o-transform: translateY(-15px);
	transform: translateY(-15px);
}
.card
{
	border-radius: 25px;
	
}

.card img
{
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
}

.portfolio .card svg
{
    font-size:62px;
	position:absolute;
	top:24rem;
  -webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	-ms-transition: all .2s ease-out;
	-o-transition: all .2s ease-out;
	transition: all .2s ease-out;
	filter:drop-shadow(2px -1px 4px rgba(0, 69, 134, 0.2));
}
.card:hover svg
{
	filter:drop-shadow(2px -1px 4px rgba(0, 69, 134, 0.4));
}

.i
{
	position:absolute;
	top: 18rem;
	right: 2rem;
	color:white;	
	background: #d33f42;
	padding: 1rem;
	border-radius: 100%;
	transition: all .6s ease-in-out;
}

.card:hover .i
{
	transform: rotate(-180deg);
}

.i:hover
{
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.7) 0px 18px 36px -18px inset;
}   
    
    `}
</style>


<div className="web-page portfolio">
<section className="">
  <div className="container px-0">
    <div className="row pb-5 align-items-stretch xs-column-reverse">
      <div className="col-md-6 py-4 align-self-center">
        <div className="techUse-title ">
          <h1>Portfolio</h1>
        </div>
        <p className="text-justify">Over the years, BFC Softtech has helped numerous businesses across industries scale up their operations and achieve online success. As a result, our team possesses extensive proven experience in providing customised solutions tailored to meet the unique needs of all types of businesses. We pride ourselves on our ability to deliver exceptional results and help our clients thrive in the digital landscape.</p>
       
      </div>
      <div className="col-md-6">
      <img src="/assets/img/solutions/porfolio.webp" alt="" srcset="" className="img-fluid"/>      
      </div>
    </div>
  </div>
</section>
<section className="bg-light-blue py-4">  
    <div className="container pb-5">
        <div className="text-center">
            <h2 className="headm">Project  <span className="sub-color">Showcase</span></h2>
            <p>Explore our Project Showcase to discover how we've helped businesses like yours find online success.</p>
        </div>
  <div className="row justify-content-center">
    
    <div className="col-12 col-lg-6">
      <a  href="https://www.koshalaliteraturefestival.com/" target="_blank">
      <div className="card box-shadow mx-auto my-5">
      <img src="../assets/img/portfolio/koshala-literature-festival.webp" className="card-img-top" alt="..."/>      
      <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">Koshala Literature Festival</h4>    
         
        </div>
        <Link to=""><FaCog className="i"/></Link>
      </div>
      </a>
    </div>
    
    <div className="col-12 col-lg-6">
      <a href="https://orgeen.com/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/orgeen.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">Orgeen</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    <div className="col-12 col-lg-6">
      <a href="https://bfcpublications.com/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/publications.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">BFC Publications</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    
    <div className="col-12 col-lg-6">
    <a href="https://bfccapital.com/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/capital.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">BFC Capital</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    <div className="col-12 col-lg-6">
    <a href="http://lumewatt.com/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/lumewattsolar.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">Lume Watt Solar</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    <div className="col-12 col-lg-6">
    <a href="https://pnpmedia.co.in/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/pnp.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">PNP Media</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    <div className="col-12 col-lg-6">
    <a href="https://ambreenzaidi.com/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/az.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">Ambreen Zaidi</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
    <div className="col-12 col-lg-6">
    <a href="https://ceea.in/" target="_blank">
      <div className="card box-shadow my-5 mx-auto" >
      <img src="../assets/img/portfolio/ceea.webp" className="card-img-top" alt="..."/>
        <div className="text-center portfolio py-4">
        <hr/>
          <h4 className="text-black">CEEA</h4>    
         
        </div>

        <Link to=""><FaCog className="i fa-3x"/></Link>
      </div>
      </a>
    </div>
  </div>
</div>
</section>
</div>
</>
)
}
export default Portfolio