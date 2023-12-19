import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log(location.pathname);
    const { loading, user } = useContext(AuthContext);
    if (loading) {
        return <div className="max-w-6xl mx-auto min-h-screen flex items-center justify-center">
            <progress className="progress w-56"></progress>
        </div>;
    }
    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
};

export default PrivateRoute;