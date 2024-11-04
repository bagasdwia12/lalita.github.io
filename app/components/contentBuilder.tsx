import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

export default function ContentBuilder({ label }: globalPros) {
    const Component = contentRegistry[label];
    return Component ? <Component /> : <div>Invalid content type</div>;
};

const Contact = () => (
    <div className="ml-6">
        <div className="flex items-center">
            <MdOutlineEmail className="w-4 h-4 mr-2" />
            <h2 className="text-base font-normal w-[90px] text-start">email</h2>
            <h2 className="text-base font-normal mx-2">: </h2>
            <h2 className="text-base font-normal">lalitaMuhsroom@lalita.id</h2>
        </div>
        <div className="flex items-center text-start">
            <FaWhatsapp className="w-4 h-4 mr-2" />
            <h2 className="text-base font-normal w-[90px]">whatsapp</h2>
            <h2 className="text-base font-normal mx-2">:</h2>
            <h2 className="text-base font-normal">+62 822-2002-8175</h2>
        </div>
    </div>
);

const Address = () => (
    <div className="ml-6">
        <div className="flex items-center">
            <GrLocation className="w-6 h-6 " />
            <h2 className="text-xl font-medium">Gondang, Wonorejo</h2>
        </div>
        <p className="text-grey font-normal">Kecamatan Jatiyoso </p>
        <p className="text-grey font-normal">Kabupaten Karanganyar</p>
        <p className="text-grey font-normal">Jawa Tengah</p>
    </div>
);

const contentRegistry: Record<string, React.FC> = {
    contact: Contact,
    address: Address,
};



