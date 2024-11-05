import { globalPros } from "../models/globalProps";
import ContentBuilder from "./contentBuilder";

export default function DetailContact({ label }: globalPros) {

    return (
        <>
            <div>
                <div className="flex items-center mb-3">
                    <div className="bg-primary w-1 h-10 mr-4"></div>
                    <div className="text-base text-grey font-normal">
                        {label === "address" ? "mushroom cultivation" : "contact detail"}
                    </div>
                </div>
                <ContentBuilder label={label} />
            </div>
        </>
    );
}
