import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/button";
import DetailContact from "../components/detailContact";

export default function ContactSection() {
    return (
        <>
            <div id="contact" className="mt-20 mx-14 ">
                <div className="text-3xl font-normal mb-24 text-center">Contact</div>
                <div className="flex justify-between h-[450px]">
                    <div className="flex flex-col justify-between h-full">
                        <DetailContact label="address" />
                        <DetailContact label="contact" />
                        <Button label={"contact us"} size="medium" variant="primary" icon={<FaWhatsapp />} href="https://wa.me/+6282220028175" />
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7907.419972074559!2d111.13407034067912!3d-7.7142352192144585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7989aae8ae8409%3A0x3308d6d19fbcb6de!2sGondang%2C%20Wonorejo%2C%20Jatiyoso%2C%20Karanganyar%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1730813003842!5m2!1sen!2sid" className="w-1/2 h-full rounded-lg"></iframe>
                </div>
            </div>
        </>
    );
}