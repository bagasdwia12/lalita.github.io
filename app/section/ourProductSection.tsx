import OurProductCard from "../components/ourProductCard";
import { ourProductModel } from "../models/ourProductModel";

export default function OurProductSection() {

    return (
        <>
            <div className="mt-20">
                <div className="bg-white w-full h-full px-14">
                    <div className="w-full flex-col">
                        <div className="text-3xl font-normal mb-7 text-center">Our product</div>
                        <div className="text-xl font-normal mb-7 text-center text-grey">Don't hesitate to buy superior products from us</div>
                        <div className="flex gap-8 justify-center">
                            {ourProductModel.map((product, index) => (
                                <OurProductCard
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
        </>
    );
}