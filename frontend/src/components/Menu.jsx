import { useState, useEffect } from 'react';


function Menus() {
  const [menu, setMenu] = useState([]);

  const BASE_URL = 'http://localhost:3000/';

  useEffect(() => {
    // Fetch menus from your API
    console.log(fetch('/menus'))
    fetch('/menus')
      .then((res) => res.json())
     .then((data) => setMenu(data))
     .catch((error) => console.error(error));

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