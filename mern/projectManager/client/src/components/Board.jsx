import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Board = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/project')
            .then(res => { setProjects(res.data.allProjects); })
            .catch(err => console.log("Error:", err))
    }, [])
 
    const updateProject = (id,projectName,due,status) =>{
        axios.put('http://localhost:8000/api/project/' + id, { projectName, due, status })
            .then(res => console.log(res));
    }
    return (
        <div className='container'>
            <div><h1>Backlog</h1>{projects?.filter((project) => project.status === 'backlog').map((project, i) =>

                <div className='project'>

                    {project.projectName}
                    <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                    <button onClick={() =>updateProject(project._id,project.projectName,project.due,'inprogress')}>Start Project</button>
                </div>)}</div>

            <div><h1>In Progress</h1>{projects?.filter((project) => project.status === 'inprogress').map((project, i) =>
                <div className='project'>

                    {project.projectName}
                    <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                    <button onClick={() =>updateProject(project._id,project.projectName,project.due,'Completed')}>Move to Completed</button>
                </div>)}</div>

            <div><h1>Completed</h1>{projects?.filter((project) => project.status === 'Completed').map((project, i) =>
                <div className='project'>

                    {project.projectName}
                    <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                    <button>Remove Project</button>
                </div>)}</div>
        </div>
    );
}

export default Board;
