import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import CoursesPopUp from './CoursesPopUp';

const Courses = () => {
    const data = [
        {
           code:"SOFE 3600U",
           course:"Software Design1",
           lecturer:"Ramiro Liscano1",
           dept:"Software Engineering1"
        },
        {
            code:"SOFE 3500U",
            course:"Software Design2",
            lecturer:"Ramiro Liscano2",
            dept:"Software Engineering2"
        },
        {
            code:"SOFE 3400U",
            course:"Software Design3",
            lecturer:"Ramiro Liscano3",
            dept:"Software Engineering3"
        }
    ]

    const [list, setList] = useState(data);

    const deleteEmployee = (code) => {
        return setList([...list.filter((item) => item.code !== code)]);
    };

    const renderRow = () => {
        const rows = list.map((item) => {
            return (
              <tr key={item.code}>
                <td>{item.code}</td>
                <td>{item.course}</td>
                <td>{item.lecturer}</td>
                <td>{item.dept}</td>
                <td>
                    <button type="button" className="btn btn-outline-dark m-2">Details</button>
                    <button type="button" className="btn btn-outline-info m-2">Edit</button>
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.code)}>Remove</button>
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
                <CoursesPopUp />

                {renderRow()}
            </div>
        </div>
    );
};

export default Courses;