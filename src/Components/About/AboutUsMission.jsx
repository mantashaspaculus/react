import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUsMission() {
    const [acfData, setAcfData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAcfData() {
            try {
                const response = await axios.get(
                    'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard'
                );
                console.log('API Response:', response.data); 
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

    if (!acfData || !acfData.acf || !acfData.acf.our_mission_heading) {
        return <p>Error loading content.</p>;
    }

    return (
        <section className="aboutUsMission-wrapper patterns-wrapper bg-theme1 text-white text-center">
            <div className="container z1">
                <div className="heading text-center">
                    <h2>{acfData.acf.our_mission_heading}</h2>
                </div>
                <div className="row align-items-center g-4 g-xl-5">
                    <div className="col-lg-6 text-lg-start">
                        <div className="pe-xxl-4" >
                            <h3>{acfData.acf.our_mission_strong_content}</h3>
                            <p>{acfData.acf.our_mission_content}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                            <div className="complex-img">
                                <img className="lazy" src={acfData.acf.our_mission_image} alt="spaculusimage" />
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsMission;
