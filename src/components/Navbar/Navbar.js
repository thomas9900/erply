import React from 'react'
import './Navbar.css'
import Button from '@mui/material/Button'
import {useSelector, useDispatch} from 'react-redux'
import {isLogged} from '../../actions'
import { NavLink, Link  } from 'react-router-dom'

const Navbar = () => {
  const logged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__icon" src="https://erply.com/wp-content/themes/erply-10/img/erply-logo.svg" alt="Erply Logo" />
            </Link>
            {logged && (
                <React.Fragment>
                <div className='header__nav'>
                    <NavLink className='sidebar__list' activeClassName='active' to='/profile'>
                        Profile
                    </NavLink>
                    
                    <NavLink className='sidebar__article' activeClassName='active' to='/articles'>
                        Articles
                    </NavLink>
                </div>
                <div className='header__right'>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to='/'
                        className='header__btn' 
                        onClick={() => dispatch(isLogged())}
                    >
                        <Button variant="contained">
                            Logout
                        </Button>
                    </Link>
                </div>
                </React.Fragment>
                )}
        </div>
    )
}

export default Navbar