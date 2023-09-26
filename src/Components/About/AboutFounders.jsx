import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutFounders() {
    const [foundersData, setFoundersData] = useState([]);

    useEffect(() => {
         function fetchFoundersData() {
            try {
                const response =  axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard');
                console.log('API Response:', response.data); // Log the response data

                if (response.data && response.data.acf && response.data.acf.our_founders_content) {
                    setFoundersData(response.data.acf.our_founders_content);
                } else {
                    throw new Error('Founders content not found in the API response.');
                }

            } catch (error) {
                console.error('Error fetching founders content:', error);
            }
        }

        fetchFoundersData();
    }, []);

 
    return (
        <section className="founders-wrapper bg-theme1 text-white patterns-wrapper text-center py-90">
            <div className="container z1">
                <div className="heading">
                    <h2>Our Founders</h2>
                </div>
                <div className="row g-4 g-xl-5">
                    {foundersData.map((founder, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="founders-block" >
                                <div className="ratio cover"><img className="lazy" src={founder.founder_image} alt="icon" /></div>
                                <h3>{founder.founder_name}</h3>
                                <p>{founder.founder_role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutFounders;
