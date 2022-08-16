import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const EditUser = () => {

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      getUserById();
    }, []);
    

    const UpdateUser = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                nama,
                email,
                gender
            });
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setNama(response.data.nama);
        setEmail(response.data.email);
        setGender(response.data.gender);

    }
  
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={UpdateUser}>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Nama' 
                                value={nama} 
                                onChange={(e)=>setNama(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Email'
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select 
                                    value={gender} 
                                    onChange={(e)=>setGender(e.target.value)}
                                >
                                    <option value="" selected disabled hidden>--- Pilih Gender ---</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                            <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser