import { Fragment } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import AboutUsSection from "../Components/HomePage/AboutUsSection/AboutUsSection";
import HomesSection from "../Components/HomePage/HomesSection/HomesSection";
import CommunitySection from "../Components/HomePage/CommunitySection/CommunitySection";
import MakersSection from "../Components/HomePage/MakersSection/MakersSection";
import LaunchesSection from "../Components/HomePage/LaunchesSection/LaunchesSection";
import LocationSection from "../Components/HomePage/LocationSection/LocationSection";
import BrochureSection from "../Components/HomePage/BrochureSection/BrochureSection";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import Helmet from "../General/Helmet";
import CTA from "../Components/Common/CTA/CTA";
import ctaImage from "../Assets/Banner/Image-2.webp";

export default function HomePage() {
    return (
        <Fragment>
            <Helmet title="Palm Springs by Nakheel | Townhouses & Villas near Palm Jebel Ali" />
            <HomeHero />
            <AboutUsSection />
            <HomesSection />
            <CTA
                title="Be first when the next details are confirmed"
                paragraphs={[
                    "Register once. Pricing, floor plans and the payment plan reach you as soon as Nakheel confirms them.",
                ]}
                buttonText="Register your interest"
                buttonLink="#contact-us"
                backgroundImage={ctaImage}
            />
            <CommunitySection />
            <MakersSection />
            <LaunchesSection />
            <LocationSection />
            <BrochureSection />
            <ContactForm />
        </Fragment>
    );
}
