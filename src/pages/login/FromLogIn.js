
import React from 'react'
export default function FromLogIn() {
    return (
        <div>
            <form className="form-login" >
                <input
                    className="input-email mt-4"
                    type="email"
                    placeholder="  phone number or email address "
                    name="email"
                />
                <input
                    className="input-pass  mt-4"
                    type="password"
                    placeholder="  password"
                    name="password"
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




