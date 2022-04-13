import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const CreateProject = () => {

    const [projectName, setProject] = useState();
    const [due, setDue] = useState();
    const [status, setStatus] = useState('backlog')
    
    const onSubmitNewProject = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/project/new', { projectName, due, status })
            .then(res => {console.log(res);setProject("");setDue("");
        alert("Projecto Creado")})
            .catch(err => console.log(err))
    }

    return (
        
        <div className='container'>
           
            <div>
            <h1>Project Manager</h1>
                <Link className='Link' to={"/"}>Back to DashBoard</Link>
                <form className='container_new' onSubmit={onSubmitNewProject}>

                <h2>Plan a New Project</h2>
                <label>Project</label>
                <input type="text" onChange={(e) => setProject(e.target.value)} value={projectName}></input>

                <label>Due Date:</label>
                <input type="date" onChange={(e) => setDue(e.target.value)} value={due}></input>

                <button className='button' type='submit'>Create New Project</button>
                </form>


            </div>
        </div>
    );
}

export default CreateProject;
