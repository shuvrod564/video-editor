import React from "react";

import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form"; 

const Merge = () => {
    
    const inputsHandler = (e) => {
        e.preventDefault(); 
       document.location = "/merge-video";
    }
    
    return(
        <>
            <Container className="my-5 py-5">
                <h1 className="text-center hero__heading mb-2">Merge Videos</h1>
                <p className="lead text-center  mb-3 mb-lg-5">Combine multiple videos, images and add audio</p>
                
                {/* <Form onSubmit={this.onSubmitHandler}> 
                </Form> */}
                    <Form.Group controlId="formFile" className="upload__box" onChange={inputsHandler} >
                        <Form.Label>Choose File</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>


            </Container>
        </>
    )
}

export default Merge;