import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../../api/login';
import { AuthContext } from '../../../context/AuthContext';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';
import { PageTitle } from '../../../lib/GeneralStyles/PageStyle';

const LoginForm=()=>{
    const history=useHistory();
    const {register, handleSubmit, errors}=useForm();
    const [error, setError]=useState(false);
    const auth=useContext(AuthContext);

    const onSubmit=async(data)=>{ 
        try{
            const result=await loginUser(data);
            if(result.token){
                localStorage.setItem('token', `Bearer ${result.token}`);
                auth.login();
                history.push('/');
            }else{
                setError(true);
            }
        }catch(err){
            console.log(err);
        }
    }

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PageTitle>Login</PageTitle>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" id="username" name="username" ref={register({required: true})}/>
                {errors.username && <FormInputValidation>Username is required</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" ref={register({required: true})}/>
                {errors.password && <FormInputValidation>Password is required</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loginForm}
            {error && <FormGeneralError>Username or password is incorrect!</FormGeneralError>}
        </>
    );
}

export default LoginForm;