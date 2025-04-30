import Image from "next/image";
import MainButton from "../ui/button/MainButton";
import Link from "next/link";
import { serviceDetails } from "@/data/SiteData";


const ServiceBanner = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[var(--desktop)] mx-auto bg-[var(--secondary)] md:h-[400px]">
            
            {/* left column */}
            <div className="w-full md:w-[50%] h-[400px] md:h-full relative">
                 {/* <div className="flex flex-col gap-xs h-[50%] w-[50%] p-sm absolute right-0 bottom-0 z-[100] bg-[var(--secondary)]">
                    <h2>MARBLE SUPPLY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo, repellendus nemo ratione ea pariatur sequi deleniti fugiat error perferendis?</p>
                </div> */}
                <Image
                    src="/images/my-shots/my-shot-004.jpg"
                    alt="later"
                    fill
                    priority
                    className="object-cover overflow-hidden overflowUnset"
                />
            </div>

            {/* right column */}
            <div className="flex flex-col w-full md:w-[50%] bg-accent">

                <div className="flex h-[50%] bg-[var(--secondary)]">
                    <div className="flex flex-col gap-xs w-[50%] p-sm">
                        <h2 className="font-thai text-[var(--primary)]">บริการจำหน่าย และอื่นๆ</h2>
                        <p className="font-thai line-clamp-4">{serviceDetails[0].detail}</p>
                    </div>
                    <div className="w-[50%] relative">
                        <Image
                            src="/images/image-e005-crop.jpg"
                            alt="later"
                            fill
                            className="object-cover overflow-hidden overflowUnset"
                        />
                    </div>
                </div>

                <div className="flex h-[50%] bg-[var(--secondary)]">

                    {/* image */}
                    <div className="w-[50%] relative">
                        <Image
                            src="/images/image-e003-crop.jpg"
                            alt="later"
                            fill
                            className="object-cover overflow-hidden overflowUnset"
                        />
                    </div>

                    {/* CTA */}
                    <div className="flex w-[50%] p-sm items-center justify-center min-h-[160px]">
                       <div>
                            <Link href="/services">
                                <MainButton name="บริการทั้งหมด" />
                            </Link>
                       </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceBanner;