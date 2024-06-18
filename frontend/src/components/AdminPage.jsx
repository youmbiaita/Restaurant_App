import { useState, useEffect } from "react";
import axios from "axios"
import "../styles/adminpage.css"

function AdminPage () {
    const[menus, setMenus] = useState([])

    useEffect(() => {
        axios.get("/api/menus")
        .then(response => setMenus(response.data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <ul>
                {menus.map(menu => (
                    <li key={menu._id}>{menu.name} -{menu.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;