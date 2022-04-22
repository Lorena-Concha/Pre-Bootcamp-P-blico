import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import {
    useNavigate,
} from "react-router-dom";
import { useUser } from '../contexts/userContext';
import axios from 'axios';


const Login = () => {

    const { setUser } = useUser();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const loginUser = (values) => {
        axios.post('/api/login', values)
            .then(res => {
                console.log('Usuario loggueado');
                console.log(res.data);
                axios.get(`/api/user/${res.data._id}`, { withCredentials: true })
                    .then(res => {
                        setUser(res.data);
                        navigate("/");
                    })
                    .catch(err => {
                        console.error(err);
                        return { success: false, data: err.message };
                    })

            })
            .catch(err => {
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    return (
        <div>
            login
            {errors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
            <LoginForm onSubmitProp={loginUser}></LoginForm>
        </div>
    );
}

export default Login;