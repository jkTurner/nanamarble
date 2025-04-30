import Image from "next/image";
import MainButton from "../ui/button/MainButton";
import Link from "next/link";
import { heroData as hero } from "@/data/SiteData";
// import styles from "./banner.module.css"

const HeroBanner = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[var(--desktop)] mx-auto bg-[var(--secondary)] md:h-[485px]">
            
            {/* first column */}
            <div className="w-full md:w-[30%] flex flex-col justify-between">

                <div className="w-full h-full flex flex-col justify-center gap-md p-md">
                    <div className="text-lg font-light">
                        <h4 className="fadeInItem font-thai">{hero.tagline0}</h4>
                        <h4 className="fadeInItem font-thai">{hero.tagline1}</h4>
                        <h4 className="fadeInItem font-thai text-xl mt-xs" style={{ animationDelay: '0.6s' }}>{hero.tagline2}</h4>
                    </div>
                    <p className="fadeInItem font-thai" style={{ animationDelay: "0.8s" }}>{hero.detail}</p>

                    <div className="fadeInItem self-end" style={{ animationDelay: "0.5s" }}>
                        <Link href="/contact">
                            <MainButton name="ติดต่อเรา" background="bg-[var(--primary)]" color="text-[var(--secondary)]" />
                        </Link>
                    </div>
                </div>

                <div className="bg-[var(--accent)] h-[16px] w-full" />
            </div>

            {/* second column */}
            <div className="w-full md:w-[40%] h-[500px] md:h-full relative overflow-hidden">
                <div className="flex-1 h-full w-full imageZoom">
                    <Image
                        src="/images/my-shots/my-shot-013.jpg"
                        alt="later"
                        fill
                        priority
                        unoptimized={true}
                        className="object-cover overflow-hidden overflowUnset"
                    />
                </div>
            </div>

            {/* third column */}
            <div className="w-full md:w-[30%] flex flex-col">
                <div className="md:h-[50%] flex items-center justify-between flex-col text-[var(--textLight)]">
                    <div className="flex flex-col items-center justify-center h-full px-sm py-sm">
                        <h4 className="fadeInItem font-thai text-lg text-[var(--primary)]">{hero.tagline3}</h4>
                        <h4 className="fadeInItem font-thai text-lg text-[var(--primary)]">{hero.tagline4}</h4>
                    </div>

                    <div className="bg-[var(--accent)] h-[16px] w-full" />
                </div>
                <div className="w-full h-[300px] md:h-[50%] relative overflow-hidden">
                    <div className="flex-1 h-full w-full imageZoom">
                        <Image
                            src="/images/my-shots/my-shot-018.jpg"
                            alt="later"
                            fill
                            priority
                            unoptimized={true}
                            className="object-cover overflow-hidden overflowUnset"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;