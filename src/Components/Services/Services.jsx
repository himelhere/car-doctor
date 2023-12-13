import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../public/services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-5 mb-12">
                <h1 className="text-xl font-bold text-[#FF3811]">Service {services.length}</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;