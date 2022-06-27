import React from 'react'


export default function Faq() {
  return (
    <div>
     
        <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            {/* <h2>F.A.Q</h2> */}
            <p>Frequently Asked Questions</p>
          </header>
          <div className="row">


            <div className="col-lg-6">
              {/* F.A.Q List 1*/}
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      How to setup Libero Health Account?
                    </button>
                  </h2>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      VIDEO
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      What is connected health?
                    </button>
                  </h2>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      Connected health is a technology
                      enabled patient centered care using digital, cloud
                      computing and artificial intelligence&nbsp;technologies to
                      empower patients by giving them more control over their
                      own health. Connected health&nbsp;has the potential to increase
                      productivity for healthcare provider, deliver cost
                      savings, less reliance on experts, improve effective
                      personal behaviour and prevention of disease for patients.
                      Connected health also improves patient's experience by
                      bringing business partners integrated into the patient
                      centred ecosystem such as health insurance,
                      pharmaceutical, medical accommodation and transportation
                      into the holistic patient care journey. like 1
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      Are there any subscription plans?
                    </button>
                  </h2>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      It is free to register
                      an account with Libero Health and you only pay for cost of
                      service you use as a pay-as-you-go payment. We do not
                      charge any recurring subscription payments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* F.A.Q List 2*/}
              <div className="accordion accordion-flush" id="faqlist2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                      Can I cancel my scheduled appointment?
                    </button>
                  </h2>
                  <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div className="accordion-body">
                      Yes, you can cancel your scheduled appointment at any
                      time. Click here to know more about our <a href="#">Refund Policy</a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                      How to maintain my Electronic health record?
                    </button>
                  </h2>
                  <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div className="accordion-body">
                      We offer a secure storage for your past and current
                      medical records, you can upload and access your health
                      records and medical history from anywhere, anytime. We
                      also allow your Healthcare providers to upload your
                      electronic health records after your medical appointment.
                      We also offer for you to share your medical records and
                      history with your healthcare providers as read only prior
                      to your appointment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                      How do I book an appointment?
                    </button>
                  </h2>
                  <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div className="accordion-body">
                      Make an appointment by going to Doctor's Profile and clicking on the “Book Appointment”
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-4">
                    When should I choose “Individual” vs “Organization” for a provider/partner type?
                    </button>
                  </h2>
                  <div id="faq2-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div className="accordion-body">
                    Individual should be chosen for those registering up for themselves who doesn’t have their own registered business name. The individual may choose to link the company/organization they work for.

Organization should be chosen if you own a business. Organization can be self-employed/small, medium, corporate/enterprise. Organization can link their provider/partner who works for them.
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
