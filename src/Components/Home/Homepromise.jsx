import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePromise() {
  const [acfData, setAcfData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAcfData() {
      try {
        const response = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/5?_fields=acf&acf_format=standard');
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

  if (!acfData || !acfData.our_promise_content || !acfData.clients_heading) {
    return <p>Error loading content.</p>;
  }
  

  return (
    <section className="promise-wrapper patterns-wrapper bg-theme1 text-white text-center py-90">
      <div className="container z1">
        <div className="heading">
          <h2>{acfData.clients_heading}</h2>
        </div>
        <div className="row g-4 g-xl-5">
          {acfData.our_promise_content.map((item, index) => (
            <div className="col-lg-3 col-6" key={index}>
              <div className="promise-block">
                <div className="ratio ratio-1x1 rounded-circle">
                  <div>
                    <img className="lazy" src={item.icon} alt="icon" />
                  </div>
                </div>
                <div className="number">
                  <span className="count">{item.no}</span>+
                </div>
                <p>{item.heading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}

export default HomePromise;
