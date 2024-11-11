import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import check from "../images/check.webp";
import {Helmet} from "react-helmet";
const Seo = () => {

  return (
    <>
    <Helmet>
  <title>  Search Engine Optimization : SEO services in Lucknow  </title>
  <meta name="description" content="Search Engine Optimization : SEO company Iin Lucknow we offer On-Page | Off-Page | Technical Seo | Increase traffic for your website"/>
  <meta  name="keywords" content="seo company in india,best seo agency in india,seo agency in lucknow,best seo agency near me,Best seo agency in lucknow,Seo agency in lucknow,best e- commerce seo agency in lucknow,e-commerce seo agency in lucknow,seo service provider in india,Best seo solution agency in Lucknow"/> 
 <link rel="canonical" href="https://bfcsofttech.com/seo" />
</Helmet>
      <div className="web-page">
        <section className="">
          <div className="container px-0">
            <div className="row  xs-column-reverse  align-items-stretch py-5">
              <div className="col-md-6 align-self-center">
                <div className="techUse-title">
                  <h1><span className="sub-color">SEO </span> </h1>
                </div>
                <p>We optimise your website for search engines comprehensively, boosting your search engine results and attracting more visitors to your site. Our team of experts employs the latest optimisation strategies, including keyword research, on-page optimisation, and link building, to help you accomplish the results you require for sure-shot business growth.</p>
                <Link to="/contact" className="btn btn-s">
                  Let's Talk
                </Link>
              </div>
              <div className="col-md-6">
                <img src="../assets/img/solutions/seo.webp" alt="" srcset="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="work-process py-5">
          <div className="container px-0">
            <div className="row">
              <div className="col-md-12">
                <div className="techUse-title text-center ">
                  <h2 class="headm">Our <span className="sub-color">Search Engine </span> Optimization  Process </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="../assets/img/solutions/Search.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 ">
          <div className="container px-0">
            <div className="techUse-title text-center">
              <h2 class="headm"> Why you should opt for   <span className="sub-color">SEO </span>Services?</h2>
            </div>

            <div className="row     align-items-stretch">
              <div className="col-md-6">
                <img src="../assets/img/solutions/seo1.webp" className="img-fluid" alt="" />

              </div>


              <div className="col-md-6 align-self-center">

                <p className="text-justify">The presently prevalent business scenario necessitates that businesses improve their online presence to attract more quality leads, and consequently, more business. Hence, it has become mandatory for businesses to invest in SEO services.But what is SEO, and how exactly does it help?</p>
                <p className="text-justify">
                  Simply said, the advantages of SEO stretch beyond improved search engine rankings. When done correctly, SEO can boost conversions. It is a strong tool for all types of businesses, from small startups to major corporations, and can help you thrive in an increasingly competitive market.
                </p>
                <p className="text-justify">
                  So if you want to take your business to the next level, don't be afraid to invest in high-quality SEO services. The right strategy can help achieve online success and develop your business to new heights.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 bg-light-blue">
          <div className="container px-0">
            <div className="techUse-title text-center">
              <h2 class="headm"> How do <span className="sub-color">SEO </span>services help?</h2>
              <p className="short-desc">SEO entails improving a website's visibility in search engine results pages (SERP) by optimising its content and structure. It is a must-use tool for organisations aiming to propel their online visibility and attract more traffic to their website.So how do SEO services benefit businesses?</p>
            </div>

            <div className="row   xs-column-reverse  align-items-stretch">
             


              <div className="col-md-6 align-self-center">

              
                <p className="text-justify">
                SEO services can assist businesses in identifying and targeting the keywords and phrases that their potential clients are searching for. SEO specialists discover the most relevant and high-traffic keywords connected to a company's products or services after conducting extensive research. Following that, the information gathered is used to optimise website content, meta tags, and other on-page features that aid in website ranking.
                </p>
                <p className="text-justify">
                Additionally, SEO services can help businesses improve the technical performance and user experience of their websites. This involves enhancing mobile usability, boosting website speed, and ensuring the website is safe and free of technical difficulties. 
                </p>
                <p className="text-justify">
                Another significant advantage of SEO services is that they can help organisations in developing high-quality backlinks. Backlinks are links from other websites pointing to a certain website, and they have significant influence in determining the authority and trustworthiness of a website. 

                </p>
              </div>
              <div className="col-md-6">
                <img src="../assets/img/solutions/seo3.webp" className="img-fluid" alt="" />

              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-5">
          <div className="container px-0">
            <div className="row justify-content-center pt-4">
              <div className="col-md-12 text-center">
                <div className="techUse-title text-center">
                  <h2 class="headm"> Types Of  <span className="sub-color">SEO Services  </span> We Offer</h2>
                </div>
                <p className="short-desc">Search Engine Optimization (SEO) is an essential digital marketing strategy for businesses looking to increase their online visibility and drive more traffic to their website. However, not all businesses have the expertise or resources needed to execute an effective SEO campaign on their own. That's what we can help with. Listed below are the services we offer: </p>
              </div>
            </div>
            <div className="row why-go pb-4">
              <div className="col-md-4 ml-3 ba">
                <span>
                  <div className="hover-icon">
                    <img src={check} alt="" srcset="" className="img-fluid" />
                    <h4 className="color-bluec pt-3">On-page optimization</h4>
                    <p>
                      On-page optimization involves upgrading a website's content and structure to make it more visible and relevant to search engines. This includes keyword research and analysis, meta tag optimization, website speed optimization, and ensuring that the website is mobile-friendly.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-md-4 ml-3 ba">
                <span>
                  <div className="hover-icon">
                    <img src={check} alt="" srcset="" className="img-fluid" />
                    <h4 className="color-bluec pt-3">Technical SEO</h4>
                    <p>
                      Technical SEO concerns working the technical characteristics of a website to propel its search engine ranking. This involves increasing website performance, guaranteeing website security, ensuring the absence of any technical issues, and improving the overall user experience.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-md-4 ml-3 ba">
                <span>
                  <div className="hover-icon">
                    <img src={check} alt="" srcset="" className="img-fluid" />
                    <h4 className="color-bluec pt-3">Local SEO</h4>
                    <p>
                      Local SEO focuses on upgrading a company's online presence for local searches. This includes improving the company's Google My Business profile, establishing local citations and backlinks, and customizing website content to incorporate local keywords.
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
                    <h4 className="color-bluec pt-3">E-commerce SEO </h4>
                    <p>
                      E-commerce SEO is aimed at helping online stores improve their search engine presence and, as a result, driving more sales. This involves enhancing website speed, optimising product descriptions, and incorporating structured data.
                    </p>
                  </div>
                </span>
              </div>
              <div className="col-md-4 ml-3 ba">
                <span>
                  <div className="hover-icon">
                    <img src={check} alt="" srcset="" className="img-fluid" />
                    <h4 className="color-bluec pt-3">Content marketing </h4>
                    <p>
                      Content marketing is an essential component of any SEO strategy. It includes developing high-quality, engaging content that generates traffic for a website and establishes the company as an industry leader.
                    </p>
                  </div>
                </span>
              </div>

            </div>
          </div>
        </section>
        <section className="py-5 price mb-5">
          <div className="">
            <div className="container">
              <h2 className=" text-center pb-5 headm">Our <span className="sub-color"> SEO Service </span> Pricing Plans</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 price-style">
                  <div className="pricingTable10">
                    <div className="pricingTable-header">
                      <h3 className="heading">SEO Packages Small Business </h3>
                      <span className="price-value">
                        <span className="currency">₹</span>15,000 <span className="month">/Monthly</span><br />

                        <span className="month">EXCLUSIVE OF ALL TAXES</span>
                      </span>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li className="sub-color font-weight-bold text-center">WEBSITE REVIEW & ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Max 5 Keywords </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Website & Competitor Analysis </li>
                        <li><i className="fa fa-check   pr-2" aria-hidden="true"></i>	Content Duplicity Check</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Initial Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Keywords Research  </li>
                        <li className="sub-color font-weight-bold text-center">ON PAGE SEO ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Meta Tags Creation  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Canonicalization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		URL Structure  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Content Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Image Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Heading Tag Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Website Speed Optimization </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Robots.txt </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Sitemap Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics & Search Console Setup   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Optimization – 2 Posts   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Google Map Integration on website   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>			Google My Business Page Setup and Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Local Citations – 5  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Local Classifieds – 2  </li>
                        <li className="sub-color font-weight-bold text-center">CONTENT MARKETING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Posting (500 – 700 words) – 1</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Article Writing(500 – 700 words) – 1  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Onsite Blog (300 – 500 words) – 1   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>		Guest Blogging   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>		Broken Backlink Building  </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Resource Link Building   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Alerts and Mention    </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>		Link Roundups   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>			Competitor Backlink Research    </li>
                        <li className="sub-color font-weight-bold text-center">OFF PAGE SEO</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Social Sharing – 30(Total) </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Blog Social Sharing   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Slide Submissions – 1    </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Text Infographic Creation – 1   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Video Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Q & A – 1    </li>
                        <li className="sub-color font-weight-bold text-center">MONTHLY REPORTING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Keyword Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics Report  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Acquired Links Report    </li>
                        <li className="sub-color font-weight-bold text-center">CLIENT SUPPORT</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Email  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Chat  </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>		Call   </li>
                      </ul>
                      <Link to="/contact" className="read">Get Started Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 price-style">
                  <div className="pricingTable10">
                    <div className="pricingTable-header">
                      <h3 className="heading">Mid-Size Business SEO Packages</h3>
                      <span className="price-value">
                        <span className="currency">₹</span> 25,000
                        <span className="month">/monthly</span><br />

                        <span className="month">EXCLUSIVE OF ALL TAXES</span>
                      </span>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li className="sub-color font-weight-bold text-center">WEBSITE REVIEW & ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Max 15 Keywords </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Website & Competitor Analysis </li>
                        <li><i className="fa fa-check   pr-2" aria-hidden="true"></i>	Content Duplicity Check</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Initial Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Keywords Research  </li>
                        <li className="sub-color font-weight-bold text-center">ON PAGE SEO ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Meta Tags Creation  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Canonicalization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		URL Structure  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Content Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Image Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Heading Tag Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Website Speed Optimization </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Robots.txt </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Sitemap Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics & Search Console Setup   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Optimization – 5 Posts   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Google Map Integration on website   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Google My Business Page Setup and Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Local Citations – 10  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Local Classifieds – 5  </li>
                        <li className="sub-color font-weight-bold text-center">CONTENT MARKETING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Posting (500 – 700 words) – 2</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Article Writing(500 – 700 words) – 2  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Onsite Blog (300 – 500 words) – 2   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Guest Blogging   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Broken Backlink Building  </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Resource Link Building   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Alerts and Mention    </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>		Link Roundups   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>			Competitor Backlink Research    </li>
                        <li className="sub-color font-weight-bold text-center">OFF PAGE SEO</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Social Sharing – 40(Total) </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Blog Social Sharing   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Slide Submissions – 2    </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Text Infographic Creation – 2   </li>
                        <li><i className="fa fa-times  pr-2" aria-hidden="true"></i>	Video Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Q & A – 3    </li>
                        <li className="sub-color font-weight-bold text-center">MONTHLY REPORTING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Keyword Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics Report  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Acquired Links Report    </li>
                        <li className="sub-color font-weight-bold text-center">CLIENT SUPPORT</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Email  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Chat  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Call   </li>
                      </ul>
                      <Link to="/contact" className="read">Get Started Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 price-style">
                  <div className="pricingTable10">
                    <div className="pricingTable-header">
                      <h3 className="heading">Large Business SEO Packages</h3>
                      <span className="price-value">
                        <span className="currency">₹</span>40,000
                        <span className="month">/monthly</span><br />

                        <span className="month">EXCLUSIVE OF ALL TAXES</span>
                      </span>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li className="sub-color font-weight-bold text-center">WEBSITE REVIEW & ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Max 25 Keywords </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Website & Competitor Analysis </li>
                        <li><i className="fa fa-check   pr-2" aria-hidden="true"></i>	Content Duplicity Check</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Initial Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Keywords Research  </li>
                        <li className="sub-color font-weight-bold text-center">ON PAGE SEO ANALYSIS</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Meta Tags Creation  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Canonicalization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		URL Structure  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Content Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Image Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Heading Tag Optimization   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Website Speed Optimization </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Robots.txt </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Sitemap Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics & Search Console Setup   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Optimization – 5 Posts   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Google Map Integration on website   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Google My Business Page Setup and Optimization  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Local Citations – 15  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Local Classifieds – 10  </li>
                        <li className="sub-color font-weight-bold text-center">CONTENT MARKETING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Blog Posting (500 – 700 words) – 2</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Article Writing(500 – 700 words) – 4  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Onsite Blog (300 – 500 words) – 2   </li>
                        <li className="sub-color font-weight-bold text-center">LOCAL SEO SETUP</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Guest Blogging   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Broken Backlink Building  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Resource Link Building   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Alerts and Mention    </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Link Roundups   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Competitor Backlink Research    </li>
                        <li className="sub-color font-weight-bold text-center">OFF PAGE SEO</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Social Sharing – 50(Total) </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>			Blog Social Sharing   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Slide Submissions – 2    </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Text Infographic Creation – 3   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Video Creation   </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Q & A – 5    </li>
                        <li className="sub-color font-weight-bold text-center">MONTHLY REPORTING</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Keyword Ranking Report </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Google Analytics Report  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>	Acquired Links Report    </li>
                        <li className="sub-color font-weight-bold text-center">CLIENT SUPPORT</li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>Email  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Chat  </li>
                        <li><i className="fa fa-check  pr-2" aria-hidden="true"></i>		Call   </li>
                      </ul>
                      <Link to="/contact" className="read">Get Started Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 ">
    <div className="container px-0">
      <div className="techUse-title text-center">
        <h2 class="headm"> How Our  <span className="sub-color">SEO  </span>Services Are Different From Other SEO Companies In India?</h2>
      </div>
      <p className="text-center short-desc"> Presently, there are countless companies vying for business in India, claiming to be the best SEO service provider, such is the prevalent market climate of the country. Unfortunately, not all SEO agencies are equal. With so many options accessible to today’s customer, finding the appropriate SEO partner can be difficult. That’s why we have listed below the qualities that set us apart from the competition. Read on to figure out:
      </p>
      <div className="row     align-items-stretch">
<div className="col-md-6">
<img src="../assets/img/solutions/seo2.webp" className="img-fluid" alt="" />

</div>


        <div className="col-md-6">
          <ul className="text-left lst-none check-c cursor ">
            <li className="fs-14 text-justify"> <i className="fa fa-check"></i><b> Proven results: </b>Our SEO practices are centred around tied-and-tested methods that have been improved with years of expertise. We have a proven history of achieving significant improvements in search engine rankings and internet traffic.</li>
            <li className="fs-14 text-justify"> <i className="fa fa-check"></i><b>High-quality content:</b> We know that content is an essential component of any effective SEO campaign. That is why we have a team of skilled content writers who develop high-quality, engaging content that is search engine optimised and appealing to readers.
Comprehensive services We offer a good variety of digital marketing services in addition to standard SEO, such as social media marketing, PPC advertising, and email marketing. This enables us to deliver a holistic marketing campaign that assists our clients in achieving their objectives more efficiently.</li>
            <li className="fs-14 text-justify"> <i className="fa fa-check"></i><b>Affordable pricing:</b> We think that SEO services should be affordable to businesses of all sizes, which is why we provide competitive pricing for our services. Our pricing is clear and flexible, and we collaborate with our clients to create bespoke SEO packages that are well within their budget.</li>
            <li className="fs-14 text-justify"> <i className="fa fa-check"></i><b>Personalised support:</b> Throughout the SEO process, we provide dedicated help to each of our clients. Our team is constantly available to answer questions, provide updates, and modify our strategies in response to customer feedback.</li>
        
          </ul>
          <p className="text-justify">Ethical SEO Practices: We follow ethical SEO practices and completely comply with search engine standards. Also, we do not employ any black hat practices that can cause harm to our clients’ websites in the long term.</p>
        </div>
      </div>
    </div>
  </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="techUse-title text-center">
                  <h2 class="headm">  Why avail <span className="sub-color"> SEO Services </span> from <span className="sub-color">BFC Softtech</span>?  </h2>
                </div>
              </div>
              <div className="col-md-12 text-center ">
                <p className="short-desc">As a business owner, you surely must be aware of the significance of having a strong internet presence in the present digital ecosystem. Having a website is necessary, but it is not sufficient. You must make certain that it is visible to your targeted users. This is where BFC Softtech can help your business.
                  Here are some of the reasons why BFC Softtech should be your go-to SEO partner:</p>
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
                                <img src="../assets/img/solutions/expert.webp" className="img-fluid" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7 d-flex align-items-stretch ">
                            <div className="align-self-center">
                              <div className="banner-content">
                                <div className="banner-title pt-3">
                                  <h4 className="color-bluec ">Tailored SEO Services </h4>
                                </div>
                                <div className="banner-disc">
                                  <p className="">We recognise that no two businesses are the same. As a result, we provide personalised SEO solutions that are suited to your individual needs. We examine your website, find areas that need improvement, and develop a strategy to assist you reach your goals.</p>
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
                                <div className="banner-title">
                                  <h4 className="color-bluec ">Experienced Professionals</h4>
                                </div>
                                <div className="banner-disc">
                                  <p className="">Our SEO team has years of expertise in the sector. We stay current on industry trends and procedures to ensure that we deliver the best possible results to our clients.</p>
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
                                <div className="banner-title">
                                  <h4 className="color-bluec ">Transparent Reporting</h4>
                                </div>
                                <div className="banner-disc">
                                  <p className="">We believe in accountability and transparency. That is why we provide frequent reports on the status of your SEO campaign. You'll know precisely what we're doing and how it is benefitting you.</p>
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
                                <div className="banner-title">
                                  <h4 className="color-bluec ">Competitive Pricing</h4>
                                </div>
                                <div className="banner-disc">
                                  <p className="">We believe in giving our clients good value for money. As a result, our SEO packages are reasonably priced, and do not compromise on quality.</p>
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
export default Seo

