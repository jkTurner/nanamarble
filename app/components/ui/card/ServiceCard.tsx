
interface ServiceCardProp {
    topic: string;
    detail: string;
}

const ServiceCard: React.FC<ServiceCardProp> = ({ topic, detail }) => {
    return (
        <div className="flex flex-col gap-sm bg-[var(--secondary)] p-sm h-full">
            <h3 className="">{topic}</h3>
            <p>{detail}</p>
        </div>
    )
}

export default ServiceCard;