import HeroBanner from "./components/banner/HeroBanner";
import ServiceBanner from "./components/banner/ServiceBanner";
import { heroData as hero } from "@/data/SiteData";

export default function Home() {
	return (
		<div className="w-full flex flex-col gap-3xl md:my-3xl">

			<HeroBanner />

			{/* middle section */}
			<div className="w-full max-w-[600px] mx-auto text-center justify-center flex flex-col gap-sm">
				<h2 className="font-thai text-lg px-sm">{hero.ctaTopic}</h2>
				<div className="flex flex-col gap-xs px-sm">
					<p className="font-thai">{hero.ctaDetail}</p>
					<span className="text-lg text-[var(--textLight)]">. . . .</span>
				</div>
			</div>

			<ServiceBanner />

		</div>
	);
}
