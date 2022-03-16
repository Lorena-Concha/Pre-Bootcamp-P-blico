import React, { useState } from "react";


const NewTask = (props) => {
    const [newTask, setNewTask] = useState()
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        let newTasks = tasks.concat([{ post: newTask, done: false }]);
        
        setTasks(newTasks);
        setNewTask('');
    }

    const done = (i) => {
        console.log(i);
        let newTasks = tasks.map((task, indice) => {
            indice === i ? task.done = true : task.done = task.done;
            return task;
        })
        setTasks(newTasks);

    }

    const remove = (index) => {
        setTasks(tasks.filter((item, i) => i !== index));
    }
    return (
        <div className="bodybox">
            <div className="header">
                <h1>To do List </h1>
                <input className="entrada" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>

                <button className="btn" onClick={addTask}>Crear</button>

            </div>
            <div className="container">
                <div className="todobox">
                    <h3>To Do List / Tareas pendientes</h3>
                    <div className="textodo">
                        {tasks.map((task, i) => {
                                return (<div  key={i}>
                                    
                                    <span style={{ textDecoration: task.done && 'line-through' }}>{task.post} <input type="checkbox" onClick={() => done(i)}></input>
                                    <button className="btn" onClick={() => remove(i)}>Eliminar</button></span>
                                </div>)

                            })
                        }
                    </div>

                </div>
{/* 
                <div className="donebox">
                    <h3>Done List / Realizadas</h3>
                    {tasks.filter(task => task.done === true).map((task, i) => {
                                return (<div className="textodo" key={i}>
                                    <p>{task.post}</p>

                                </div>)

                            })
                        }

                </div> */}
            </div>
        </div>
    )

}

export default NewTask;