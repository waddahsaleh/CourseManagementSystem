import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const StudentsPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Student</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form method='post'>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="studentID" class="col-form-label">Student ID</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="studentID" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="fname" class="col-form-label">First Name</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="fname" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="lname" class="col-form-label">Last Name</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="lname" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="program" class="col-form-label">Student Program</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="program" class="form-control"/>
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
};

export default StudentsPopUp;