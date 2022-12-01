import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CourseDetailPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-dark m-2" onClick={handleShow}>Details</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Course Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>EMPTY COURSE MODAL</p>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default CourseDetailPopUp;