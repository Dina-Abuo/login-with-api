import React from 'react'
import FromSignUp from './FromSignUp'
import '../style.css'

export default function SignUp() {
    return (
        <div>
            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content ">
                        <div className="row p-3 header-modal ">
                            <div className="col-11   border-bottom">
                                <h1>Sign Up</h1>
                                <p className="pragrph-sign-up">It's quick and easy.</p>
                            </div>
                            <div className="col-1 border-bottom">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body" style={{ paddingTop: '0' }}>
                            <FromSignUp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
