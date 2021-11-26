import React from 'react'
import './Footer.css'

const Footer = () => {
     return (
          <div className="container-fluid mt-5">
               <div className="row d-flex justify-content-evenly footerDiv">
                    <div className="col-md-2 text-start">
                         <h4 className="text-white mb-4">About MedicalPress</h4>
                         <p className="mb-3 footerParaColo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                         <p className="footerParaColo">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className="col-md-2 text-start">
                         <h4 className="text-white mb-4">Recent Posts</h4>
                         <p className="footerParaColo footerBtmBorder">Image Post Format</p>
                         <p className="footerParaColo footerBtmBorder">Quote Post Format</p>
                         <p className="footerParaColo footerBtmBorder">Gallery Post Format</p>
                         <p className="footerParaColo footerBtmBorder">How to Live a Healthier Life</p>
                         <p className="footerParaColo footerBtmBorder">The Hero In All Of Us</p>
                    </div>

                    <div className="col-md-2 text-start">
                         <h4 className="text-white mb-4">Categories</h4>
                         <p className="footerParaColo footerBtmBorder">Environment</p>
                         <p className="footerParaColo footerBtmBorder">Health Basics</p>
                         <p className="footerParaColo footerBtmBorder">Lifestyle</p>
                         <p className="footerParaColo footerBtmBorder">Motivation</p>
                    </div>

                    <div className="col-md-2 text-start">
                         <h4 className="text-white mb-4">Newsletters</h4>
                         <p className="footerParaColo">Stay updated with latest news from Medical Press.</p>
                         <span className="footerParaColo"> Name: </span> <br /> <input type="text" className="mb-2 bg-dark" /> <br />
                         <span className="footerParaColo"> Email: </span> <br /> <input type="email" className="mb-2 bg-dark" /> <br />
                         <input type="submit" value="Submit" className="btn allBtnColorHare fw-bold mt-3" />
                    </div>
               </div>
          </div>
     )
}

export default Footer;
