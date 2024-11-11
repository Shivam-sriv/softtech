import React,{useEffect} from "react";
import {Helmet} from "react-helmet";
const About =()=> {
useEffect(() => {
window.scrollTo(0, 0)
}, [])
return (
<>
<Helmet>
  <title>
    BFC Softtech - Premier IT & Digital Marketing Company in Lucknow
  </title>
  <meta
    name="description"
    content="BFC Softtech is a trusted IT and digital marketing company specializing in delivering top-notch solutions to enhance your online presence."
    />
  <meta
    name="keywords"
    content="Best It Company in Lucknow,Top Digital Marketing Company in Lucknow,Web Development Company in Lucknow,Website Development Company in Lucknow,Mobile App Development Company in Lucknow,Website Designing Company in Lucknow,Digital Marketing Company in Lucknow,Online Marketing Company in India,"/>
  <link rel="canonical" href="https://bfcsofttech.com/about" />
</Helmet>
<section className="home-about py-3">
  <div className="container px-lg-0">
    <div className="row xs-column-reverse">
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="align-self-center">
          <div className="about-content">
            <div className="about-title text-xs-center">
              <h1>About <span className="sub-color">Us</span> </h1>
            </div>
            <div className="about-desc">
              <p>BFC Softtech is a technological service provider that has been offering innovative solutions to businesses and organizations for years. We have a strong foundation in technical expertise and the dedication needed to help our clients succeed. Our repertoire of services includes automation and computing, all designed to streamline and automate operations for maximum efficiency. </p>
              <p className="">Also, over the years, we have helped businesses and entities attract more customers and drive sales through our social media and digital marketing services. Let us help you transform your business with cutting-edge technology solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img src="/assets/img/New folder/about.webp" alt="" srcset="" className="img-fluid" />
      </div>
    </div>
  </div>
</section>
<section className="bg-light-blue">
  <div className="container px-lg-0">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center py-5">
        <div className="heading">
          <h2 className="headm">Meet The <span className="sub-color">Team </span></h2>
        </div>
        <p className="short-desc">Behind every successful business is a talented IT team. Meet the skilled professionals who keep your business up and running around the year.</p>
      </div>
    </div>
  </div>
</section>
<section className="">
  <div className="container px-lg-0">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center py-5">
        <div className="heading">
          <h2 className="headm">Digital Marketing <span className="sub-color">Team </span> </h2>
          <span className="border-c"></span>  
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-light-blue">
  <div className="container">
    <div className="row bg-light-blue py-4">
      <div className="col-md-5">
        <img src="/assets/img/about/nitesh.webp" alt="" className="img-fluid" />
      </div>
      <div className="col-md-7 d-flex align-items-stretch">
        <div className="align-self-center">
          <div className="vision-text">
            <h2 className="pb-4">
              <span className="sub-color">Nitesh Rai</span><span className="profile-text color-bluec"> ( Asst. Manager-Digital Marketing )</span>
            </h2>
            <p>There are people who are passionate about what they do, and then there’s Nitesh. He’ll practically spend nights deep searching the internet, acquainting himself with latest SEO protocols, studying demographics, identifying his target audience and devising infallible digital marketing ideas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-4">
  <div className="container px-lg-0">
    <div className="row justify-content-around">
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/amulya.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Amulya’s inquisitive mind and research capabilities make him the perfect fold for Nitesh. BFC Capital’s outreach campaigns are so much more effective due to his will to excel and unfazed resolve. On a personal front, he is a foodie who doesn’t mind travelling miles to quench his hunger for rare delicacies. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color "> Amulya  Ratan</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Executive- Digital Marketing </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/chayan.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>A successful digital campaign engages the audience through content that pulls them, blogs, ad copies, AV scripts and SEO-friendly material included. The creative brilliance of Chayan, our content guy, makes it seem much easier than it actually is. We also don’t mind his poetry skills. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Chayan Kochar</span></h2>
            <p className="pb-3"><span className="profile-text"> Manager-Creative Writing & Research </span> </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-around">
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/manish.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Video content is an unavoidable part of digital marketing campaigns. Luckily, we have Manish amidst our ranks. He interprets the team’s creative vision and transforms it into video bites, advertisements and insta reels that pull the viewer to engage. Besides video editing, he is also not shy about his acting skills. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Manish Sharma</span></h2>
            <p className="pb-3"><span className="profile-text"> Video Editor </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Surbhi.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Flyers, brochures, creatives or print collateral, ask and you shall receive. Long story short, Surabhi is our in-house graphics wizard, and thankfully she’s damn good at it. Those who know her personally also know that she’s a brilliant artist. Obviously! </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Surabhi Gupta</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Graphic Designer </span> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* technicla team  */}
<section className="">
  <div className="container px-lg-0">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center py-5">
        <div className="heading">
          <h2 className="headm">Developers <span className="sub-color"> & </span>Programmers </h2>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
<section className="bg-light-blue">
  <div className="container">
    <div className="row bg-light-blue py-4">
      <div className="col-md-5">
        <img src="/assets/img/about/saurabh-sir.webp" alt="" className="img-fluid" />
      </div>
      <div className="col-md-7 d-flex align-items-stretch">
        <div className="align-self-center">
          <div className="vision-text">
            <h2 className="pb-4">
              <span className="sub-color">Saurabh Prajapati</span><span className="profile-text color-bluec"> ( Technical Lead)</span>
            </h2>
            <p>Saurabh and his team of techies are the secret sauce that keeps us up and running day in and out. Troubleshooting, coding, debugging, they're doing most of the heavy lifting, so much so that they're inventible. Honest to god, we're so grateful for their long hours.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}
<section className="py-4">
  <div className="container px-lg-0">
    <div className="row">
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Pallavi-Ma'am.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>The never-ending cues of coding that keep our app and website functioning are a language Pallavi understands. To us, however, they're no different than random graffiti. Yes, she's a lifesaver. God knows what we'd do without her. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Pallavi Singh</span></h2>
            <p className="pb-3"><span className="profile-text"> Deputy Technical Lead </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/vivek.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Maintaining a digital presence means ensuring the systems function appropriately around the year. We’re so thankful for having someone as dependable as Vivek at our disposal. Besides being a whiz at cleaning bugs and real-time troubleshooting, Vivek is also a gadget geek. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Vivek Kumar</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Software Developer </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Navneet.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Despite his young age, Navneet is an asset for Team BFC. Why? Because he is a multi-tasker, who champions meeting deadlines. You name it: coding, troubleshooting or designing, the boy will deliver, no questions asked.</p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Navneet Singh</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Software Developer </span> </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Chitranshu.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>Offering technical assistance to Team BFC's clients across platforms is a consuming errand, something Chitranshu does so well that he makes it look effortless. Of course, he is a man of multifaceted competencies. How else would he make it happen? </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Chitranshu Srivastava</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Software Developer </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="team-content-overlay fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/abhishek.webp" className="img-fluid"/>
            </div>
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>A jack of all trades and master of coding, that's perhaps the best way to articulate Abhishek's abilities. Also, he is an ace swimmer and a reasonably good guitarist who doesn't mind strumming a tune or two when in the right company. </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color"> Abhishek Sahu</span></h2>
            <p className="pb-3"><span className="profile-text"> Sr. Software Engineer </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className=" fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/shivam.webp" className="img-fluid"/>
            </div>
            {/* 
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
            */}
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Shivam Shrivastav</span></h2>
            <p className="pb-3"><span className="profile-text"> Web Designer </span> </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row ">
    
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className="fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Rajkumar.webp" className="img-fluid"/>
            </div>
            {/* 
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
            */}
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Raj Kumar Gupta</span></h2>
            <p className="pb-3"><span className="profile-text"> Web Developer </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className=" fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/Vishal.webp" className="img-fluid"/>
            </div>
            {/* 
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
            */}
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Vishal Sahu</span></h2>
            <p className="pb-3"><span className="profile-text"> Web Developer </span> </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="team-card text-center">
          <div className="team-content">
            <div className=" fadeIn-bottom">
            </div>
            <div className="team-img">
              <img src="../assets/img/about/anoop.webp" className="img-fluid"/>
            </div>
            {/* 
            <div className="team-descrition">
              <div className="team-overlay-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
            */}
          </div>
          <div className="team">
            <h2 className="pt-3"><span className="sub-color">Anoop Vishwakarma</span></h2>
            <p className="pb-3"><span className="profile-text"> Software Developer </span> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)
}
export default About