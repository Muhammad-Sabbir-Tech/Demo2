import React from 'react';
import blogImage from '../../Asset/images/blog/blog-1.jpg'

function BlogComponent(props) {
    return (
        <>
            <section className="blog-home pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading">
                                <span>Blogs</span>
                                <h2 className="mb0">My Latest Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 single-card-item wow fadeInUp" data-wow-delay=".2s">
                            <div className="isotope_item hover-scale">
                                <div className="item-image">
                                    <a href="#"><img src={blogImage} alt="blog" className="img-fluid"/>
                                    </a>
                                    <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span>
                                </div>
                                <div className="item-info blog-info">
                                    <div className="entry-blog">
                                        <span className="bypost"><a href="#"><i className="fas fa-user"/> Tom Black</a></span>
                                        <span className="posted-on">
                      <a href="#"><i className="fas fa-clock"/> Sep 24, 2019</a>
                    </span>
                                        <span><a href="#"><i className="fas fa-comment-dots"/> (23)</a></span>
                                    </div>
                                    <h4><a href="#">Stock Market App Development - Time, Cost, Features</a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 single-card-item wow fadeInUp" data-wow-delay=".4s">
                            <div className="isotope_item hover-scale">
                                <div className="item-image">
                                    <a href="#"><img src={blogImage} alt="blog" className="img-fluid"/>
                                    </a>
                                    <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span>
                                </div>
                                <div className="item-info blog-info">
                                    <div className="entry-blog">
                                        <span className="bypost"><a href="#"><i className="fas fa-user"/> Tom Black</a></span>
                                        <span className="posted-on">
                      <a href="#"><i className="fas fa-clock"/> Sep 24, 2019</a>
                    </span>
                                        <span><a href="#"><i className="fas fa-comment-dots"/> (23)</a></span>
                                    </div>
                                    <h4><a href="#">Finance App Development - Time, Cost, Features</a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 single-card-item wow fadeInUp" data-wow-delay=".6s">
                            <div className="isotope_item hover-scale">
                                <div className="item-image">
                                    <a href="#"><img src={blogImage} alt="blog" className="img-fluid"/>
                                    </a>
                                    <span className="category-blog"><a href="#">Marketing</a> <a href="#">SEM</a></span>
                                </div>
                                <div className="item-info blog-info">
                                    <div className="entry-blog">
                                        <span className="bypost"><a href="#"><i className="fas fa-user"/> Tom Black</a></span>
                                        <span className="posted-on">
                      <a href="#"><i className="fas fa-clock"/> Sep 24, 2019</a>
                    </span>
                                        <span><a href="#"><i className="fas fa-comment-dots"/> (23)</a></span>
                                    </div>
                                    <h4><a href="#">How to Increase Your ROI Through scientific SEM?</a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogComponent;