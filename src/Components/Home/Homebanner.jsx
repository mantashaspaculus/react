import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Homebanner() {
  const [acfData, setAcfData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAcfData() {
      try {
        const response = await axios.get(
          'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/5?_fields=acf&acf_format=standard'
        );
        setAcfData(response.data.acf);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ACF data:', error);
        setLoading(false);
      }
    }

    fetchAcfData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!acfData) {
    return <p>Error loading content.</p>;
  }

  const bannerSettings = {
    className: 'banner-slider slider h-100 m-0', // Added quotes around class names
    autoplay: true,
    speed: 800,
    infinite: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  const clientsLogoSettings = {
    adaptiveHeight: true,
    className: 'clientsLogo-slider slider', // Added quotes around class names
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="banner-wrapper text-white">
        <div className="banner-bg img-obj cover">
          <img
            className="d-none d-md-block"
            src={acfData.slider_background_image}
            alt="imagespaculus"
          />
          <img
            className="d-md-none"
            src={acfData.slider_background_image}
            alt="imagespaculus"
          />
        </div>
        <Slider {...bannerSettings}>
          {acfData.slider.map((slide, index) => (
            <div key={index} className="h-100 z1">
              <div className="container">
                <div className="banner-content">
                  <h1>{slide.slider_heading}</h1>
                  <p>{slide.slider_content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="clientsLogo-wrapper bg-blue text-white">
        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-3 col-md-4 text-center text-md-start">
              <h2>{acfData.clients_heading}</h2>
            </div>
            <div className="col-lg-9 col-md-8">
              <Slider {...clientsLogoSettings}>
                {acfData.client_logo.map((logo, index) => (
                  <div key={index}>
                    <img
                      src={logo.client_logo_images}
                      className="lazythebaa"
                      alt="Clients logo"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
