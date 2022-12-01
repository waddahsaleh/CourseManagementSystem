import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import AddLecturersPopUp from './AddLecturersPopUp';
import EditLecturerPopUp from './EditLecturerPopUp';
import LecturerDetailPopUp from './LecturerDetailPopUp';
import Axios from 'axios'

const Lecturers = () => {
    const [lecturer, setLecturer] = useState([])


    useEffect(() => {
        Axios.post('http://localhost:5000/getLecturer').then((response) => {
            response.data.map((item) => {
                setLecturer((prevState) => [...prevState, {
                    lecturerID: item.lecturerID,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    program: item.program
                }])
            })
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

    const deleteEmployee = (lecturerID) => {
        return setLecturer([...lecturer.filter((item) => item.lecturerID !== lecturerID)]);
    };

    const renderRow = () => {
        const rows = lecturer.map((item) => {
            return (
                <tr key={item.lecturerID}>
                <td>{item.lecturerID}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>
                    {/* <button type="button" className="btn btn-outline-dark m-2">Details</button> */}
                    <LecturerDetailPopUp />
                    {/* <button type="button" className="btn btn-outline-info m-2">Edit</button> */}
                    <EditLecturerPopUp />
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.lecturerID)}>Remove</button>
                </td>
              </tr>
            );
        });

        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Professor ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Salary</th>
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
                <AddLecturersPopUp />

                {renderRow()}
            </div>
        </div>
    );
};

export default Lecturers;