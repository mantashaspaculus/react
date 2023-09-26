import React, { useState, useEffect } from 'react';

function Header() {
  const [acfValue, setAcfValue] = useState(null);
  const [headerMenuLeft, setHeaderMenuLeft] = useState([]);
  const [headerMenuRight, setHeaderMenuRight] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://wp.spaculus.info/2/spaculusorg2023/wp-json/acf/v2/options/';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const acfFieldValue = data.acf.header_logo;

        setAcfValue(acfFieldValue);
      })
      .catch((error) => {
        console.error('Error fetching ACF data:', error);
      });
  }, []); 
  useEffect(() => {
    const apiUrl = 'https://wp.spaculus.info/2/spaculusorg2023/wp-json/acf/v2/options/';

    const fetchHeaderMenuData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

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

    fetchHeaderMenuData()
      .then((menuData) => {
        setHeaderMenuLeft(menuData.left);
        setHeaderMenuRight(menuData.right);
      })
      .catch((error) => {
        console.error('Error fetching header menu data:', error);
      });
  }, []); 

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container flex-wrap">
          <div className="navbar-logo">
            <a href="/" aria-label="go to home page" target="_self" rel="noopener noreferrer">
              {acfValue ? (
                <img src={acfValue} alt="spimage" className="img-responsive" />
              ) : (
                <p>Loading logo...</p>
              )}
            </a>
          </div>
          <div class="header-top ms-auto">
            <div class="search-button">
               
            </div>
            
            <div>

            </div>
            <div class="dropdown">

            </div>

            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <div class="header-menu collapse navbar-collapse w-100" id="navbarSupportedContent">
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
                  <div className="container">
                    <div className="mega-menuPadding pe-0">
                      <div className="row g-xl-5 g-3">
                        {menu.second_level_menu.map((submenu, subIndex) => (
                          <div key={subIndex} className="col-lg-12">
                            {submenu.second_level_header_menu && (
                              <div className="mega-menuHeader">
                                <h6>{submenu.second_level_header_menu}</h6>
                              </div>
                            )}
                            <div className="row g-xl-4 g-2 auto">
                              {submenu.second_level_header && submenu.second_level_header.map((subsubmenu, subsubIndex) => (
                                <div key={subsubIndex} className="col-lg-4 col-sm-6">
                                  <a href={subsubmenu.second_level_menu_url} className="mega-menu">
                                    <span>{subsubmenu.second_level_menu_name}</span>
                                    <p>{subsubmenu.second_level_description}</p>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

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
                  <div className="container">
                    <div className="mega-menuPadding pe-0">
                      <div className="row g-xl-5 g-3">
                        {menu.second_level_menu.map((submenu, subIndex) => (
                          <div key={subIndex} className="col-lg-8">
                            {submenu.second_level_header_menu && (
                              <div className="mega-menuHeader">
                                <h6>{submenu.second_level_header_menu}</h6>
                              </div>
                            )}
                            <div className="row g-xl-4 g-md-2 g-1">
                              {submenu.second_level_header && submenu.second_level_header.map((subsubmenu, subsubIndex) => (
                                <div key={subsubIndex} className="col-lg-4 col-sm-6">
                                  <a href={subsubmenu.second_level_menu_url} className="mega-menu">
                                    <span>{subsubmenu.second_level_menu_name}</span>
                                    <p>{subsubmenu.second_level_description}</p>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
         <div>
            <a href="/Contact" className="btn btn-theme">
              <span>Contact Us</span>
            </a>
          </div>
          </div>
          </div> 

      </nav>
    </header>
  );
}

export default Header;
