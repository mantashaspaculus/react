 import React from 'react';

 const Footer = () => {
   return (
 
 
 <footer class="bg-darkBlue text-white">
    <div class="container z1">
      <div class="row g-4 g-xl-5">
        <div class="col-lg-auto">
          <div class="footer-form">
            <h4>Get in touch</h4>
            <form action="#">
              <div class="form-group"><label for="name">Name</label><input type="text" id="name" class="form-control"/>
              </div>
              <div class="form-group"><label for="email">Email</label><input type="Email" id="email"
                  class="form-control"/></div>
              <div class="form-group"><label for="msg">Message</label><textarea id="msg" class="form-control"
                  rows="4"></textarea></div>
              <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                  id="flexCheckDefault"/><label class="form-check-label" for="flexCheckDefault">Send me a copy of
                  NDA</label></div><a href="#" class="btn btn-theme"><span>Submit</span></a>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="footer-links">
            <div class="row g-4 g-xl-5 justify-content-between">
              <div class="col-auto">
                <h5>Services</h5>
                <ul class="list-unstyled">
                  <li><a href="#" title="Product Engineering">Product Engineering</a></li>
                  <li><a href="#" title="Enterprise App Developement">Enterprise App Developement</a></li>
                  <li><a href="#" title="Web App Developement">Web App Developement</a></li>
                  <li><a href="#" title="Application Modernization">Application Modernization</a></li>
                  <li><a href="#" title="Enterprise CMS">Enterprise CMS</a></li>
                  <li><a href="#" title="Modern UX Design">Modern UX Design</a></li>
                  <li><a href="#" title="Digital QA &amp; Testing">Digital QA &amp; Testing</a></li>
                  <li><a href="#" title="Cloud &amp; DevOps">Cloud &amp; DevOps</a></li>
                </ul>
              </div>
              <div class="col-auto">
                <h5>Company</h5>
                <ul class="list-unstyled">
                  <li><a href="#" title="About">About</a></li>
                  <li><a href="#" title="Testimonials">Testimonials</a></li>
                  <li><a href="#" title="Careers">Careers</a></li>
                  <li><a href="#" title="Contact Us">Contact Us</a></li>
                  <li><a href="#" title="Blog">Blog</a></li>
                  <li><a href="#" title="Site Map">Site Map</a></li>
                </ul>
              </div>
              <div class="col-auto">
                <h5>Support</h5>
                <ul class="list-unstyled">
                  <li><a href="#" title="Help Center">Help Center</a></li>
                  <li><a href="#" title="Terms of service">Terms of service</a></li>
                  <li><a href="#" title="Legal">Legal</a></li>
                  <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                </ul>
              </div>
              <div class="col-auto col-xl-6 footer-phone">
                <h5>Phone</h5>
                <ul class="list-unstyled">
                  <li><i class="fa-solid fa-phone"></i><a href="tel:+917405407700">+91-740-540-7700</a></li>
                  <li><i class="fa-solid fa-phone"></i><a href="tel:+919979469360">+91-997-946-9360</a></li>
                  <li><i class="fa-solid fa-phone"></i><a href="tel:+919284874440">+1-928-487-4440 (US &amp; Canada)</a>
                  </li>
                </ul>
              </div>
              <div class="col-auto col-xl-6 footer-mail">
                <h5>Email</h5>
                <ul class="list-unstyled">
                  <li><i class="fa-solid fa-envelope"></i><a href="mailto:info@spaculus.org">info@spaculus.org</a></li>
                  <li><i class="fa-solid fa-envelope"></i>HR (Email):<a
                      href="mailto:hr@spaculus.org">hr@spaculus.org</a></li>
                </ul>
              </div>
              <div class="col-12 text-end">
                <div class="footer-social">
                  <p>Connect with us:</p>
                  <ul class="social-link">
                    <li><a href="https://www.facebook.com/Spaculus" aria-label="Spaculus facebook page" target="_blank"
                        rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/Spaculus" target="_blank" aria-label="Spaculus twitter page"
                        rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/spaculus" target="_blank"
                        aria-label="Spaculus linkedin page" rel="noopener noreferrer"><i
                          class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/spaculussoftware/" target="_blank"
                        aria-label="Spaculus instagram page" rel="noopener noreferrer"><i
                          class="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  );
};

export default Footer;