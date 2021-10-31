import React from 'react';
import formImg from '../../Asset/images/about/freelancer.png'

function ContactComponent(props) {
    return (
        <>
            <section className="enquire-form pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <span>Contact Now</span>
                                <h2 className="mt0 mb0">Have Question? Write a Message</h2>
                                <p className="mb60 mt20">We will catch you as early as we receive the message</p>
                            </div>
                            <div className="form-block">
                                <form action="#" method="post" name="feedback-form">
                                    <div className="fieldsets row">
                                        <div className="col-md-6"><input type="text" placeholder="Full Name" name="name" /></div>
                                        <div className="col-md-6"><input type="email" placeholder="Email Address" name="email" /></div>
                                    </div>
                                    <div className="fieldsets row">
                                        <div className="col-md-6"><input type="number" placeholder="Contact Number" name="phone" /></div>
                                        <div className="col-md-6"><input type="text" placeholder="Subject" name="subject" /></div>
                                    </div>
                                    <div className="fieldsets"><textarea placeholder="Message" name="message" defaultValue={""} /></div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" defaultChecked="checked" />
                                        <label className="custom-control-label" htmlFor="customCheck">I agree to the <a href="#">Terms &amp; Conditions</a> of Business Name.</label>
                                    </div>
                                    <div className="fieldsets mt20"> <button type="submit" name="submit" className="lnk btn-main bg-btn">Submit <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button> </div>
                                    <p className="trm"><i className="fas fa-lock" />We hate spam, and we respect your privacy.</p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 v-center">
                            <div className="enquire-image">
                                <img src={formImg} alt="enquire" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactComponent;