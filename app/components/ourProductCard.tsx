
import { globalPros } from "../models/globalProps";
import Button from "./button";

export default function OurProductCard({ icon, label, description }: globalPros) {

    return (
        <>
            <div className="flex p-4 bg-white border border-grey rounded-xl w-card-our-product-width h-card-our-product-height gap-2">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-y-6">
                        <div className="text-xl font-medium">{label}</div>
                        <div className="text-base font-normal text-grey">{description}</div>
                    </div>
                    <Button label={"buy"} size="small" variant="primary" />
                </div>
                <img src={icon} alt="image" />
            </div>
        </>
    );
}