import { Col, Container, Row } from "react-bootstrap"
import Footer from "./Footer"
import Navbar from "./Navbar"
import '../Assets/css/service.css'
import { useEffect, useState } from "react"


const Service = () => {
    window.scrollTo(0, 0);
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
      let id = document?.getElementById('myVideo')?.play();
      window.addEventListener('resize', (e) => {
        console.log(e.currentTarget.innerWidth);
        setSize(e.currentTarget.innerWidth)
      });
    }, [])
    return (<>
        {/* <Navbar /> */}
        <Container style={{ marginTop: 20, marginBottom: 100 }}>
        {size<991 &&<img src={require('../img/patient.jpg')} className="home_jpg" alt="" />}
            <Row>
                <Col md={8}>
                    <p style={{ fontSize: 15, fontFamily: "Montserrat" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
                <Col md={4}>
                    <img
                        src="https://media-exp2.licdn.com/dms/image/C4D1BAQHtpb-POyxhEg/company-background_10000/0/1617126402893?e=2147483647&v=beta&t=91hKVcKv_TlRK7WaMT84VR0yzL228i1pTF4VeRyHUzc"
                        class="img-fluid" alt="Responsive image" />
                </Col>
            </Row>

            <Row style={{marginTop:20}}>
                <Col md={4}>
                    <img
                        src="https://21stcenturychronicle.com/wp-content/uploads/2022/03/Doctor.jpg"
                        class="img-fluid" alt="Responsive image" />
                </Col>
                <Col md={8}>
                    <span className="pr-content-list-header libero-font">Skilled Nursing</span>
                    <p style={{ fontSize: 14, fontFamily: "Montserrat" }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                    <button type="button" class="btn text-white btn-primary libero-font" > Lorem Ipsum is simply dummy text</button>

                </Col>

            </Row>

            <Row style={{marginTop:20}}>
                <Col md={4}>
                    <img
                        src="https://cdn.expresshealthcare.in/wp-content/uploads/2021/06/09184729/EH-cover-story-750-x-4001.jpg"
                        class="img-fluid" alt="Responsive image" />
                </Col>
                <Col md={8}>
                    <span className="pr-content-list-header libero-font">Specialization Program</span>
                    <p style={{ fontSize: 14, fontFamily: "Montserrat" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                    <button type="button" class="btn text-white btn-primary libero-font" > Lorem Ipsum is simply dummy text</button>

                </Col>

            </Row>
        </Container>
        <Footer />
    </>)
}

export default Service