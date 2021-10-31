import React from 'react';

function FooterComponent(props) {
    return (
        <>
            <footer>
                <div className="footer-row1">
                    <div className="container">
                        <div className="row">
                            <h4 className="text-center m-auto">thanks for visiting this site</h4>
                        </div>
                    </div>
                </div>
                <div className="footer-svg">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 80" style={{enableBackground: 'new 0 0 1920 80'}} xmlSpace="preserve">
                        <path className="st0" d="M0,27.2c589.2,129.4,1044-69,1920,31v-60H3.2L0,27.2z" />
                    </svg>
                </div>
                <div className="footer-row2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-sm-12 text-center">
                                <a className="navbar-brand img-ctr" href="#"> <img src="images/logo.png" alt="Logo" width={100} /></a>
                                <ul className="footer-link-v2 link-hover mt30">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hline" />
                <div className="footer-row3">
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer-social-media-icons">
                                        <a href="#" target="blank"><i className="fab fa-facebook" /></a>
                                        <a href="#" target="blank"><i className="fab fa-twitter" /></a>
                                        <a href="#" target="blank"><i className="fab fa-instagram" /></a>
                                        <a href="#" target="blank"><i className="fab fa-linkedin" /></a>
                                        <a href="#" target="blank"><i className="fab fa-youtube" /></a>
                                        <a href="#" target="blank"><i className="fab fa-pinterest-p" /></a>
                                        <a href="#" target="blank"><i className="fab fa-vimeo-v" /></a>
                                        <a href="#" target="blank"><i className="fab fa-dribbble" /></a>
                                        <a href="#" target="blank"><i className="fab fa-behance" /></a>
                                    </div>
                                    <div className="footer-">
                                        <p>Copyright © 2020-2021 Niwax. All rights reserved. Template By Muhammad Sabbir</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;