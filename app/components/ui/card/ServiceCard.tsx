
interface ServiceCardProp {
    topic: string;
    topicEn?: string | undefined;
    detail: string;
}

const ServiceCard: React.FC<ServiceCardProp> = ({ topic, detail, topicEn }) => {
    return (
        <div className="flex flex-col gap-sm bg-[var(--secondary)] p-sm h-full">
            <h3 className="">{topicEn && (<>{topicEn}</>)} <span className="font-thai">{topic}</span></h3>
            <p className="font-thai">{detail}</p>
        </div>
    )
}

export default ServiceCard;