import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Statistic from './Statistic'

export default function Hero() {

  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    let id = document?.getElementById('myVideo')?.play();
    window.addEventListener('resize', (e) => {
      console.log(e.currentTarget.innerWidth);
      setSize(e.currentTarget.innerWidth)
    });
  }, [])


  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        {size>991 === true?<>
          <video autoplay muted loop id="myVideo" webkit-playsinline="true"
            playsInline="true">
            <source src="Doctor_03.mp4" type="video/mp4" />
          </video>
          <div className="container">
            <div className="row">
              <Col sm={12} xs={12} md={6}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center hero11" >
                  <h1 data-aos="fade-up libero-font">A Journey towards your connected health!</h1>
                  <h2 data-aos="fade-up libero-font" data-aos-delay={400}>
                    A reliable patient-centric ecosystem!
                  </h2>

                  <div data-aos="fade-up" data-aos-delay={600}>
                    <div className="text-center text-lg-start">
                      <a onClick={() => {
                        document.getElementById('about').scrollIntoView()
                      }} style={{ textDecoration: 'none' }}
                        className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center pointer">
                        <span>Learn More</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>

                </div>
              </Col>
              <Col sm={12} xs={12} md={6}>
                <div className="col-lg-6 hero-img hero1" data-aos="zoom-out" data-aos-delay={200}>
                  <img src="img/phone.png" className="phone" alt="" /> <br />
                  <div className="dwn-btns">
                    <button className="btn btn-dark btn-lg download-button my-4 mx-2" type="button">
                      <i className="fab fa-apple" /> Download
                    </button>
                    <button className="btn btn-outline-dark btn-lg download-button my-4 mx-2" type="button">
                      <i className="fab fa-google-play" /> Download
                    </button>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </>:

        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up libero-font m_title">A Journey towards your connected health!</h1>
            <img src={require('../img/home.jpg')} className="home_jpg" alt="" /> <br />
            {/* <img src="img/phone.png" className="phone" alt="" /> <br /> */}
            <h2 data-aos="fade-up libero-font m_title" data-aos-delay={400}>
              A reliable patient-centric ecosystem!
            </h2>

            {/* <div data-aos="fade-up" data-aos-delay={600}>
              <div className="text-center text-lg-start">
                <a onClick={() => {
                  document.getElementById('about').scrollIntoView()
                }} style={{ textDecoration: 'none' }} className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center pointer">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div> */}

          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
            <img src="img/phone.png" className="phone" alt="" /> <br />
            <div className="dwn-btns">
              <button className="btn btn-dark btn-lg download-button my-4 mx-2" type="button">
                <i className="fab fa-apple" /> Download
              </button>
              <button className="btn btn-outline-dark btn-lg download-button my-4 mx-2" type="button">
                <i className="fab fa-google-play" /> Download
              </button>
            </div>
          </div>
        </div>}



      </section>

    </div>
  )
}
