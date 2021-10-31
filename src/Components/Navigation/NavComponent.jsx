import React from 'react';
import logo from '../../Asset/images/logo.png'

function NavComponent(props) {
    return (
        <>
            <header className="header-pr top-header">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-right navbar-mobile fixed-top navfix">
                    <div className="container">
                        <a className="navbar-brand" href="./"> <img src={logo} alt="Logo" width={100} /></a>
                        <button className="navbar-toggler mobile-none" type="button" data-toggle="collapse" data-target="#navbar4" aria-controls="navbar4" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse animate slideIn mobile-none" id="navbar4">
                            <ul className="mr-auto" />
                            <ul className="navbar-nav d-menu">
                                <li className="nav-item"> <a className="nav-link" href="#">Home </a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">About </a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Service </a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Portfolio </a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Blog </a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                                <li className="nav-item"> <a className="nav-link custom-btn lnk btn-main bg-btn" href="#">Get A Quote <span className="circle" /></a> </li>
                            </ul>
                        </div>
                        <div className="mobile-menu">
                            <ul className="mob-nav">
                                <li> <a className="custom-btn lnk btn-main bg-btn" href="#">Get A Quote<span className="circle" /></a></li>
                                <li className="ml8"><a className="toggle mobilemenu" href="#"><span /></a> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavComponent;