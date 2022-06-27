import React from 'react'
import GLightbox from 'glightbox';

export default function Testimonial() {



  return (
    // <div>
     
    //     {/* <section id="testimonials" className="testimonials">
    //     <div className="container" data-aos="fade-up">
    //       <header className="section-header">
    //         <h2>Testimonials</h2>
    //         <p>What they are saying about us</p>
    //       </header>
    //       <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={200}>
    //         <div className="swiper-wrapper">
    //           <div className="swiper-slide">
    //             <div className="testimonial-item">
    //               <div className="stars">
    //                 <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    //               </div>
    //               <p>
    //                 Proin iaculis purus consequat sem cure digni ssim donec
    //                 porttitora entum suscipit rhoncus. Accusantium quam,
    //                 ultricies eget id, aliquam eget nibh et. Maecen aliquam,
    //                 risus at semper.
    //               </p>
    //               <div className="profile mt-auto">
    //                 <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
    //                 <h3>Saul Goodman</h3>
    //                 <h4>Ceo &amp; Founder</h4>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End testimonial item */}
    //           <div className="swiper-slide">
    //             <div className="testimonial-item">
    //               <div className="stars">
    //                 <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    //               </div>
    //               <p>
    //                 Export tempor illum tamen malis malis eram quae irure esse
    //                 labore quem cillum quid cillum eram malis quorum velit fore
    //                 eram velit sunt aliqua noster fugiat irure amet legam anim
    //                 culpa.
    //               </p>
    //               <div className="profile mt-auto">
    //                 <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
    //                 <h3>Sara Wilsson</h3>
    //                 <h4>Designer</h4>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End testimonial item */}
    //           <div className="swiper-slide">
    //             <div className="testimonial-item">
    //               <div className="stars">
    //                 <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    //               </div>
    //               <p>
    //                 Enim nisi quem export duis labore cillum quae magna enim
    //                 sint quorum nulla quem veniam duis minim tempor labore quem
    //                 eram duis noster aute amet eram fore quis sint minim.
    //               </p>
    //               <div className="profile mt-auto">
    //                 <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
    //                 <h3>Jena Karlis</h3>
    //                 <h4>Store Owner</h4>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End testimonial item */}
    //           <div className="swiper-slide">
    //             <div className="testimonial-item">
    //               <div className="stars">
    //                 <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    //               </div>
    //               <p>
    //                 Fugiat enim eram quae cillum dolore dolor amet nulla culpa
    //                 multos export minim fugiat minim velit minim dolor enim duis
    //                 veniam ipsum anim magna sunt elit fore quem dolore labore
    //                 illum veniam.
    //               </p>
    //               <div className="profile mt-auto">
    //                 <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
    //                 <h3>Matt Brandon</h3>
    //                 <h4>Freelancer</h4>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End testimonial item */}
    //           <div className="swiper-slide">
    //             <div className="testimonial-item">
    //               <div className="stars">
    //                 <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    //               </div>
    //               <p>
    //                 Quis quorum aliqua sint quem legam fore sunt eram irure
    //                 aliqua veniam tempor noster veniam enim culpa labore duis
    //                 sunt culpa nulla illum cillum fugiat legam esse veniam culpa
    //                 fore nisi cillum quid.
    //               </p>
    //               <div className="profile mt-auto">
    //                 <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
    //                 <h3>John Larson</h3>
    //                 <h4>Entrepreneur</h4>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End testimonial item */}
    //         </div>
    //         <div className="swiper-pagination" />
    //       </div>
    //     </div>
    //   </section>
    //   {/* End Testimonials Section */}
    // </div> 
    <section className="section" id="testi">
    <div className="container">
        <div className="row mb-5">
            <div className="col-lg-8 offset-lg-2">
            <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>
                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
            </div>
        </div>
        <div className="row margin-t-50">
            <div className="col-lg-4">
                <div className="testimonial-box hover-effect margin-t-30">
                    <img src="../img/testimonials/user-2.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                    <div className="testimonial-decs">
                        <p className="text-muted text-center mb-0">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>
                    </div>
                    <h5 className="text-center text-uppercase padding-t-15 mt-1"><b>Ruben Reed</b> - <span className="text-muted text-capitalize">Charleston</span></h5>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testimonial-box hover-effect margin-t-30">
                    <img src="../img/testimonials/user-1.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                    <div className="testimonial-decs">
                        <p className="text-muted text-center mb-0">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p>
                    </div>
                    <h5 className="text-center text-uppercase padding-t-15 mt-1"><b>Michael P. Howlett</b> - <span className="text-muted text-capitalize">Worcester</span></h5>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testimonial-box hover-effect margin-t-30">
                    <img src="../img/testimonials/user-3.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                    <div className="testimonial-decs">
                        <p className="text-muted text-center mb-0">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p>
                    </div>
                    <h5 className="text-center text-uppercase padding-t-15 mt-1"><b>Theresa D. Sinclair</b> - <span className="text-muted text-capitalize">Lynchburg</span></h5>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
