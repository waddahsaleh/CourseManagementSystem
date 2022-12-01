import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import AddCoursesPopUp from './AddCoursesPopUp';
import CourseDetailPopUp from './CourseDetailPopUp'
import Axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import EditCoursePopUp from './EditCoursePopUp';

const Courses = () => {
    const navigate = useNavigate()

    const [course, setCourse] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:5000/getCourse').then((response) => {
            response.data.map((item) => {
                setCourse((prevState) => [...prevState, {
                    courseID: item.courseID,
                    courseCode: item.courseCode,
                    courseName: item.courseName,
                    lecturer: item.lecturer,
                    department: item.department
                }])
            })
        }).catch(error => {
            console.log(error.response)
        });
    }, [])
    console.log("course")
    console.log(course)

    const deleteEmployee = async (courseID) => {
        const sendCourseID = {courseID: courseID}
        const response = await Axios.post(
            "http://localhost:5000/deleteCourse",
            sendCourseID
        );
        return setCourse([...course.filter((item) => item.courseID !== courseID)]);

        // window.location.reload()


    };
    console.log("deleteEmployee")
    console.log(deleteEmployee)

    const renderRow = () => {
        const rows = course.map((item) => {
            return (
                <tr key={item.courseID}>
                <td>{item.courseCode}</td>
                <td>{item.courseName}</td>
                <td>{item.lecturer}</td>
                <td>{item.department}</td>
                <td>
                    {/* <button type="button" className="btn btn-outline-dark m-2">Details</button> */}
                    <CourseDetailPopUp />
                    {/* <button type="button" className="btn btn-outline-info m-2">Edit</button> */}
                    <EditCoursePopUp />
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.courseID)}>Remove</button>
                </td>
              </tr>
            );
        });

        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Professor</th>
                        <th>Course Department</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        )
    }

    /* -------------------------------------------------------------------------------------------------------------------------------- */

    return (
        <div className='container'>
            <div className='my-5'>
                <AddCoursesPopUp />

                {renderRow()}
            </div>
        </div>
    );
};

export default Courses;