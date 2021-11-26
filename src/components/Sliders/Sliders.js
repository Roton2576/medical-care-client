import React from 'react'
import './Sliders.css'

const Sliders = () => {
     return (
          <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                         <img src="https://i.ibb.co/DYxn3Hq/slider-1.jpg" className="d-block w-100" alt="..."/>
                         <div className="carousel-caption d-none d-md-block">
                              <h3 className="firstSlide">WE PROVIDE TOTAL</h3>
                              <h1 className="firstSlideTitle"> MEDICAL SOLUTION Care.com </h1>
                              <p className="firstSliderPara"> Every day we bring hope to millions of children in the world's hardes't places as a sing of God's unconditional love so almost done and success </p>
                              <button className="btn btn-primary d-block text-start firstSliderViewBtn"> View Details </button>
                         </div>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/sKfKxPN/slider-2.jpg" className="d-block w-100" alt="..."/>
                         <div className="carousel-caption d-none d-md-block">
                              <h3 className="firstSlide3">WE PROVIDE TOTAL</h3>
                              <h1 className="firstSlideTitle3"> MEDICAL SOLUTION Care.com </h1>
                              <p className="firstSliderPara3"> Every day we bring hope to millions of children in the world's hardes't places as a sing of God's unconditional love so almost done and success </p>
                              <button className="btn btn-primary d-block text-start firstSliderViewBtn3"> View Details </button>
                         </div>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/SvxxnR1/slider-3.jpg" className="d-block w-100" alt="..."/>
                         <div className="carousel-caption d-none d-md-block">
                              <h3 className="firstSlide2">WE PROVIDE TOTAL</h3>
                              <h1 className="firstSlideTitle2"> MEDICAL SOLUTION Care.com </h1>
                              <p className="firstSliderPara2"> Every day we bring hope to millions of children in the world's hardes't places as a sing of God's unconditional love so almost done and success </p>
                              <button className="btn btn-primary d-block text-start firstSliderViewBtn2"> View Details </button>
                         </div>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
               </div>
          </div>
     )
}

export default Sliders;
