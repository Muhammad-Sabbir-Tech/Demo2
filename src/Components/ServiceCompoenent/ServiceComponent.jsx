import React from 'react';
import serviceImage from '../../Asset/images/icons/app.svg'

function ServiceComponent(props) {
    return (
        <>
            <section className="bhv-service bg-gradient3 pad-tb deep-dark">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading">
                                <span>Service</span>
                                <h2 className="mb30">Specializing In</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row upset link-hover shape-num justify-content-center">
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc  wow fadeIn" data-wow-delay=".2s">
                            <div className="s-block" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                                <div className="s-card-icon"><img src={serviceImage} alt="service" className="img-fluid" /></div>
                                <h4>Logo &amp; Branding Service</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="#">Learn More <i className="fas fa-chevron-right fa-icon" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc  wow fadeIn" data-wow-delay=".5s">
                            <div className="s-block" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                                <div className="s-card-icon"><img src={serviceImage} alt="service" className="img-fluid" /></div>
                                <h4>Website Design &amp; Development</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="#">Learn More <i className="fas fa-chevron-right fa-icon" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc  wow fadeIn" data-wow-delay=".8s">
                            <div className="s-block" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                                <div className="s-card-icon"><img src={serviceImage} alt="service" className="img-fluid" /></div>
                                <h4>Mobile App Development</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="#">Learn More <i className="fas fa-chevron-right fa-icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="-cta-btn mt70">
                        <div className="free-cta-title v-center  wow zoomInDown" data-wow-delay="1.1s">
                            <p>Let's Start A  <span>New Project Together</span></p>
                            <a href="#" className="btn-main bg-btn2 lnk">Get A Quote <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceComponent;