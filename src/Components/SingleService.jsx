import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleService() {
  const { postSlug } = useParams();
  const [serviceData, setServiceData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data for the single service page using the postSlug
    fetch(`https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/service?slug=${postSlug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 1) {
          // Assuming the API returns an array with one item, extract the single service
          setServiceData(data[0]);
          setLoading(false);
        } else {
          throw new Error('Service not found');
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [postSlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Render your single service page content here */}
      <h1>{serviceData.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: serviceData.content.rendered }} />
    </div>
  );
}

export default SingleService;
