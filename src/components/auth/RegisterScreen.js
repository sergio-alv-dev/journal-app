import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

// se puede utilizar useState, no es necesario utilizar redux aqui
    const dispatch = useDispatch();
    const { loading, msgError } = useSelector( state => state.ui );
    
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name ));
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0){
            dispatch( setError('Name is required') );
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') );
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password is not valid') );
            return false;
        } else {
            dispatch( removeError() );
        }

        return true;
    }



    return (
        <>
        < div
                className = "animate__animated animate__fadeIn"    >

            
            <h3 className= "auth__title mb-5"> Register </h3>
            
            {
                msgError 
                &&
                (
                    <div className="auth__alert-error">
                        {
                            msgError 
                        }
                    </div>
                )
            }

            <form onSubmit = { handleRegister }>

                <input 
                    type = "text"
                    placeholder = "Name"
                    name = "name"
                    className = "auth__input"
                    autoComplete = "off"
                    value = { name }
                    onChange = { handleInputChange }
                />
                <input 
                    type = "text"
                    placeholder = "Email"
                    name = "email"
                    className = "auth__input"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleInputChange }
                />
                
                <input 
                    type = "password"
                    placeholder = "Password"
                    name = "password"
                    className = "auth__input"
                    value = { password }
                    onChange = { handleInputChange }
                />

                <input 
                    type = "password"
                    placeholder = "Confirm Password"
                    name = "password2"
                    className = "auth__input"
                    value = { password2 }
                    onChange = { handleInputChange }
                />

                <button
                    type = "submit"
                    className = "btn btn-primary btn-block mb-5"
                    disabled = { loading }
                >
                    Register
                </button>
                
                <hr/>
                <Link
                    to = "/auth/login"
                    className = "link mt-5"    
                >
                    Already registered?
                </Link>
            </form>
            </div>

        </>
    )
}
