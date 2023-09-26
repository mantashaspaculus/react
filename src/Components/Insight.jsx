import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Insight() {
  const [acfData, setAcfData] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const acfResponse = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/109?_fields=acf&acf_format=standard');
        setAcfData(acfResponse.data);

        const blogResponse = await axios.get('https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/posts?_embed&per_page=8');
        setBlogPosts(blogResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!acfData || !acfData.acf || !acfData.acf.banner_image) {
    return <p>Error loading content.</p>;
  }

  return (
    <>
      <Header />
      <section
        className="bannerInner-wrapper smallBanner-wrapper text-white text-center"
        style={{ backgroundImage: `url('${acfData.acf.banner_image}')` }}
      >
        <div className="h-100 z1">
          <div className="flex-center h-100">
            <h1> Insight </h1>
          </div>
        </div>
      </section>
      <section className="blog-wrapper bg-theme1 text-white py-100">
        <div className="container z1">
          <div className="row gx-0">
            {blogPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <div className="blog-block img-hover">
                  <div className="ratio cover">
                    {post._embedded['wp:featuredmedia'] && (
                      <img
                        className="lazy"
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt="Blog"
                      />
                    )}
                    <div className="tag">{post._embedded['wp:term'][0][0].name}</div>
                  </div>
                  <div>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <h3>{post.title.rendered}</h3>
                    <Link
                      to={`/post/${post.slug}`} // Use post.slug to create the link
                      className="btn-icon"
                    >
                      <span className="circle">
                        <i className="icon-arrow"></i>
                      </span>
                      <span className="button-text">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Insight;
