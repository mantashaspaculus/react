import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS

function AboutKeytab() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    async function fetchAcfData() {
      try {
        const response = await axios.get(
          'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard'
        );
        console.log('API Response:', response.data);
        setAcfData(response.data);
      } catch (error) {
        console.error('Error fetching ACF data:', error);
      }
    }

    fetchAcfData();
  }, []);


  if (!acfData || !acfData.acf || !acfData.acf.what_we_believe_in_content || !acfData.acf.what_we_believe_in_heading) {
    return <p>Error loading content.</p>;
  }

  // Configuration settings for the slider
  const sliderSettings = {
    adaptiveHeight: true,
    className: 'process-slider slide',
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="keyIndustry-wrapper aboutUskeyIndustry-wrapper vectorRight-wrapper bg-lightTheme py-90 pb-0">
      <div className="container-fluid z1">
        <div className="heading text-center">
          <h2>{acfData.acf.what_we_believe_in_heading}</h2>
        </div>
      </div>
      <div className="container-fluid p-0 z1">
        <div className="keyIndustry-tab process-tab">
          <div className="row g-0">
            <div className="col-md-auto">
              <ul className="nav nav-tabs flex-md-column">
                {acfData.acf.what_we_believe_in_content.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-bs-toggle="tab" href={`#proTab${index}`}>
                      <i className="fa-solid fa-angles-right"></i>{item.believe_in_heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-auto col-custom">
              <div className="tab-content py-60 pt-0">
                {acfData.acf.what_we_believe_in_content.map((item, index) => (
                  <div id={`proTab${index}`} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} key={index}>
                    {/* Use the Slider component here */}
                    <Slider {...sliderSettings}>
                      {item.believe_in_inner_content.map((innerItem, innerIndex) => (
                        <div key={innerIndex}>
                          <div className="row g-4 g-xxl-5">
                            <div className="col-lg-6">
                              <div className="pe-xxl-4">
                                <img className="lazy" src={innerItem.image} alt="spaculusimage" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="process-content">
                                <h3>{innerItem.heading}</h3>
                                <p>{innerItem.content}</p>
                                <a href={innerItem.free_quote_link} className="btn-icon">
                                  <span className="circle" aria-hidden="true">
                                    <span className="icon-arrow"></span>
                                  </span>
                                  <span className="button-text">Get a Free Quote</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutKeytab;
