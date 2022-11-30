import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const CoursesPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [professor, setProfessor] = useState('')
    const [department, setDepartment] = useState('')


    const handleChange =  (event) => {
        // setCourseCode(event.target.value);

        console.log('value is:', event.target.name);
        console.log('value is:', event.target.value);

        if (event.target.name === "courseCode") {
            setCourseCode(event.target.value)
        }

        else if (event.target.name === "courseName") {
            setCourseName(event.target.value)
        }

        else if (event.target.name === "professor") {
            setProfessor(event.target.value)
        }

        else if (event.target.name === "department") {
            setDepartment(event.target.value)
        }


      
       

    };

    const handleSubmit =  () => {

        console.log("CLicked")
        // e.preventDefault();

        // console.log(courseCode)
        // console.log(courseName)
        // console.log(professor)
        // console.log(department)
        // const courseLog = {
        //     courseCode: courseCode, courseName: courseName,
        //     professor: professor,
        //     department: department
        // };

        // const response = await Axios.post(
        //     "http://localhost:5000/addCourse",
        //     courseLog
        // );
    }

    const handleClick = () => alert(courseCode);
    return (
        <>
            <button type="button" className="btn btn-outline-success btn-sm my-2" onClick={handleShow}>Add Course</button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit = {handleClick}>
                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseCode" class="col-form-label">Course Code:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    type="text"
                                    name="courseCode"
                                    id="courseCode"
                                    class="form-control"
                                    // value={courseCode}
                                    onChange={handleChange } />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="courseName" class="col-form-label">Course Name:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="courseName"
                                    type="text" 
                                    id="courseName" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-auto">
                                <label htmlFor="professor" class="col-form-label">Professor:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="professor"
                                    type="text" 
                                    id="professor" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div class="form-group mb-2">
                            <div class="col-auto">
                                <label htmlFor="department" class="col-form-label">Department:</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    name="department"
                                    type="text" 
                                    id="department" 
                                    class="form-control"
                                    onChange={handleChange}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button> 
                        {/* onSubmit={handleSubmit}  */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoursesPopUp;