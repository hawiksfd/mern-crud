import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';


const UserList = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      getUser();

    }, [])

    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className='column is-half'>
                <Link to="/add" className='button is-success'>Add New User</Link>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {user.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.nama}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default UserList