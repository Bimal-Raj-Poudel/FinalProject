import React from 'react';

const Footer = () => {
  return (
    <>
     <section className="section-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand text-success ">GharBhada </h3>
            </div>
            <div className="w-body-a">
              <p className="w-text-a color-text-a text-success">
                Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                sed aute irure.
              </p>
            </div>
            <div className="w-footer-a">
              <ul className="list-unstyled">
                <li className="color-a">
                  <span className="color-text-a">Phone .</span> contact@example.com
                </li>
                <li className="color-a">
                  <span className="color-text-a">Email .</span> +977 9865474624
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand text-success">The Company</h3>
            </div>
            <div className="w-body-a">
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Site Map</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Legal</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Agent Admin</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Careers</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Affiliate</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3 text-success">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand text-success">International sites</h3>
            </div>
            <div className="w-body-a">
              <ul className="list-unstyled ">
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Venezuela</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right "></i> <a href="#" className='text-success text-decoration-none'>China</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Hong Kong</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Argentina</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Singapore</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#" className='text-success text-decoration-none'>Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav className="nav-footer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About Us</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Property</a>
              </li>
             
              <li className="list-inline-item">
                <a href="#">Contact Us </a>
              </li>
            </ul>
          </nav>
          <div className="socials-a">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-footer">
            <p className="copyright color-text-a">
              &copy; Copyright
              <span className="color-a"> GharBhada</span> All Rights Reserved.
            </p>
          </div>
          <div className="credits">
            
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}

export default Footer;
