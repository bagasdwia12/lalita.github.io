import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FAQModel } from "../models/FAQModel";
import { divider } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";

export default function FAQSection() {
    const itemClasses = {
        base: "py-0 w-full bg-whiteBone shadow-none",
        title: "font-medium text-lg text-black",
        indicator: "text-medium text-black",
    };

    return (
        <div className="mt-20 mx-14">
            <div className="text-3xl font-normal mb-7 text-center">Frequently Asked Questions</div>
            <Accordion variant="splitted" itemClasses={itemClasses}>
                {FAQModel.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.label}
                    >
                        <Divider />
                        <p className="text-base my-4">{item.description}</p>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}