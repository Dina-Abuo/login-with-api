import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function FromLogIn() {

    const nav = useNavigate();

    const [user, setuser] = useState(
        {
            userEmail: "",
            userPassword: ""
        }
    )
    const getUserEmail = (event) => {

        setuser({ ...user, userEmail: event.target.value })

    }
    const getUserPassword = (event) => {

        setuser({ ...user, userPassword: event.target.value })

    }
    const handleSubmit = (e) => {
        if (user.userEmail === "dina@gmail.com" && user.userPassword === "123") {
            nav('/profile');
            console.log("hahahahahhahhaha");
        }
        else {
            console.log("wrong user email or password");
        }
        e.preventDefault();
    }

    return (
        <div>
            <form className="form-login" onSubmit={(event) => handleSubmit(event)} >
                <input
                    className="input-email mt-4"
                    type="email|number"
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




