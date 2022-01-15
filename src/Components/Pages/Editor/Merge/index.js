import React, {useState} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactPlayer from 'react-player';

import BottomActions from "./BottomActions";


import "./style.scss";

const MergeVideo = () => {
 

    return (
        <>
            <div className="editor__box">
                <div className="top__edit__wrapp">
                    <div className="left__panel">

                        <div className="player-wrapper">
                        {/* <ReactPlayer url='images/video-end.mp4' /> */}
                        <ReactPlayer
                            className='react-player'
                            url= 'videos/Placeholder-Video.mp4'
                            width='100%'
                            height='100%'
                            controls = {true}
                            playing 
                        />

                        </div>


                    </div>
                    <div className="right__panel">
                        <InputGroup className="upload__wrapp">
                            <Form.Group controlId="formFile" className="upload__box" >
                                <Form.Label>Choose File</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Google Drive</Dropdown.Item>
                                <Dropdown.Item href="#">Dropbox</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <div className="crop__options p-4">
                            <p className="text-center">Crop Options</p>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <ButtonGroup aria-label="Basic example" className="mt-3">
                                <Button variant="outline-secondary">1:1</Button>
                                <Button variant="outline-secondary active">16:9</Button>
                                <Button variant="outline-secondary">9:16</Button>
                                <Button variant="outline-secondary">5:4</Button>
                            </ButtonGroup>

                            <p className="text-muted text-center pt-3">Video Name</p>
                            
                            <div className="py-5 d-flex justify-content-center mid__option">
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>

                <BottomActions />
                
            </div>
        </>
    )
}
export default MergeVideo;
