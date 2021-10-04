import React, {useState} from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import {createEmail, createApiToken, isLogged} from '../../actions'

const Login = () => {
    const [email, setEmail] = useState('')
    const [apiToken, setApiToken] = useState('')

    const dispatch = useDispatch()

    return (
        <form className='form'>
            <div className='form__container'>
                <h2>Login Form</h2>
                <label>Email</label>
                <input type="email" autoFocus onChange={(e) => setEmail(e.target.value)}/>
                <label>API token</label>
                <input type='text' onChange={(e) => setApiToken(e.target.value)} />
                <Button 
                    onClick={() => 
                    (dispatch(createEmail(email), 
                    dispatch(createApiToken(apiToken)), 
                    dispatch(isLogged())))} 
                    className='form__btn' 
                    variant="contained" 
                    type='submit'
                >
                    Login
                </Button>
                <p>Please get your API token from <a href='https://newsapi.org/register' target='_blank'>here</a>.</p>
            </div>
        </form>
    )
}

export default Login