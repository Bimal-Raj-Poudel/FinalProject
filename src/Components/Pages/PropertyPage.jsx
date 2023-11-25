import { Link } from "react-router-dom";

const PropertyPage = () => {
    const propertyDetails = [
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },
        {
            propertyTItle: "204 Mount Olive Road Two",
            rentPrice: 12000,
            link: "",
            roomDetails: {
                area: 340,
                beds: 2,
                baths: 3,
                garages: 1
            }
        },

    ]
    return (
        <>
            <main id="main">
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Our Amazing Properties</h1>
                                    <span className="color-text-a">Grid Properties</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Properties Grid
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="property-grid grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="grid-option">
                                    <form>
                                        <select className="custom-select">
                                            <option selected>All</option>
                                            <option value="1">New to Old</option>
                                            <option value="2">For Rent</option>
                                            <option value="3">For Sale</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            {propertyDetails.map((data, index) => (

                                <div className="col-md-4" key={index + 1}>
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src="assets/img/property-1.jpg" alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="#">{data.propertyTItle}</a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ {data.rentPrice}</span>
                                                    </div>
                                                    <Link to="/propertySingle">
                                                    <p className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </p>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>{data.roomDetails.area}m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>{data.roomDetails.beds}</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>{data.roomDetails.baths}</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>{data.roomDetails.garages}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <nav className="pagination-a">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabindex="-1">
                                                <span className="bi bi-chevron-left"></span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item next">
                                            <a className="page-link" href="#">
                                                <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default PropertyPage;
