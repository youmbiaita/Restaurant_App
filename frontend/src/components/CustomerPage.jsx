import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerPage = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('/api/menus')
      .then(response => setMenus(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Customer Page</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu._id}>{menu.name} - {menu.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerPage;
