import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function SinglePost() {
  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [acfData, setAcfData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard')
      .then((acfResponse) => {
        setAcfData(acfResponse.data);

        axios
          .get(`https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/posts?slug=${postSlug}`)
          .then((postResponse) => {
            if (postResponse.data.length === 0) {
              setError('Post not found');
              return;
            }
            setPost(postResponse.data[0]);
          })
          .catch((error) => {
            console.error('Error fetching single post:', error);
            setError('Error fetching single post. Please try again later.');
          });
      })
      .catch((error) => {
        console.error('Error fetching ACF data:', error);
        setError('Error fetching ACF data. Please try again later.');
      });
  }, [postSlug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post || !acfData) {
    return <p>Loading...</p>;
  }

  // Check if 'wp:featuredmedia' is available and has valid image data
  const featuredMedia = post._embedded && post._embedded['wp:featuredmedia'];
  const imageSrc = featuredMedia && featuredMedia[0] && featuredMedia[0].source_url;
  return (
    <div>
      <Header />
      <section
        className="bannerInner-wrapper smallBanner-wrapper text-white text-center"
        style={{ backgroundImage: `url('${acfData.acf.banner_image}')` }}
      >
        <div className="h-100 z1">
          <div className="h-100 m-0">
            <div>
              <div className="container">
                <div className="bannerInner-content">
                  <h1>{post.title.rendered}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicesAbout-wrapper vectorLeft-wrapper">
        <div className="container z1">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-6 col-md-7 text-lg-start">
              <div>
                <div className="heading">
                  <h2>{post.title.rendered}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 text-lg-end">
              <div>
                <div className="complex-img">
                  { imageSrc && (
                    <img
                      className="lazy"
                      src={featuredMedia}
                      alt={post.title.rendered}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SinglePost;
