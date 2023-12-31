import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
        .then(result => {
            console.log(result);
            alert('Logout successfully!!')
        })
        .catch(error => console.error(error))
    }
    const links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            {
                user && 
                <li><Link to={'/bookmark'}>Bookmark</Link></li>
            }
            {
                user ?  
                <button onClick={handleLogout}>Logout</button>
                : 
                <li><Link to={'/login'}>Login</Link></li>
            }
            
        </>
    return (
        <div>
            <div className="navbar mb-3 px-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <img className="max-h-14" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;