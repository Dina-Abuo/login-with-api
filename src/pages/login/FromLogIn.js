import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FromLogIn() {

    const nav = useNavigate();
    const [user, setuser] = useState(
        {
            id: "",
            userEmail: "",
            userPassword: "",
            username: " ",
            profile: " "
        }
    )
    const getUsername = (event) => {
        setuser({ ...user, username: event.target.value })
    }
    const getUserEmail = (event) => {
        setuser({ ...user, userEmail: event.target.value })
    }
    const getUserPassword = (event) => {
        setuser({ ...user, userPassword: event.target.value })
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        const token = "MmJmMDcxNzYtNWZlZS00YTE2LThlZWItZjg2ODQ5YzU2N2U5";
        axios.post('https://api.m3o.com/v1/user/Create', {
            headers: { "Authorization": `Bearer ${token}` }
            ,
            fromData: {
                id: user.id,
                profile: user.profile,
                Email: user.userEmail,
                Password: user.userPassword,
                name: user.username,
            }
        }).then(() => {
            console.log('post add')
            nav('/profile');
        }).catch((err) => {
            console.log(err)
        })

    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const token = "MWU3ZTc5ODktYTNlNC00NzYzLWJkOWEtODI1YmFiMmU0NDRm";
    //     fetch('https://api.m3o.com/v1/user/Create', {
    //         method: "POST",
    //         headers: { "Authorization": `Bearer ${token}` },
    //         body: JSON.stringify(user)
    //     }).then(() => {
    //         console.log('post add')
    //         nav('/profile');
    //     }).catch((err) => console.log(err))
    // }
    
    return (
        <div>
            <form className="form-login" onSubmit={(event) => handleSubmit(event)} >
                <input
                    className="input-email mt-4"
                    type="text"
                    placeholder="  enter your name  "
                    name="name"
                    onChange={(e) => { getUsername(e) }} />
                <input
                    className="input-email mt-4"
                    type="email"
                    placeholder="  phone number or email address "
                    name="email"
                    onChange={(e) => { getUserEmail(e) }} />
                <input
                    className="input-pass  mt-4"
                    type="password"
                    placeholder="  password"
                    name="password"
                    onChange={(e) => { getUserPassword(e) }} />
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




