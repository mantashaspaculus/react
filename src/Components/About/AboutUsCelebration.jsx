import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUsCelebration() {
    const [shortcodeContent, setShortcodeContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchShortcodeContent() {
            try {
                const response = await axios.get(
                    'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109'
                );

                if (response.data && response.data.content) {
                    setShortcodeContent(response.data.content);
                } else {
                    throw new Error('Shortcode content not found in the API response.');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching shortcode content:', error);
                setShortcodeContent('Error: Shortcode content could not be loaded.');
                setLoading(false);
            }
        }

        fetchShortcodeContent();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="aboutUsCelebration-wrapper vectorLeft-wrapper">
            <div className="container z1">
                <div className="heading text-center" data-aos="fade">
                    <h2>Our Celebrations</h2>
                </div>
                <div className="aboutUsCelebration-block">
                    <div className="row g-3">
                        {/* Render the shortcode content */}
                        <div dangerouslySetInnerHTML={{ __html: shortcodeContent }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsCelebration;
