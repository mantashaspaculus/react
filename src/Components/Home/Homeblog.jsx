import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

function HomeBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiEndpoint = 'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/posts';

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



  // Slider settings
  const bannerSettings = {
    adaptiveHeight: true,
    className: 'blog-slider slider', // Added quotes around class names
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500
  };

  return (
    <section className="blog-wrapper bg-theme1 text-white py-100">
      <div className="container z1">
        <div className="heading">
          <h2>Blog</h2>
          <a href="/" className="btn-icon btn-whiteIcon" tabIndex="0">
            <span className="circle" aria-hidden="true"><span className="icon-arrow"></span></span>
            <span className="button-text">View all</span>
          </a>
        </div>
      </div>

      <div className="container-fluid z1 pe-0">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...bannerSettings}>
            {posts.map((post) => (
              <div className="row justify-content-end" key={post.id}>
                <div className="col-12 col-custom">
                  <div className="blog-block img-hover">
                    <div className="ratio cover">
                      {post.imageUrl && (
                        <img
                          className="lazy"
                          src={post.imageUrl}
                          alt={post.title}
                        />
                      )}
                      <div className="tag">Cloud Computing</div>
                    </div>
                    <div>
                      <span className="date">2 Dec 2022</span>
                      <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
                      <a href="/" className="btn-icon btn-whiteIcon" tabIndex="0">
                        <span className="circle" aria-hidden="true"><span className="icon-arrow"></span></span>
                        <span className="button-text">View all</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default HomeBlog;
