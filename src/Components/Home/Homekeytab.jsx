import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class KeyIndustrySolutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acfData: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchAcfData();
  }

  async fetchAcfData() {
    try {
      const response = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/5?_fields=acf&acf_format=standard');
      this.setState({
        acfData: response.data.acf,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching ACF data:', error);
      this.setState({
        error: 'Error loading content.',
        loading: false,
      });
    }
  }

  // Define bannerSettings as a class property
  bannerSettings = {
    className: 'keyIndustry-slider slider', // Added quotes around class names
    autoplay: true,
    speed: 800,
    infinite: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
   adaptiveHeight: true,
  
  };

  render() {
    const { acfData, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (!acfData) {
      return <p>Error loading content.</p>;
    }

    return (
      <section className="keyIndustry-wrapper py-90 pb-0">
        <div className="container-fluid z1">
          <div className="heading text-center">
            <h2>{acfData.key_industry_solutions_heading}</h2>
          </div>
        </div>
        <div className="container-fluid p-0 z1">
          <div className="keyIndustry-tab">
            <div className="row g-0">
              <div className="col-md-auto">
                <ul className="nav nav-tabs flex-md-column">
                  {acfData.key_industry_solutions_content.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-bs-toggle="tab" href={`#tab${index}`}>
                        <i className="fa-solid fa-angles-right"></i>{item.key_industry_heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-auto col-custom">
                <div className="tab-content py-90 pt-0">
                  {acfData.key_industry_solutions_content.map((item, index) => (
                    <div id={`tab${index}`} className={`tab-pane ${index === 0 ? 'active' : ''}`} key={index}>
                      <Slider {...this.bannerSettings}>
                        {item.key_industry_content.map((contentItem, contentIndex) => (
                          <div key={contentIndex}>
                            <img className="lazy" src={contentItem.image} alt="spaculusImage" />
                            {/* <button className="d-none">Hidden Button</button> */}
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
}

export default KeyIndustrySolutions;
