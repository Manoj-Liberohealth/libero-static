import About from "./About"
import Contactus from "./ContactUs"
import Faq from "./Faq"
import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Statistic from "./Statistic"
import Testimonial from "./Testimonial"


const Home = () => {
    return (

        < div >
           
            <Hero />
            
            <About />
            <Features />
            
            <Testimonial />
            <Faq />
            <Contactus/>
            <Footer />
            {/* <Helmet>
        <script src="../public/main.js" type="text/javascript" />
      </Helmet> */}

        </div>
    )
}

export default Home