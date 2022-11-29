import React from 'react';
import Table from 'react-bootstrap/Table'

const Courses = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Course Lecturer</th>
                            <th>Course Department</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOFE 3600U</td>
                            <td>Software Design</td>
                            <td>Ramiro Liscano</td>
                            <td>Software Engineering</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary mx-2">Details</button>
                                <button type="button" class="btn btn-outline-warning mx-2">Edit</button>
                                <button type="button" class="btn btn-outline-danger mx-2">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>SOFE 3500U</td>
                            <td>Systems Programming</td>
                            <td>Anwar Abdalbari</td>
                            <td>Software Engineering</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary mx-2">Details</button>
                                <button type="button" class="btn btn-outline-warning mx-2">Edit</button>
                                <button type="button" class="btn btn-outline-danger mx-2">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>SOFE 3400U</td>
                            <td>Dtabase Management Systems</td>
                            <td>Khalid Hafeez</td>
                            <td>Software Engineering</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary mx-2">Details</button>
                                <button type="button" class="btn btn-outline-warning mx-2">Edit</button>
                                <button type="button" class="btn btn-outline-danger mx-2">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Courses;