import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditLecturerPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="btn btn-outline-info m-2" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Lecturer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>EMPTY EDIT LECTURER MODAL</p>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default EditLecturerPopUp;