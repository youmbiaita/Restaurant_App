import { useState, useEffect } from 'react';


function Menus() {
  const [menu, setMenu] = useState([]);

  const BASE_URL = 'http://localhost:3000/';

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(`${BASE_URL}/menus`);

        if (response.status !== 200) {
          return;
        }

        const data = await response.json();

        setMenu(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMenu();
  }, []);

  return (
  <div>
    <h3>{menu.name}</h3>
    <img src={menu.image} style={{height: "200px", width: "200px"}}  />
    <h4>{menu.description}</h4>
    <h4>${menu.price}</h4>
  </div>
  );
}

export default Menus;