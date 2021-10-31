import React from 'react';

import BannerImage from '../../Asset/images/hero/freelancer-mobile.png'

function HomeBanner(props) {
    return (
        <>
            <section className="hero-section fl-hero">
                <div className="text-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 v-center">
                                <div className="header-heading">
                                    <span className="title- wow fadeInUp" data-wow-delay=".1s">Hi there, I am Deo Jones</span>
                                    <h1 className="wow fadeInUp" data-wow-delay=".2s"><span>Freelance</span> Web Designer</h1>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.</p>
                                    <a href="#" className="btn-main bg-btn lnk wow fadeInUp" data-wow-delay=".6s">Hire Me <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".4s">
                                <div className="single-image">
                                    <img src={BannerImage} alt="service" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBanner;