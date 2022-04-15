import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";


const EditAuthor = () => {

    const [name, setName] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => setName(res.data.name))
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = e => {
        axios.put('http://localhost:8000/api/author/' + id, { name })
            .then(res => setName());

    }

    const back = () => {
        navigate("/");
    }

    return (
        <div>
            <div>
                <h1>Edit this author</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <form className='form-group' onSubmit={updateAuthor}>
                    <label>Name : </label>
                    <input className='form-control' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit" className='btn btn-success m-1'>Save</button>
                    <button onClick={back} className='btn btn-success m-1'>Back</button>

                </form>

            </div>

        </div>
    );
}

export default EditAuthor;
