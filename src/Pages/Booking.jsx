import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Booking = () => {
    const {user} = useContext(AuthContext);
    const { title } = useLoaderData();

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
            
                <div className="hero-content flex-col">
                    <div>
                    <h1 className="text-center text-3xl font-bold">Booking the service: {title}</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;