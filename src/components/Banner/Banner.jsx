import React from "react";

//include images into your bundle
import bannerSolid from "../../img/traeme-taxi-solid.png";
import './banner.scss';

//create your first component
const Banner = () => (
    <div className="banner">
        <section className="d-flex align-items-center mb-0 position-relative">
            <img src={bannerSolid} alt="" className="bg-banner"></img>
        </section>
    </div>
);

export default Banner;
