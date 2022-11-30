import React, {useState} from 'react';
import Table from 'react-bootstrap/Table'
import AddStudentsPopUp from './AddStudentsPopUp';

const Students = () => {
    const data = [
        {
           id: 1,
           fName:"Hanzalah",
           lName:"Patel",
           program:"Software Engineering"
        },
        {
            id: 2,
            fName:"Zubair",
            lName:"Islam",
            program:"Software Engineering"
        },
        {
            id: 3,
            fName:"Ziyad",
            lName:"Khan",
            program:"Software Engineering"
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