import React from "react";
import { Parallax } from 'react-parallax';

//include images into your bundle
import './Introduction.scss';
import background from "../../img/friday_night_background.png";

//create your first component
const Introduction = () => (
    <div className="introduction">
        <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
            <section className="d-flex align-items-center mb-0 position-relative">
                <div class="responsive-container-block bigContainer">
                    <div class="responsive-container-block Container bottomContainer">
                        <div class="allText bottomText">
                            <div className='col-md-12 section-title'>
                                <h2><span className="first-word">¿Quiénes</span> <span className="last-word">somos?</span></h2>
                            </div>
                            <h4 class="text-blk description">
                                En traemeTaxi, entendemos que necesitas más que solo un taxi. Necesitas un transporte confiable que hable tu idioma y al que puedas confiar para tu trabajo y más. Estamos aquí para llenar ese vacío que a menudo las grandes compañías descuidan. Ofrecemos seguridad, calidad, confianza y velocidad, todo a precios accesibles. Nuestros servicios incluyen una amplia gama de opciones, desde traslados locales y entregas hasta viajes entre estados y servicios por hora.
                            </h4>
                        </div>
                        <div class="videoContainer">
                            <iframe
                                title="Video-traeme-taxi"
                                allowfullscreen="allowfullscreen"
                                class="mainVideo"
                                controls="controls"
                                src="https://www.youtube.com/embed/SvCPfQkg8Ys"
                            ></iframe>

                            <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="alternative"></img>
                        </div>
                    </div>
                </div>
            </section>

        </Parallax>

    </div>
);

export default Introduction;
