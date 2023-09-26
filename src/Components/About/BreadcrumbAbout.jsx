import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BreadcrumbAbout() {
  const [acfData, setAcfData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAcfData() {
      try {
        const response = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard');
        setAcfData(response.data);
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

  if (!acfData || !acfData.acf || !acfData.acf.banner_image) {
    return <p>Error loading content.</p>;
  }

  return (
    <section
      className="bannerInner-wrapper smallBanner-wrapper text-white text-center"
      style={{ backgroundImage: `url('${acfData.acf.banner_image}')` }}
    >
      <div className="h-100 z1">
        <div className="flex-center h-100">
          <h1> About Us
</h1>
        </div>
      </div>
    </section>
  );
}

export default BreadcrumbAbout;

