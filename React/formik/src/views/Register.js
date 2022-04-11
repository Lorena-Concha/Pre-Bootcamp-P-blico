import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {

    const registeruser = (user) => {
        console.log(user)

    }



    return (
        <div>
            <h1>Página de Registro de Usuario</h1>
            <RegisterForm onSubmitProp={registeruser} fisrtName="" lastName="" email="" rut="" password="" confirmPassword="">

            </RegisterForm>
        </div>
    );
}

export default Register;
