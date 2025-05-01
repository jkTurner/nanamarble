import { CheckBadgeIcon } from "@/assets/Icons";

interface BadgeCardProps {
    name: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ name }) => {
    return (

        <div className="flex gap-sm w-full text-[var(--textLight)] font-thai items-center bg-[var(--secondary)] p-xs">
            <CheckBadgeIcon color="var(--accent)"/>
            {name}
        </div>

    )
}

export default BadgeCard;