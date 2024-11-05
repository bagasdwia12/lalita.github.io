import Button from "../components/button"
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

export default function HeroSection() {
    return (
        <>
            <div className="mt-20 mx-6 20pt-20 flec flex-col">
                <Image src="./heroImage.png" alt="hero-image" className="w-full h-full object-cover" />
                <div className="flex justify-between items-center mx-8 mt-10">
                    <div className="w-1/4">
                        <h1 className="text-2xl font-medium">Lalita Ear Mushroom</h1>
                        <h1 className="text-xl font-normal text-grey">is a home business that focuses on cultivating wood ear mushrooms. Lalita was founded in 1996 and always innovates in our cultivation. Lalita always prioritizes the quality of our products for customer satisfaction.</h1>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <Button icon={<FaWhatsapp />} label={"contact us"} size="medium" variant="primary" />
                        <Button label={"see product"} size="medium" variant="outline" />
                    </div>
                </div>
            </div>
        </>
    );
}