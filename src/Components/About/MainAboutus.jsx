import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainAboutUs() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    async function fetchAcfData() {
      try {
        const response = await axios.get(
          'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard'
        );
        console.log('API Response:', response.data); // Log the response data
        setAcfData(response.data);
      } catch (error) {

      }
    }

    fetchAcfData();
  }, []);

 

  if (!acfData || !acfData.acf || !acfData.acf.about_us_heading || !acfData.acf.about_us_content) {
    return <p>Error loading content.</p>;
  }

  return (
    <section className="aboutUs-wrapper vectorLeft-wrapper">
      <div className="container z1">
        <div className="row g-4 g-xl-5">
          <div className="col-lg-6 text-lg-start">
            <strong>{acfData.acf.about_us_heading}</strong>
            <p>{acfData.acf.about_us_content}</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="aboutUs-img">
              <div className="img-obj cover img-hover">
                <img
                  className="lazy"
                  src={acfData.acf.about_us_image_1}
                  alt="imagespaculus"
                />
              </div>
              <div className="img-obj cover img-hover">
                <img
                  className="lazy"
                  src={acfData.acf.about_us_image_2}
                  alt="imagespaculus"
                />
              </div>
              <div className="img-obj cover img-hover">
                <img
                  className="lazy"
                  src={acfData.acf.about_us_image_3}
                  alt="imagespaculus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainAboutUs;
