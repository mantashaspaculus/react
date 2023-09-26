import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [complexData, setComplexData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch testimonial data
        const testimonialResponse = await axios.get(
          'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/5?_fields=acf&acf_format=standard'
        );
        setTestimonials(testimonialResponse.data.acf);

        // Fetch complex data (replace with your actual complex data API endpoint)
        const complexResponse = await axios.get(
          'https://wp.spaculus.info/2/spaculusorg2023/wp-json/wp/v2/pages/5?_fields=acf&acf_format=standard'    
              );
        setComplexData(complexResponse.data.acf);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const clientsLogoSettings = {
    adaptiveHeight: true,
    className: 'clients-slider slider',
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <section className="clients-wrapper patterns-wrapper bg-theme1 py-80">
        {/* Testimonial section */}
        <div className="container z1">
          <div className="heading text-center text-white">
            <h2>What our clients have to say</h2>
            <a href="/" className="btn-icon btn-iconWhite">
              <span className="circle">
                <i className="icon-arrow"></i>
              </span>
              <span className="button-text">VIEW ALL</span>
            </a>
          </div>
          <Slider {...clientsLogoSettings}>
            {testimonials.what_our_clients_have_to_say_content.map((testimonial, index) => (
              <div key={index}>
                {testimonial.clients_have_to_say_content ? (
                  <div className="bg-white clients-text">
                    <p>{testimonial.clients_have_to_say_content}</p>
                    <div className="d-flex align-items-center">
                      <div className="ratio ratio-1x1 cover rounded-circle">
                        <div>
                          <img
                            className="lazy"
                            src={testimonial.key_industry_images}
                            alt="Client"
                          />
                        </div>
                      </div>
                      <div>
                        <strong>{testimonial.clients_have_to_say_name}</strong>
                        <span>{testimonial.clients_have_to_say_role}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white clients-video">
                    <div className="ratio cover clients-img">
                      <img
                        className="lazy"
                        src={testimonial.clients_have_to_say_url_preview}
                        alt="video Img"
                        data-bs-toggle="modal"
                        data-bs-target="#clientModal"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="ratio ratio-1x1 cover rounded-circle">
                        <div>
                          <img
                            className="lazy"
                            src={testimonial.key_industry_images}
                            alt="Client"
                          />
                        </div>
                      </div>
                      <div>
                        <strong>{testimonial.clients_have_to_say_name}</strong>
                        <span>{testimonial.clients_have_to_say_role}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Complex section */}
      <section className="complex-wrapper py-100 text-center img-hover">
        <div className="container z1">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-6 text-lg-start">
              <div>
                <div className="heading">
                  <h2>{complexData.complex_questions_heading}</h2>
                </div>
                <p>{complexData.complex_questions_content}</p>
                <a href={complexData.complex_questions_button_link} className="btn btn-blue">
                  <span>
                    <i className="fa-solid fa-phone"></i>Contact Us Today </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div>
                <div className="complex-img">
                  <img className="lazy" src={complexData.complex_questions_image} alt="compleximage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
