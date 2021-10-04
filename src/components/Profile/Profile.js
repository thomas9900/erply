import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createEmail, createApiToken, createName} from '../../actions'
import Button from '@mui/material/Button'

const Profile = () => {
    const [email, setEmail] = useState('')
    const [apiToken, setApiToken] = useState('')
    const [name, setName] = useState('')

    const currentEmail = useSelector(state => state.email)
    const currentApiToken = useSelector(state => state.apiToken)
    const currentName = useSelector(state => state.name)

    const dispatch = useDispatch()

    return (
        <form className='form'>
            <div className='form__container'>
                <h2>Profile</h2>
                <label>Name</label>
                <input type='text' autoFocus  placeholder={currentName} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type='email' placeholder={currentEmail} onChange={(e) => setEmail(e.target.value)} />
                <label>API token</label>
                <input type='text' placeholder={currentApiToken}  onChange={(e) => setApiToken(e.target.value)} />
                <Button onClick={() => 
                    (dispatch(createEmail(email)), 
                    dispatch(createApiToken(apiToken)), 
                    dispatch(createName(name)))} 
                    className='form__btn'
                    variant="contained"
                >
                    Save
                </Button>
            </div>
        </form>
    )
}

export default Profile
