import React, { useState } from 'react';

const PersonCard = props => {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    return (
        <form>
            <div className='main'>
            <div className='formulario'>
            <label>First Name:<input type="text" name="Fname" className='input' placeholder='Primer Nombre' onChange={ (e) => setName(e.target.value) }/></label>
            </div>
            <div className='formulario'>
            <label>Last Name:<input type="text" name="Lname" className='input' placeholder='Apellido' onChange={ (e) => setLname(e.target.value) } /></label>
            </div>
            <div className='formulario'>
            <label>E-mail:<input type="text" name="mail" className='input' placeholder='correo electrónico' onChange={ (e) => setMail(e.target.value) }/></label>
            </div>
            <div className='formulario'>
            <label>Password:<input type="password" name="password" className='input'placeholder='Clave' onChange={ (e) => setPassword(e.target.value) }/></label>
            </div>
            <div className='formulario'>
            <label>Confirm Password:<input type="password" name="cpassword" className='input' placeholder='confirma tu clave' onChange={ (e) => setCpassword(e.target.value) }/></label>
            </div>
            </div>
            <div >
            <p>First Name: {name}</p>
            <p>Last Name:{lname}</p>
            <p>E-mail: {mail}</p>
            <p>Password: {password}</p>
            <p>Confirm Password:{cpassword}</p>
            </div>
        </form>
    );
}
export default PersonCard;