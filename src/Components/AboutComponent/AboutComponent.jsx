import React from 'react';

function AboutComponent(props) {
    return (
        <>
            <section className="about-freelance pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <span>Creative Web Designer</span>
                                <h2 className="mb20">Deo Jones</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. </p>
                                <div className="follow-label mt30"><h6>Follow Me</h6>
                                    <a href="#" target="blank" className="wow bounceIn" data-wow-delay=".2s"><i className="fab fa-facebook" /></a>
                                    <a href="#" target="blank" className="wow bounceIn" data-wow-delay=".4s"><i className="fab fa-instagram" /></a>
                                    <a href="#" target="blank" className="wow bounceIn" data-wow-delay=".6s"><i className="fab fa-dribbble" /></a>
                                    <a href="#" target="blank" className="wow bounceIn" data-wow-delay=".8s"><i className="fab fa-behance" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-facts">
                                <div className="counter-no mb20 wow bounceIn" data-wow-delay=".2s">
                                    <div className="hexagon hexa1" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                                        <div className="counter-number">
                                            <span className="counter">450</span><span>+</span>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter-no mb20  wow bounceIn" data-wow-delay=".4s">
                                    <div className="hexagon hexa2" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                                        <div className="counter-number">
                                            <span className="counter">380</span><span>+</span>
                                            <p>Projects Complete</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter-no mt20  wow bounceIn" data-wow-delay=".6s">
                                    <div className="hexagon hexa3" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                                        <div className="counter-number">
                                            <span className="counter">2200</span>
                                            <p>Sales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter-no mt20  wow bounceIn" data-wow-delay=".8s">
                                    <div className="hexagon hexa4" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                                        <div className="counter-number">
                                            <span className="counter">10</span><span>y</span>
                                            <p>Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutComponent;