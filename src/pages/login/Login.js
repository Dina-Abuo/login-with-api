import FromLogIn from './FromLogIn'
import '../style.css'
import SignUp from '../SignUp/SignUp'
// import Logout from '../Logout/Logout'
export default function Login() {
    return (
        <div>
            <div className="container">
                <div className="parent">
                    <div className="child1">
                        <h1 className="mt-5 adress ">Facebook</h1>
                        <div className='ChangeProfile'>
                            {/* <Logout /> */}
                        </div>
                    </div>
                    <div className="child2">
                        <div className="conten-form mb-3  shadow">
                            <FromLogIn />
                            <div style={{ width: '400px' }}>
                                <button type="button" className="button-create mt-4 mb-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" > Create new account </button> </div>
                        </div>
                        <p className="pragraphe1"><a className="link-paragraphe" href=" # ">Create a Page</a> for a celebrity, brand or
                            business.</p>
                    </div>
                </div>
            </div>
            <SignUp />
        </div>
    )
}
