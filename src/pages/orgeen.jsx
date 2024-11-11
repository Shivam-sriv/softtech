import React,{useEffect} from "react";
import {Link } from "react-router-dom";

const Orgeen = () =>
{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
    <>
    <div className="web-page">
    <section className="">
      <div className="container px-0">
        <div className="row xs-column-reverse py-5 align-items-stretch">
          <div className="col-md-6 align-self-center">
            <div className="techUse-title ">
              <h1>Orgeen</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link to="/contact" className="btn btn-s">
            Let's Talk
            </Link>
          </div>
          <div className="col-md-6">
            <img src="../assets/img/portfolio/Orgeen.png" alt="" srcset="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
)
}

export default Orgeen
