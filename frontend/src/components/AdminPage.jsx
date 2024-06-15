import { useState, useEffect } from "react";
import axios from "axios"

function AdminPage () {
    const[menus, setMenus] = useState([])

    useEffect(() =>{
        axios.get("/api/menus")
    })
    return
}