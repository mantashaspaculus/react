import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUsCon() {
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
  
   
  
    if (!acfData || !acfData.acf || !acfData.acf.are_you_ready_heading || !acfData.acf.are_you_ready_content || !acfData.acf.are_you_ready_image) {
      return <p>Error loading content.</p>;
    }
  

  return (
    <section className="aboutUsCon-wrapper patterns-wrapper bg-theme1 text-white text-center">
      <div className="container z1">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-6 text-lg-start pe-lg-0">
              <div className="heading">
                <h2>{acfData.acf.are_you_ready_heading}</h2> 
              </div>
              <a href={acfData.acf.are_you_ready_content} className="btn btn-theme"><span>Contact Us</span></a> 
              <p>{acfData.acf.today_to_discuss_content}</p> 
          </div>
          <div className="col-lg-6 text-lg-end">
              <div className="complex-img">
                <img className="lazy" src={acfData.acf.are_you_ready_image} alt="spaculusimage" /> 
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsCon;
