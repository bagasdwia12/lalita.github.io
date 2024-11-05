import { FaFacebook, FaInstagram } from "react-icons/fa";
import { menuModel } from "../models/menuModel";

const productItem: string[] = ["Ear Mushroom", "Baglog"];

export default function FooterSection() {
    return (
        <>
            <div className="mt-20">
                <div className="flex bg-black px-14 py-9 justify-between">
                    <div className="flex flex-col justify-between">
                        <img src="./images/companyLogo/company-logo-footer.png" alt="logo-lalita" className="w-[200px] h-16 mb-6" />
                        <div className="mb-6">
                            <p className="text-white">&quot;grow to go</p>
                            <p className="text-white">© 1996 - 2024 <span className="text-white font-medium">Lalita Mushroom</span>, All rights reserved</p>
                        </div>
                        <div className="flex gap-x-2">
                            <FaInstagram className="text-white text-xl" />
                            <FaFacebook className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="flex w-80 justify-between">
                        {footerContentBuilder("Menu", menuModel.map((item) => item.label))}
                        {footerContentBuilder("Product", productItem)}
                    </div>
                </div>
            </div>
        </>
    );
}

export function footerContentBuilder(label: string, items: string[]) {
    return (
        <>
            <div className="flex flex-col">
                <div className="text-lg font-normal text-white">{label}</div>
                {items.map((item, index) => (
                    <div key={index} className="text-base font-normal text-white">
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
}