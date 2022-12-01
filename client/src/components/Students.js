import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import AddStudentsPopUp from './AddStudentsPopUp';
import StudentDetailPopUp from './StudentDetailPopUp';
import Axios from 'axios'
import EditStudentPopUp from './EditStudentPopUp';

const Students = () => {

    const [student, setStudent] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:5000/getStudent').then((response) => {
            response.data.map((item) => {
                setStudent((prevState) => [...prevState, {
                    studentID: item.studentID,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    program: item.program
                }])
            })
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

  

    const deleteEmployee = async (studentID) => {
        const sendStudentID = { studentID: studentID }
        const response = await Axios.post(
            "http://localhost:5000/deleteStudent",
            sendStudentID
        );

        return setStudent([...student.filter((item) => item.studentID !== studentID)]);
    };

    const renderRow = () => {
        const rows = student.map((item) => {
            return (
              <tr key={item.studentID}>
                <td>{item.studentID}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.program}</td>
                <td>
                    {/* <button type="button" className="btn btn-outline-dark m-2">Details</button> */}
                    <StudentDetailPopUp />
                    {/* <button type="button" className="btn btn-outline-info m-2">Edit</button> */}
                    <EditStudentPopUp />
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.studentID)}>Remove</button>
                </td>
              </tr>
            );
        });

        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Student Program</th>
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
                <AddStudentsPopUp />
                
                {renderRow()}
            </div>
        </div>
    );
};

export default Students;