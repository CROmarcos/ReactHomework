import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../../api/register';
import { PageTitle } from '../../../lib/GeneralStyles/PageStyle';
import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const RegisterForm=()=>{
    const history=useHistory();
    const [error, setError]=useState(false);
    const {register, handleSubmit, errors}=useForm();

    const onSubmit=async(data)=>{ 
        registerUser(data).then((res)=>{
            if(res.error){
                setError(true);
            }
            else{
                history.push('/login');
            }
        })
    }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PageTitle>Register</PageTitle>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" id="username" name="username" ref={register({ required: true, minLength: 5})}/>
                {errors.username && errors.username.type==="required" && (<FormInputValidation>Insert your username, please!</FormInputValidation>)}
                {errors.username && errors.username.type==="minLength" && (<FormInputValidation>Username is too short!</FormInputValidation>)}
                {!errors.username && error && (<FormInputValidation>Username already exists!</FormInputValidation>)}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" ref={register({ required: true, minLength: 8})}/>
                {errors.password && errors.password.type==="required" && (<FormInputValidation>Password is required!</FormInputValidation>)}
                {errors.password && errors.password.type==="minLength" && (<FormInputValidation>Password is too short!</FormInputValidation>)}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;