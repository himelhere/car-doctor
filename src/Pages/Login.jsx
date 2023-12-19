import NavBar from "../Shared/NavBar";
import loginImg from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(location?.state ? location?.state : '/')
                

                alert('Sign in successfully');

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="Login image" />
                    </div>
                    <div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSignIn} className="card-body">
                                <h1 className="text-3xl font-bold">Please Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <h1>Login with <button className="text-blue-600 font-bold">Google</button></h1>
                            </form>

                        </div>
                        <h1 className="my-4">New here? Please <Link className="text-blue-600 font-bold" to={'/register'}>Registration</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;