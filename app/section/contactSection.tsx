import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/button";
import DetailContact from "../components/detailContact";
import MapCard from "../components/mapCard";

export default function ContactSection() {
    return (
        <>
            <div className="mt-20 mx-14 ">
                <div className="text-3xl font-normal mb-24 text-center">Contact</div>
                <div className="flex justify-between h-[450px]">
                    <div className="flex flex-col justify-between h-full">
                        <DetailContact label="address" />
                        <DetailContact label="contact" />
                        <Button label={"contact us"} size="medium" variant="primary" icon={<FaWhatsapp />} />
                    </div>
                    <MapCard />
                </div>
            </div>
        </>
    );
}