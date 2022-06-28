import React from 'react'
import { Link } from 'react-router-dom'
import Statistic from './Statistic'

export default function About() {

  return (
    <div>

      <section id="about" class="about" style={{position:'relative',padding:0}}>
        <Statistic />
        <div class="container" data-aos="fade-up">
          <div class="row gx-0">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content">
                <h3 className='text-libero'>About Us</h3>
                {/* <h2>THE VISION</h2> */}
                <p className='libero-font'>
                  At Libero Health, we’re passionate about building new patient
                  centred connected health platform that will empower the
                  patients. Our vision is to provide a high quality near real
                  time platform services to all of our patients, healthcare
                  providers and business partners by bringing them together, our
                  commitment to patients needs remains the key driving force
                  behind our health technology company. Our team of
                  professionals is here to inspire you with their unique ideas
                  and abilities - get in touch today to learn more.
                </p>
                <div class="text-center text-lg-start">
                  <Link
                    to="/about-details"
                    class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Read More</span>
                    <i class="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

            </div>

            <div
              class="col-lg-6 d-flex content justify-content-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="https://www.bhartiaxa.com/sites/default/files/2021-12/nav-fund.svg" class="about-img img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
