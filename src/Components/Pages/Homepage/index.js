import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import ServiceData from "./ServiceData";


import "./style.scss";

const Homepage = () => {
    return (
        <>

            <Container className="my-5 py-5">
                <h1 className="text-center hero__heading mb-2">Video tools. Online</h1>
                <p className="lead text-center  mb-3 mb-lg-5">All-in-one easy-to-use online video tools </p>
                <Row className="g-4 justify-content-center" > 
                    {
                        ServiceData.services.map(data => {
                            return <Col className="serviceCol" key={data.key}>
                                <Link to={data.link} className='service__item'>
                                    <i className="icon"><img src={data.icon} alt="icon" className="img-fluid" /></i>
                                    <p className="mb-0 pt-2">{data.name}</p>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Container>

        </>
    )
}

export default Homepage;