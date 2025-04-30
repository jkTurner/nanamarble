import Image from "next/image";

interface PortfolioCardProp {
    place: string;
    location: string;
    detail: string;
    image: string;
}

const PortfolioCard: React.FC<PortfolioCardProp> = ({ place, location, detail, image }) => {
    return (
        <div className="">

            {/* info */}
            <div className="flex flex-col w-full p-sm bg-[var(--secondary)] gap-xs">
                <div className=" flex flex-col gap-[6px]">
                    <h3 className="font-semibold text-[var(--textLight)]">{place}</h3>
                    <p className="text-[var(--textLight)] text-xs italic">{location}</p>
                </div>
                <p className="font-thai line-clamp-3">{detail}</p>
            </div>

            {/* image */}
            <div className="h-[360px] w-full relative">
                <Image
                    src={image}
                    alt={`${place} ${location}`}
                    fill
                    priority
                    className="object-cover overflow-hidden"
                />
            </div>
        </div>
    )
}

export default PortfolioCard;