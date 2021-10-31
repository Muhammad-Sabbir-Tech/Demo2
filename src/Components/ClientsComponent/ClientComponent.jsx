import React from 'react';
import clientImg from '../../Asset/images/client/clients-1.png'

function ClientComponent(props) {
    return (
        <>
            <section className="clients-section pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading">
                                <span>Happy customers</span>
                                <h2>Some of My Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="opl">
                                <ul>
                                    <li className=" wow fadeIn" data-wow-delay=".2s">
                                        <div className="clients-logo"><img src={clientImg} alt="text" className="img-fluid" /></div>
                                    </li>
                                    <li className=" wow fadeIn" data-wow-delay=".4s">
                                        <div className="clients-logo"><img src={clientImg} alt="text" className="img-fluid" /></div>
                                    </li>
                                    <li className=" wow fadeIn" data-wow-delay=".6s">
                                        <div className="clients-logo"><img src={clientImg} alt="text" className="img-fluid" /></div>
                                    </li>
                                    <li className=" wow fadeIn" data-wow-delay=".8s">
                                        <div className="clients-logo"><img src={clientImg} alt="text" className="img-fluid" /></div>
                                    </li>
                                    <li className=" wow fadeIn" data-wow-delay="1s">
                                        <div className="clients-logo"><img src={clientImg} alt="text" className="img-fluid" /></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientComponent;