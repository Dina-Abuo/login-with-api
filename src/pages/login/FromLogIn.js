
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FromLogIn() {

    const [user, setuser] = useState(
        {
            "email": "",
            "password": ""
        }

    )
    const getUserEmail = (event) => {
        setuser({ ...user, email: event.target.value })
    }
    const getUserPassword = (event) => {
        setuser({ ...user, password: event.target.value })
    }

    let nav = useNavigate();


    const andelLogin = async (e) => {
        console.log(user)
        e.preventDefault();
        await axios.post('https://api.m3o.com/v1/user/Login', {
            email: user.email,
            password: user.password
        }).then((data) => {
            nav('/profile');
            console.log(data);
        }).catch((err) => {
            console.log(err)
            if (err.response.data.code === 401) {
                alert('erorr email or password ')
            }
        })
    }

    return (
        <div>
            <form className="form-login" onSubmit={(e) => andelLogin(e)} >
                <input
                    className="input-email mt-4"
                    type="email"
                    placeholder="  phone number or email address "
                    name="email"
                    onChange={(e) => getUserEmail(e)}
                />
                <input
                    className="input-pass  mt-4"
                    type="password"
                    placeholder="  password"
                    name="password"
                    onChange={(e) => getUserPassword(e)}
                />
                <input
                    type="submit"
                    className="button-log  mt-4 mb-4"
                    value='Log in' />
                <div style={{ width: '394px', boxSizing: 'border-box' }}>
                    <a className="link-forget " href=" # ">Forgetten password ? </a>
                </div>
            </form>
        </div>
    )
}




