import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const AuthorList = () => {

    const [authors, setAuthors] = useState();
    const [updateCounter, setUpdateCounter] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data.authors);
            })
            .catch(err => console.log("Error:", err))
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => setUpdateCounter((old) => old + 1));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data.authors);
            })
            .catch(err => console.log("Error:", err))
    }, [updateCounter]);

    return (
        <div className='d-flex justify-content-center m-3 container'>
                 <div className=''>
                <Link to={"/create"} className='btn btn-success m-1' >Create Author </Link>
            </div>
       
            
            <div className='d-flex justify-content-center m-5 row'>
                <table>

                    <thead>
                        <tr>
                            <th>Author
                            </th>
                            <th>
                                Actions available
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {authors?.map((author, i) =>
                            <tr key={i}>
                                <td>
                                    {author.name}
                                </td>
                                <td>
                                    <Link to={"/edit/" + author._id} className='btn btn-success m-1'>Edit</Link>

                                    <button className='btn btn-success m-1' onClick={() => { deleteAuthor(author._id) }}>Delete</button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
           
            </div>
        </div>
    );
}

export default AuthorList;
