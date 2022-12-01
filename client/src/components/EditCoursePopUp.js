import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditCoursePopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-info m-2" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>EMPTY EDIT COURSE MODAL</p>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default EditCoursePopUp;