import React from 'react';
import './style.css'

const Footer = () => {
    return(
      
          <div>
          <footer className=" bg-dark text-light text-center">

          <a href="#page-up"><span className="btn btn-light text-dark text-center m-1" href="#page-up">
            Back to top
          </span></a>

          <div className="container">

            <div className="row justify-content-around">
              <div  className="col-lg-4 col-md-5 col-sm-12">
                <ul id="list-item">
                  <li ><a href="#">List A </a> </li>
                  <li><a href="#">List item A</a></li>
                  <li><a href="#">List item B</a></li>
                  <li><a href="#">List item C</a></li>
                </ul>
              </div>
              <div  className="col-lg-4 col-md-5 col-sm-12">
                <ul id="list-item">
                  <li><a href="#">List B </a> </li>
                  <li><a href="#">List item A</a></li>
                  <li><a href="#">List item B</a></li>
                  <li><a href="#">List item C</a></li>
                </ul>
              </div>
              <div  className="col-lg-4 col-md-4 col-sm-12">
                <ul id="list-item">
                  <li ><a href="#">List C </a> </li>
                  <li><a href="#">List item A</a></li>
                  <li><a href="#">List item B</a></li>
                  <li><a href="#">List item C</a></li>
                </ul>
              </div>
            </div>  

          </div>


          <ul id="list-item" className="row pb-5 mt-5">
            <li className="col-lg-4"><a href="#">Conditions of Use</a></li>
            <li className="col-lg-2"><a href="#">Privacy Notice</a></li>
            <li className="col-lg-2"><a href="#">Interest-Based Ads</a></li>
            <li className="col-lg-4"><a href="#">© 1996-2021, HyperWeb, Inc. or its affiliates</a></li>
          </ul>


          </footer>
          </div>

    )
}

export default Footer;