import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            <Link to='/login' style={ {padding:'50px'}}> logIn </Link>      
            <Link to='/profile'> profile</Link> 
        </div>
    )
}

export default Header
