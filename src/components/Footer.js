import React from 'react'
import { Link } from "react-router-dom";


export default function Footer() {


  return (
    <div>

        {/* End Contact Section */}
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="index.html" className="logo d-flex align-items-center" style={{justifyContent:'center'}}>
                    <img src="img/footer.png" alt="" />
                  </a>
                  <div className="social-links mt-3 text-center ">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Links</h4>
                  <ul>
                    <li>
                    <Link to="/">Home</Link> 
                      {/* <i className="bi bi-chevron-right" /> <a href="#">Home</a> */}
                    </li>
                  
                    <li>
                    <Link to="/">About Us</Link> 
                    </li>
                    <li>
                    <Link to="/" onClick={()=>{
                      window.location.href = "https://jolly-plant-049f0f910.1.azurestaticapps.net/tnc.html";
                    }}>Terms & Condition</Link> 
                    </li>
                    <li>
                    <Link onClick={()=>window.location.href="https://jolly-plant-049f0f910.1.azurestaticapps.net/privacy-policy.html"} 
                    to="/">Privacy Policy</Link> 
                      
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      {/* <i className="bi bi-chevron-right" /> */}
                      {/* <a href="/">For Healthcare Providers</a> */}
                     
                      <Link to="/provider">For Healthcare Providers</Link> 
                    </li>
                    <li>
                      {/* <i className="bi bi-chevron-right" />
                      <a href="#">For Business Partners</a> */}
                      <Link to="/business-partners">For Business Partners</Link> 
                    </li>
                    <li>
                      {/* <i className="bi bi-chevron-right" /> <a href="#">For Users</a> */}
                      <Link to="/patients">For Patients</Link> 
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>LIBERO HEALTH</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}
      </div>
    
  )
}
