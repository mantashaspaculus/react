import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

function WordPressPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiEndpoint = 'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/service';

    axios.get(apiEndpoint)
      .then((response) => {
        const fetchedPosts = response.data;

        Promise.all(
          fetchedPosts.map(async (post) => {
            // Fetch featured image data
            const featuredImageId = post.featured_media;
            const imageResponse = await axios.get(`https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/media/${featuredImageId}`);

            // Extract relevant data from the image response
            const featuredImage = imageResponse.data;
            const imageUrl = featuredImage.source_url;

            return {
              id: post.id,
              title: post.title.rendered,
              content: post.content.rendered,
              imageUrl,
              permalink: post.link,
            };
          })
        ).then((updatedPosts) => {
          setPosts(updatedPosts);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  // Function to truncate content to the first 50 words
  function truncateContent(content) {
    const words = content.split(' ');
    if (words.length <= 15) {
      return content;
    }
    return words.slice(0, 15).join(' ') + '...';
  }

  // Slider settings
  const bannerSettings = {
    adaptiveHeight: true,
    className: 'services-slider text-white text-center slider', // Added quotes around class names
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    speed: 500
  };

  return (
    <section className="services-wrapper py-80 pb-0">
      <div className="container-fluid z1">
        <div className="heading text-center" data-aos="fade-up">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="container-fluid p-0 z1">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...bannerSettings}>
            {posts.map((post) => (
              <div className="services-overlaybox position-relative" key={post.id}>
                {post.imageUrl && (
                  <img
                    className="lazy"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                )}
                
                <h3 className="front-view-title text-white" dangerouslySetInnerHTML={{ __html: post.title }} ></h3>
                <div className="overlay text-center text-white">
                <h3 className=" text-white" dangerouslySetInnerHTML={{ __html: post.title }} ></h3>

                  <p dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                  <a href={post.permalink} className="btn btn-whiteBr">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default WordPressPosts;
