import NavBar from "../Shared/NavBar";
import loginImg from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";


const Register = () => {
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
                            <form className="card-body">
                                <h1 className="text-3xl font-bold">Please register</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                                </div>
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
                        <h1 className="my-4">Already have account? Please <Link className="text-blue-600 font-bold" to={'/login'}>Login</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;