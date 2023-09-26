import React, { useState, useEffect } from 'react';

function Navbar() {
  const [headerMenuLeft, setHeaderMenuLeft] = useState([]);
  const [headerMenuRight, setHeaderMenuRight] = useState([]);

  useEffect(() => {
    // Define the URL to your WordPress REST API endpoint for header menu data.
    const apiUrl = 'https://wp.spaculus.info/2/spaculusorg2023/wp-json/acf/v2/options/';

    // Simulated data fetching function, replace with actual data fetching logic.
    const fetchHeaderMenuData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Assuming the ACF field names are "header_menu_left" and "header_menu_right".
        const leftMenu = data.acf.header_menu || [];
        const rightMenu = data.acf.header_menu_right || [];

        return {
          left: leftMenu,
          right: rightMenu,
        };
      } catch (error) {
        throw error;
      }
    };

    // Fetch and set header menu data here
    fetchHeaderMenuData()
      .then((menuData) => {
        setHeaderMenuLeft(menuData.left);
        setHeaderMenuRight(menuData.right);
      })
      .catch((error) => {
        console.error('Error fetching header menu data:', error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="header-top ms-auto">
      <ul className="navbar-nav">
        {headerMenuLeft.map((menu, index) => (
          <li key={index} className="nav-item dropdown dropdown-mega position-static">
            <a className="nav-link" href={menu.top_level_menu_url}>
              {menu.top_level_menu_name}
            </a>
            {menu.second_level_menu && menu.second_level_menu.length > 0 && (
              <>
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                ></span>
                <div className="dropdown-menu shadow">
                  {menu.second_level_menu.map((submenu, subIndex) => (
                    <div key={subIndex} className="col-lg-4 col-sm-6">
                      <a href={submenu.second_level_menu_url} className="mega-menu">
                        <span>{submenu.second_level_menu_name}</span>
                        <p>{submenu.second_level_description}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Right header menu */}
      <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
        {headerMenuRight.map((menu, index) => (
          <li key={index} className="nav-item dropdown dropdown-mega position-static">
            <a className="nav-link" href={menu.top_level_menu_url}>
              {menu.top_level_menu_name}
            </a>
            {menu.second_level_menu && menu.second_level_menu.length > 0 && (
              <>
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                ></span>
                <div className="dropdown-menu shadow">
                  {menu.second_level_menu.map((submenu, subIndex) => (
                    <div key={subIndex} className="col-lg-4 col-sm-6">
                      <a href={submenu.second_level_menu_url} className="mega-menu">
                        <span>{submenu.second_level_menu_name}</span>
                        <p>{submenu.second_level_description}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
