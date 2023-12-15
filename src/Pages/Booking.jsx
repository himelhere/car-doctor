import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Booking = () => {
    const {user} = useContext(AuthContext);
    const { _id, title, price, img } = useLoaderData();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.due.value;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service: _id,
            price
        }
        console.log(order);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order) 
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Successfully added!')
            }
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
             
                <div className="hero-content flex-col">
                    <div>
                    <h1 className="text-center text-3xl font-bold">Booking the service: {title}</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input defaultValue={user?.displayName} type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due price</span>
                                </label>
                                <input type="text" name="due" defaultValue={'$' + price} placeholder="price" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;