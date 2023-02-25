import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function FromSignUp() {
    const nav = useNavigate();
    const [user, setuser] = useState(
        {
            id: " ",
            userEmail: "",
            userPassword: "",
            username: " ",
        }
    )
    const getUsername = (event) => {
        setuser({ ...user, username: event.target.value, id: event.target.value + '-ooooooooo' })
    }
    const getUserEmail = (event) => {
        setuser({ ...user, userEmail: event.target.value })
    }
    const getUserPassword = (event) => {
        setuser({ ...user, userPassword: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        await axios.post('https://api.m3o.com/v1/user/Create', {
            id: user.id,
            email: user.userEmail,
            password: user.userPassword,
            username: user.username
        }).then(() => {
            console.log('post add')
            nav('/profile');
        }).catch((error) => {
            alert(error.response.data.detail)
        })
    }

    return (
        <div>
            <form className="form-sigin" onSubmit={(event) => handleSubmit(event)}>
                <input
                    className="Mobile-or-email mt-3"
                    type="email"
                    placeholder="Mobile number or email address "
                    name="email"
                    onChange={(e) => getUserEmail(e)} />
                <input
                    className="new-password mb-2 mt-3"
                    type="password"
                    placeholder="New  password"
                    name="password"
                    onChange={(e) => getUserPassword(e)}
                />
                <input
                    type="text"
                    className="First-name"
                    placeholder=" enter your name"
                    name="FirstName"
                    onChange={(e) => getUsername(e)}
                />
                <div className="p-3">
                    <input
                        type="submit"
                        className="button-sign"
                        value='Sign Up' />
                </div>
            </form>




        </div>
    )
}

