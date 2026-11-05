import logo from "../../../Assets/Logo/Nakheel-Logo.png";
import { useLocation } from "react-router-dom";
import "./Footer.scss"

import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri"
import propwiseLogo from "../../../Assets/Logo/propwise-logo.webp";


export default function Footer() {
    const location = useLocation();
    return (
        <footer className="footer">
            <div className="footer_row">
                {/* Column 1: Logo and Disclaimer */}
                <div className="footer_col contact_us_col">
                    <div className="contact_content">
                        <img src={logo} className="company_logo brand-logo" alt="Nakheel" />
                        <div className="contact_details_group">
                            <p className="description">
                                Nakheel built Palm Jumeirah and is building Palm Jebel Ali. Family communities including Jumeirah Park, Al Furjan and Jebel Ali Village sit along Sheikh Zayed Road. Nakheel is part of Dubai Holding.
                            </p>
                            {location.pathname === "/thank-you" && (
                            <div className="company_website">
                                <TbWorldWww className="website_icon" />
                                <a className="website_link" href="https://www.nakheel.com/">Nakheel</a>
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className="footer_col">
                    <h2 className="head">Palm Springs</h2>
                    <ul>
                        <li><a href="#about">About the project</a></li>
                        <li><a href="#homes">Townhouses & villas</a></li>
                        <li><a href="#community">Community</a></li>
                        <li><a href="#brochure">Brochure & plans</a></li>
                        <li><a href="#contact-us">Contact</a></li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h2 className="head">Homes</h2>
                    <ul>
                        <li>3–4 bedroom townhouses</li>
                        <li>4–5 bedroom villas</li>
                        <li>From AED 3.8M</li>
                        <li>Homes up to AED 9M</li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h2 className="head">Location</h2>
                    <ul>
                        <li>Near Sheikh Zayed Road</li>
                        <li>17 min to Palm Jebel Ali</li>
                        <li>15 min to DWC Airport</li>
                        <li>Easy metro access</li>
                    </ul>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="footer_disclaimer">
                <p>
                    Palm Springs by Nakheel · Near Sheikh Zayed Road, Dubai<br />
                    Developed by Nakheel, part of Dubai Holding
                </p>
            </div>

            {/* Broker Disclaimer Section */}
            <div className="footer_disclaimer">
                <img src={propwiseLogo} alt="Propwise Realty" />
                <p>
                    Office No. M2-183, Aura Xavier Business Center, BN Complex Al Muteena Deira Dubai, UAE <br />
                    License No: 1503017
                </p>
            </div>

            {/* Additional Disclaimer Section */}
            <div className="footer_disclaimer">
                <p>
                    <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agency namely Propwise Realty LLC. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Agency (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorised use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
            </div>

            {/* Bottom Footer Section */}
            <div className="bottom_footer">
                <div className="left_section">
                    <p>Privacy Policy</p>
                    <span className="separator">|</span>
                    <p>Terms & Conditions</p>
                </div>
                {/* {location.pathname === "/thank-you" && (
                <div className="social_links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><RiInstagramFill /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
                )} */}
                <div className="right_section">
                    <p>© 2026 Propwise Realty LLC. Palm Springs by Nakheel.</p>
                </div>
            </div>
        </footer>
    );
}