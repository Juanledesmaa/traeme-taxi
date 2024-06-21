import React from "react"
import logo from "../../img/traeme_taxi_text.png";
import './Footer.scss';

const Footer = () => (
    <footer className="footer page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top"
              style={{ height: '30px', marginRight: '10px' }} // Adjust height and margin as needed
            />
        </div>

    </footer>
);

export default Footer