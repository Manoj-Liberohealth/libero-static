const Contactus=()=>{
    return(
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4 text-center">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bi bi-geo-alt" />
                    <h3>Address</h3>
                    <p>202 Random Street,<br />Melbourne</p>
                  </div>
                </div>
                {/* <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+91 9412 5234 51<br />+61 2323434343</p>
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bi bi-envelope" />
                    <h3>Email Us</h3>
                    <p>info@example.com<br />contact@example.com</p>
                  </div>
                </div>
                {/* <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contactus