import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CoursesPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Course</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='post'>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Course Code:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="courseCode" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Course Name:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="courseCode" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Professor:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="courseCode" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Department:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="courseCode" class="form-control"/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary">Add</button> 
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoursesPopUp;