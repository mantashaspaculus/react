import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutAchievement() {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        async function fetchAchievements() {
            try {
                const response = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard');
                console.log('API Response:', response.data); // Log the response data

                if (response.data && response.data.acf && response.data.acf.our_achievement_content) {
                    setAchievements(response.data.acf.our_achievement_content);
                } else {
                    throw new Error('Achievements data not found in the API response.');
                }

            } catch (error) {
               
            }
        }

        fetchAchievements();
    }, []);


    return (
        <section className="promise-wrapper patterns-wrapper bg-theme1 text-white text-center py-90">
            <div className="container z1">
                <div className="heading">
                    <h2>Our Achievements</h2>
                </div>
                <div className="row g-4 g-xl-5">
                    {achievements.map((achievement, index) => (
                        <div className="col-lg-3 col-6" key={index}>
                            <div className="promise-block">
                                <div className="ratio ratio-1x1 rounded-circle">
                                    <div>
                                        <img className="lazy" src={achievement.achievement_icon} alt="icon" />
                                    </div>
                                </div>
                                <div className="number">
                                    <span className="count">{achievement.achievement_no}</span>+
                                </div>
                                <p>{achievement.achievement_heading}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutAchievement;
