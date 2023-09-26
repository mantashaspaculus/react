import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutBenefits() {
    const [vibeContent, setVibeContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVibeContent() {
            try {
                const response = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard');
                console.log('API Response:', response.data); // Log the response data

                if (response.data && response.data.acf && response.data.acf.how_we_vibe_content) {
                    setVibeContent(response.data.acf.how_we_vibe_content);
                } else {
                    throw new Error('Vibe content not found in the API response.');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching vibe content:', error);
                setLoading(false);
            }
        }

        fetchVibeContent();
    }, []);



    return (
        <section className="benefits-wrapper py-80 overflow-hidden bg-light-grey">
            <img src="images/vector-n1.svg" alt="image" className="img-fluid vector-right position-absolute" />
            <div className="container z1">
                <div className="heading text-center">
                    <h2>How We Vibe</h2>
                </div>
                <div className="row align-items-center">
                    {vibeContent.map((vibe, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <div className="benefits-box text-center">
                                <div className="img-box">
                                    <div className="img-inner">
                                        <img className="lazy img-fluid" src={vibe.vibes_icon} alt="image" />
                                    </div>
                                </div>
                                <h3>{vibe.vibe_content}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutBenefits;
