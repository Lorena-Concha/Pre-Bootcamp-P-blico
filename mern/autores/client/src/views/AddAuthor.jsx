import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = () => {
    const [name, setName] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const onSubmitAuthor = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/new', { name })
            .then(res => {setName("")})
            .catch(err => { setError(err.response.data.error);

            })
    }

    const back = () => {
        navigate("/");
    }


    return (
        <div>
            <h1>Favourite Authors</h1>
            <div>
                <Link className='btn btn-success m-3' to={"/"}>Home </Link>
            </div>
            <div>
                <h2>Add a new Author:</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <form onSubmit={onSubmitAuthor} >
                    <label>Name</label>
                    <input required type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} ></input>
                    <button onClick={back} className='btn btn-success m-3'>Cancel</button>
                    <button type="submit" className='btn btn-success m-3'>Submit</button>
                    <div>
                    {error}
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddAuthor;
