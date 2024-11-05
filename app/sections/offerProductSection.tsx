import OfferProductCard from "@/app/components/offerProductCard";
import { offerProductModel } from "@/app/models/offerProductModel";


export default function OfferProductSection() {
    return (
        <div id="about-us" className="mt-20">
            <div className="bg-whiteBone w-full h-full px-14 py-24">
                <div className="w-full flex-col">
                    <div className="text-3xl font-normal mb-16 text-center">We offer product</div>
                    <div className="flex justify-between">
                        {offerProductModel.map((product, index) => (
                            <OfferProductCard
                                key={index}
                                icon={product.icon}
                                label={product.label}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}