'use client'

import HeroSection from "./section/heroSection";
import OfferProductSection from "./section/offerProductSection";
import OurProductSection from "./section/ourProductSection";

export default function PageWrapper() {
    return (
        <div>
            <HeroSection />
            <OfferProductSection />
            <OurProductSection />
        </div>
    );
}