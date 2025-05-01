import HeroBanner from "./components/banner/HeroBanner";
import ServiceBanner from "./components/banner/ServiceBanner";
import { fourPointsData, heroData as hero } from "@/data/SiteData";
import BadgeCard from "./components/ui/card/BadgeCard";

export default function Home() {
	return (
		<div className="w-full flex flex-col gap-xl md:my-3xl">

			<HeroBanner />

			{/* middle section */}
			<div className="flex flex-col gap-xl w-full max-w-[var(--desktop)] mx-auto">

				{/* 4 Points */}
				<div className="badgeContainer">
					{fourPointsData.map((item, index) => (
						<BadgeCard key={index} name={item} />
					))}
				</div>

				{/* CTA Text */}
				<div className="w-full max-w-[600px] mx-auto text-center justify-center flex flex-col gap-sm">
					<h2 className="font-thai text-lg px-sm">{hero.ctaTopic}</h2>
					<div className="flex flex-col gap-xs px-sm">
						<p className="font-thai">{hero.ctaDetail}</p>
						<span className="text-lg text-[var(--textLight)]">. . . .</span>
					</div>
				</div>
			</div>

			<ServiceBanner />

		</div>
	);
}
