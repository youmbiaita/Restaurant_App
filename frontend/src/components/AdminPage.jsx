import { useState, useEffect } from "react";
import axios from "axios"
import "../styles/adminpage.css"
import api from "../services/api";

function AdminPage () {
    const[menus, setMenus] = useState([])

    const BASE_URL = "https://tchakounte-aita-restaurant-capstone.onrender.com"

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await api.get("/menus");
                setMenus(response.data);
            }catch (error) {
                console.error("Error fetching menus", error)
            }
        }
        fetchMenus();
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