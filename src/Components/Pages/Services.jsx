const Services = () => {
   return(
    <>
     <div id="main">
         <section className="section-services section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-cart"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Property Listings</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c text-dark fw-semibold">
                List your properties hassle-free. 
                Our platform allows property owners to showcase their rentals 
                with detailed descriptions, high-quality images, and essential 
                information, attracting potential tenants.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                <span className="bi bi-search"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Advance Search</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c text-dark fw-semibold">
                Tenants can explore a wide range of available rentals using our advanced search filters. 
                Find the perfect home or commercial space based on your preferences and location.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-card-checklist"></span>

                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Bridiging Communication</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c text-dark fw-semibold">
                The primary role is to streamline and facilitate the rental process, ensuring 
                smooth communication and efficient management of properties.Bridges the gap 
                between owner and tenant.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
   )
}

export default Services