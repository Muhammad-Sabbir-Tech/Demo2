import React from 'react';
import reviewImg from '../../Asset/images/user-thumb/girl.jpg'

function TestimonialComponent(props) {
    return (
        <>
            <section className="testinomial-section pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 v-center">
                            <div className="common-heading text-l">
                                <span>Clients Testimonial</span>
                                <h2 className="mb0">What clients say about my services.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-card-a pl25">
                                <div className="testimonial-card">
                                    <div className="t-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                    <div className="client-thumbs mt30">
                                        <div className="media v-center">
                                            <div className="user-image bdr-radius"><img src={reviewImg} alt="girl" className="img-fluid" /></div>
                                            <div className="media-body user-info v-center">
                                                <h5>Moana Smile</h5>
                                                <p>CEO of Niwax, <small>Jaipur, India</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="t-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                    <div className="client-thumbs mt30">
                                        <div className="media v-center">
                                            <div className="user-image bdr-radius"><img src={reviewImg} alt="girl" className="img-fluid" /></div>
                                            <div className="media-body user-info">
                                                <h5>Moana Smile</h5>
                                                <p>CEO of Niwax, <small>Jaipur, India</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="t-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                    <div className="client-thumbs mt30">
                                        <div className="media v-center">
                                            <div className="user-image bdr-radius"><img src={reviewImg} alt="girl" className="img-fluid" /></div>
                                            <div className="media-body user-info">
                                                <h5>Moana Smile</h5>
                                                <p>CEO of Niwax, <small>Jaipur, India</small></p>
                                            </div>
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

export default TestimonialComponent;