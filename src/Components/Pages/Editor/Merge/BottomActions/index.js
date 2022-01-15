import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./style.scss";

const BottomActions = (params) => {
    return (
        <>
            <div className="bottom__wrapper">
                <div className="timeline-inner">
                    <div className="timeline-inner-draggable">
                        <div className="frames-group item">
                            <div className="timeline-controls handle">
                                <span className="tlc-current"></span>
                            </div>
                            <div className="video-frames handle">
                                <div>
                                    <img src="https://clideo.com/files/video/DIDN98Lw4FPC/frames/frame-01.jpg" alt="frame" />
                                </div>
                                <div>
                                    <img src="https://clideo.com/files/video/DIDN98Lw4FPC/frames/frame-01.jpg" alt="frame" />
                                </div>
                                <div>
                                    <img src="https://clideo.com/files/video/DIDN98Lw4FPC/frames/frame-01.jpg" alt="frame" />
                                </div>
                            </div>
                        </div>
                         
                        <Form.Group controlId="formFile" className="upload__box" >
                                <Form.Label>Add more files</Form.Label>
                                <Form.Control type="file" />
                        </Form.Group>
                    </div>
                </div>
                <div className="bottom__details">
                    <div className="output">
                        <span>Final output</span>
                        <span>00.05</span>
                    </div>
                    <div className="output">
                        <span>Video size, px</span>
                        <span>1920x1080</span>
                    </div>
                    <div className="output">
                        <span>Format</span>
                        <span>1920</span>
                    </div>
                    <Button variant="primary">Export</Button>
                </div>
            </div>
        </>
    )
}

export default BottomActions;