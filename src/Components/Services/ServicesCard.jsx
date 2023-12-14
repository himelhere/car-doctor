import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="max-w-xs" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/booking/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;