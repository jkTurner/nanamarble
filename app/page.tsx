import HeroBanner from "./components/banner/HeroBanner";
import ServiceBanner from "./components/banner/ServiceBanner";


export default function Home() {
	return (
		<div className="w-full flex flex-col gap-3xl md:my-3xl my-md">

			<HeroBanner />

			{/* middle section */}
			<div className="w-full max-w-[600px] mx-auto text-center justify-center flex flex-col gap-sm">
				<h2 className="font-semibold text-lg">STONE THAT TELLS A STORY</h2>
				<div className="flex flex-col gap-xs px-sm">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deleniti reiciendis veritatis explicabo alias error modi dolorem libero? Quisquam, cupiditate. Beatae, odio? Ut hic odio ullam in, itaque pariatur quod.</p>
					<span className="text-lg text-[var(--textLight)]">. . . .</span>
				</div>
			</div>

			<ServiceBanner />

		</div>
	);
}
