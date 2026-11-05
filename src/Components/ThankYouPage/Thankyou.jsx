import React, { useLayoutEffect } from "react";
import "./ThankYou.css";

import Helmet from "../../General/Helmet";
import banner1 from "../../Assets/Banner/Image-4.webp";

export default function Thankyou() {
    useLayoutEffect(() => {
        const root = document.documentElement;
        const previous = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        root.scrollTop = 0;
        document.body.scrollTop = 0;
        root.style.scrollBehavior = previous;
    }, []);

    return (
        <>
            <Helmet title="Palm Springs by Nakheel | Thank You" />
            <div className="thankyou-hero">
                <div className="overlay"></div>
                <div className="banner-container">
                    <img
                        className="banner-image active"
                        src={banner1}
                        alt="Thank You Banner"
                    />
                </div>
                
                {/* Content Text - Left Bottom */}
                <div className="hero-content-left">
                    <h1 className="content-title">THANK YOU</h1>
                    <p className="content-description">We'll get back to you soon</p>
                    <a href="/">
                        <button className="btn btn-glass content-button">
                            Back To Home
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
} 