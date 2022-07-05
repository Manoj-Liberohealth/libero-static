import { Col, Container, Figure, Row } from "react-bootstrap";
import Footer from "./Footer";


const FeatureDetails = () => {
    window.scrollTo(0, 0);
    
    return (<>
        <Container style={{ marginTop: 150, marginBottom: 100 }}>
            <div class="shadow-none p-3 mb-5 bg-light rounded libero-font" >
                <iframe width="100%" height="300" id="mvp" style={{ width: '100%', height: 400, zIndex: 10000 }}
                    src="" >
                </iframe>
                <div class="p-3 mb-2 text-libero b libero-margin">Appointments</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



                <div class="p-3 mb-2 text-libero b libero-margin">Electronic Health Record</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                {/* <iframe width="100%" height="300" id="mvp" style={{ width: '100%',height:400, zIndex: 10000 }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY" >
                </iframe> */}


                <div class="p-3 mb-2 text-libero b libero-margin">Non-emergency Transport</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                {/* <iframe width="100%" height="300" id="mvp" style={{ width: '100%',height:400, zIndex: 10000 }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY" >
                </iframe> */}

                <div class="p-3 mb-2 text-libero b libero-margin">Telehealth & Accompdation</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                {/* <iframe width="100%" height="300" id="mvp" style={{ width: '100%',height:400, zIndex: 10000 }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY" >
                </iframe> */}


                <div class="p-3 mb-2 text-libero b libero-margin">Seamless Payments</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                {/* <iframe width="100%" height="300" id="mvp" style={{ width: '100%',height:400, zIndex: 10000 }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY" >
                </iframe> */}


            </div>
        </Container>
        <Footer />
    </>)

}

export default FeatureDetails;