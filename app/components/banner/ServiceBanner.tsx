import Image from "next/image";
import MainButton from "../ui/button/MainButton";
import Link from "next/link";


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
                    src="/images/image-003.jpg"
                    alt="later"
                    fill
                    priority
                    className="object-cover overflow-hidden"
                />
            </div>

            {/* right column */}
            <div className="flex flex-col w-full md:w-[50%] bg-accent">

                <div className="flex h-[50%] bg-[var(--secondary)]">
                    <div className="flex flex-col gap-xs w-[50%] p-sm">
                        <h2>MARBLE SUPPLY</h2>
                        <p className="line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo, repellendus nemo ratione ea pariatur sequi deleniti fugiat error perferendis?</p>
                    </div>
                    <div className="w-[50%] relative">
                        <Image
                            src="/images/image-004.jpg"
                            alt="later"
                            fill
                            className="object-cover overflow-hidden"
                        />
                    </div>
                </div>

                <div className="flex h-[50%] bg-[var(--secondary)]">

                    {/* image */}
                    <div className="w-[50%] relative">
                        <Image
                            src="/images/image-005.jpg"
                            alt="later"
                            fill
                            className="object-cover overflow-hidden"
                        />
                    </div>

                    {/* CTA */}
                    <div className="flex w-[50%] p-sm items-center justify-center min-h-[160px]">
                       <div>
                            <Link href="/services">
                                <MainButton name="Find Out More" />
                            </Link>
                       </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceBanner;