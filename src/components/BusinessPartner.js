import { useEffect, useState } from "react";
import { Accordion, Col, Container, Figure, Row } from "react-bootstrap";
import Footer from "./Footer";

const BusinessPartner = () => {
    window.scrollTo(0, 0);
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        // let id = document?.getElementById('myVideo')?.play();
        window.addEventListener('resize', (e) => {
             console.log(e.currentTarget.innerWidth);
            setSize(e.currentTarget.innerWidth)
        });
    }, [])
    return (<>
        <Container style={{ marginTop: 20 }}>

            <div class="shadow-none p-3 mb-5 bg-light rounded libero-font">
                {size < 991 && <img src={require('../img/Partnership.jpg')} className="home_jpg" alt="" />}
                <div class="p-3 mb-2 text-libero b" >Partners</div>
                <span className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
                <iframe width="100%" height="300" id="mvp" style={{ width: '100%', height: 400, zIndex: 10000 }}
                    src="" >
                </iframe>

                <div className="libero-margin">
                    <Row >
                        <Col md={3}>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="171x180"
                                    src="https://journomed.com/wp-content/uploads/2021/11/medical-workers-analyzing-electronic-record_1262-19834.jpg"
                                />
                            </Figure>
                        </Col>
                        <Col md={9}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Col>
                    </Row>
                </div>

                <div className="libero-margin">
                    <Row >

                        <Col md={9}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Col>
                        <Col md={3}>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="171x180"
                                    src="https://journomed.com/wp-content/uploads/2021/11/medical-workers-analyzing-electronic-record_1262-19834.jpg"
                                />
                            </Figure>
                        </Col>
                    </Row>
                </div>
                <Accordion defaultActiveKey="0" className="libero-margin">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={10}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Col>
                                <Col md={2}>
                                    <Figure>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="171x180"
                                            src="https://static.vecteezy.com/system/resources/thumbnails/005/392/546/small_2x/medical-and-health-care-illustration-free-vector.jpg"
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={10}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Col>
                                <Col md={2}>
                                    <Figure>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="171x180"
                                            src="https://static.vecteezy.com/system/resources/thumbnails/005/392/546/small_2x/medical-and-health-care-illustration-free-vector.jpg"
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={10}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Col>
                                <Col md={2}>
                                    <Figure>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="171x180"
                                            src="https://static.vecteezy.com/system/resources/thumbnails/005/392/546/small_2x/medical-and-health-care-illustration-free-vector.jpg"
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col md={10}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Col>
                                <Col md={2}>
                                    <Figure>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="171x180"
                                            src="https://static.vecteezy.com/system/resources/thumbnails/005/392/546/small_2x/medical-and-health-care-illustration-free-vector.jpg"
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div class="shadow-none p-3 mb-5 bg-light rounded libero-font">
                <div class="p-3 mb-2 text-libero b">Join Us</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </Container>
        <Footer />
    </>)

}

export default BusinessPartner;