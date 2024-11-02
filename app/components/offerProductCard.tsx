export default function OfferProductCard({ icon, title, description }: (ModelAndCardProps)) {

    return (
        <>
            <div className="bg-white w-96 h-60 flex flex-col gap-y-5 justify-start border rounded-xl p-4">
                <img src={icon} alt="satisfactory" className="w-8 h-8 " />
                <div className="text-lg font-normal">{title}</div>
                <div className="text-sm font-normal text-grey">{description}</div>
            </div>
        </>
    );
}