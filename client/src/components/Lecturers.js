import React, {useState} from 'react';
import Table from 'react-bootstrap/Table'
import AddLecturersPopUp from './AddLecturersPopUp';

const Lecturers = () => {
    const data = [
        {
           id: 1,
           fName:"Ramiro",
           lName:"Liscano",
           program:"Software Engineering",
           salary: "$100,000"
        },
        {
            id: 2,
            fName:"Khalid",
            lName:"Hafeez",
            program:"Software Engineering",
            salary: "$200,000"
        },
        {
            id: 3,
            fName:"Maruf",
            lName:"Maruf",
            program:"Software Engineering",
            salary: "$10,000"
        }
    ]

    const [list, setList] = useState(data);

    const deleteEmployee = (id) => {
        return setList([...list.filter((item) => item.id !== id)]);
    };

    const renderRow = () => {
        const rows = list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.program}</td>
                <td>{item.salary}</td>
                <td>
                    <button type="button" className="btn btn-outline-dark m-2">Details</button>
                    <button type="button" className="btn btn-outline-info m-2">Edit</button>
                    <button type="button" className="btn btn-outline-danger m-2" onClick={() => deleteEmployee(item.id)}>Remove</button>
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