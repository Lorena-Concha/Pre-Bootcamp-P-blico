import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

const Board = () => {
    const [projects, setProjects] = useState();
    const [updateCounter, setUpdateCounter] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8000/api/project')
            .then(res => { setProjects(res.data.allProjects); }) //guarda la respuesta de la api en projects (setProjects)
            .catch(err => console.log("Error:", err))
    }, [])//llama a la api al cargar la pagina por primera vez

    const updateProject = (id, projectName, due, status) => {
        axios.put('http://localhost:8000/api/project/' + id, { projectName, due, status })
            .then(res => setUpdateCounter((old) => old + 1));
    } //funcion que permite actualizar el estado de un proyecto 

    const removeProject = (id) => {
        axios.delete('http://localhost:8000/api/project/' + id)
            .then(res => setUpdateCounter((old) => old + 1));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/project')
            .then(res => { setProjects(res.data.allProjects); })
            .catch(err => console.log("Error:", err))
    }, [updateCounter])
    // se declara nuevo useEffect para que cada vez que cambie la variable updateCounter vuelva a llamar a la api que trae los proyectos
    return (
        <div className='container'>




            <div className='main_container'>
                <h2>Backlog</h2>
                {projects?.filter((project) => project.status === 'backlog').map((project, i) =>
                    // filtra los proyectos en estado backlog y mapea los que quedaron en un div con esta estructura
                    //se agrega ? para que no reclame por arreglo vacio al cargar
                    // en la linea 35 pintamos el projectName de cada proyecto, luego el due formateado con date-fns
                    // luego en la linea 38 le decimos al boton que llame a la funcion updateProject, le mande id, projectName y due mas el nuevo estado 'inprogress'
                    <div className='project' key={i}>

                        {project.projectName}

                        <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                        <button className='button' onClick={() => updateProject(project._id, project.projectName, project.due, 'inprogress')}>Start Project</button>
                    </div>)}</div>

            <div className='main_container'>
                <h2>In Progress</h2>{projects?.filter((project) => project.status === 'inprogress').map((project, i) =>
                    <div className='project' key={i}>

                        {project.projectName}
                        <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                        <button className='button' onClick={() => updateProject(project._id, project.projectName, project.due, 'Completed')}>Move to Completed</button>
                    </div>)}</div>

            <div className='main_container'>
                <h2>Completed</h2>{projects?.filter((project) => project.status === 'Completed').map((project, i) =>
                    <div className='project' key={i}>

                        {project.projectName}
                        <p>Due : {format(parseISO(project.due), 'dd-MM-yyyy')}</p>
                        <button className='button' onClick={() => removeProject(project._id)}>Remove Project</button>
                    </div>)}</div>
            <Link className='Link' to={"/create"}>Create New Project</Link>
        </div>
    );
}

export default Board;
