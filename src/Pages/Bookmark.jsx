import { useContext, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import { AuthContext } from "../Components/Provider/AuthProvider";
import axios from "axios";

const Bookmark = () => {
    const {user} = useContext(AuthContext);
    const [bookmarks, setBookmarks] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    useEffect(()=> {
        
        axios.get(url, {withCredentials: true})
        .then(res => {setBookmarks(res.data)})
    }, [url])
    return (
        <div>
            <NavBar></NavBar>
            <h1>Bookmark : {bookmarks.length}</h1>
        </div>
    );
};

export default Bookmark;