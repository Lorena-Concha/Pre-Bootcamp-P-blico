import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = (props) => {

    const { onSubmitProp, firtName, lastName, email, rut, password, confirmPassword } = props;
    return (
        <div>
            <Formik

                initialValues={{
                    firtName: firtName,
                    lastName: lastName,
                    email: email,
                    rut: rut,
                    password: password,
                    confirmPassword: confirmPassword,

                }}

                validationSchema={Yup.object().shape({
                    firtName: Yup.string()
                        .min(2, "Tu nombre es muy corto")
                        .max(15, "Tu nombre es muy largo")
                        .required("este campo es obligatorio"),
                    lastName: Yup.string()
                        .min(2, "Tu apellido es muy corto")
                        .max(15, "Tu apellido es muy largo")
                        .required("este campo es obligatorio"),
                    email: Yup.string()
                        .email("Correo no Valido")
                        .required("este campo es obligatorio"),
                    rut: Yup.string()
                        .matches(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/, "el rut esta incorrecto"),
                    password: Yup.string()
                        .required("este campo es obligatorio")
                        .equals([Yup.ref('confirmPassword'), null], "Las contraseñas deben ser iguales")
                        .min(8, "La contraseña debe tener 8 caracteres"),
                    confirmPassword: Yup.string()
                        .required("este campo es obligatorio")
                        .equals([Yup.ref('confirmPassword'), null], "Las contrseñas deben ser iguales")
                        .min(8, "La contraseña debe tener 8 caracteres")

                })}

                onSubmit={(values, { setSubmitting }) => {
                    const timeOut = setTimeout(() => {
                        console.log(values);
                        onSubmitProp(values);
                        setSubmitting(false);
                    }, 1000)
                }}
            >
                {({ errors,
                    touched,
                    handleSubmit }) => {

                    return (
                        <div>
                            <h2>Formulario de Registro</h2>
                            <Form onSubmit={handleSubmit} >
                                <div className='contenedor'> 
                                    <div>
                                        <label for="formFile" class="form-label" htmlFor='firstName'>Nombre</label>
                                        <Field id="firstName" type="text" placeholder="Nombre" name="firstName" className='form-control'></Field>
                                        {errors.firtName && touched.firstName && <p>{errors.firtName}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor='lastName'>Apellido</label>
                                        <Field id="lastName" type="text" placeholder="Apellido" name="lastName" className='form-control'></Field>
                                        {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor='lastName'>E-Mail</label>
                                        <Field id="email" type="text" placeholder="email@servidor.com" name="email" className='form-control'></Field>
                                        {errors.email && touched.email && <p>{errors.email}</p>}
                                    </div>

                                    <div >
                                        <label htmlFor='rut'>Rut</label>
                                        <Field id="rut" type="text" placeholder="tu rut" name="email" className='form-control'></Field>
                                        {errors.rut && touched.rut && <p>{errors.rut}</p>}
                                    </div>

                                    <div >
                                        <label htmlFor='password'>Contraseña</label>
                                        <Field id="password" type="password" placeholder="contraseña" name="password" className='form-control'></Field>
                                        {errors.password && touched.password && <p>{errors.password}</p>}
                                    </div>

                                    <div >
                                        <label htmlFor='confirmPassword'>Confirma Contraseña</label>
                                        <Field id="confirmPassword" type="password" placeholder="confirma contraseña" name="confirmPassword" className='form-control'></Field>
                                        {errors.confirmPassword && touched.pasconfirmPasswordsword && <p>{errors.confirmPassword}</p>}
                                    </div>
                                </div>
                                <div >
                                    <button type="submit" class="btn btn-outline-success">Registrarse</button>

                                </div>
                            </Form>
                        </div>
                    )

                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;
