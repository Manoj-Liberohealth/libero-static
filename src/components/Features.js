import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div>
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header" style={{paddingBottom:0}}>
              {/* <h2>Features</h2>  <FontAwesomeIcon icon={["far", "coffee"]} /> */}
              <p>Our offerings</p>
            </header>
            <div className="row feature-icons" data-aos="fade-up">
              <div className="row">
                <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay={100}>
                  <img src="../img/features.svg" id="features" className="img-fluid" alt="" />
                </div>
                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4 mr-2">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      {/* <i className="fa-solid fa-calendar-check" /> */}
                      <img src={require('../img/feature/f1.svg').default} id="features" className="feature_svg_icon" alt="" />
                      <div>
                        <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Appointments</h4></Link>
                        
                        <p>Consult top doctors of your city in a jiffy</p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                      {/* <i className="fa-solid fa-file-medical" /> */}
                      <img src={require('../img/feature/f5.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Electronic Health Record</h4></Link>
                        <p>
                          All your medical reports, prescription etc. at one
                          place. Safe and secure with us.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                      {/* <i className="fa-solid fa-bell" /> */}
                      <img src={require('../img/feature/f2.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Reminders</h4></Link>
                        <p>Get Regular reminders</p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                      {/* <i className="fa-solid fa-chart-line" /> */}
                      <img src={require('../img/feature/f6.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Real Time Dashboard</h4></Link>
                        <p>
                          Get realtime updates and manage all your appointments seamlessly across devices
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                      {/* <i className="fa-solid fa-car" /> */}
                      <img src={require('../img/feature/f3.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Non-emergency Transport</h4></Link>
                        <p>
                          Out of town and want someone to take your dependants for a health check up. Worry not!
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                      {/* <i className="fa-solid fa-laptop-medical" /> */}
                      <img src={require('../img/feature/f7.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Telehealth</h4></Link>
                        <p>
                          Best doctors of the country on click of a button
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                      {/* <i className="fa-solid fa-money-check-dollar" /> */}
                      <img src={require('../img/feature/f4.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Seamless Payments</h4></Link>
                        <p>
                          Same day settlements and state of art payment gateway all for you!
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                      {/* <i className="fa-solid fa-hospital" /> */}
                      <img src={require('../img/feature/f8.svg').default} id="features" className="feature_svg_icon" alt="" />

                      <div>
                      <Link to="/feature-details" style={{textDecorationLine:'none'}}><h4>Accomodation</h4></Link>
                        <p>
                          Effortlessly book and compare accomodation options across top Hospitals in your city
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
