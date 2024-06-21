import React from "react"
import logo from "../../img/traeme_taxi_text.png";
import './Footer.scss';

const Footer = () => (
    <footer className="footer page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top"
              style={{ height: '30px'}} // Adjust height and margin as needed
            />
        </div>

    </footer>
);

export default Footer