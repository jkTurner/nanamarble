import Image from "next/image";
import MainButton from "../ui/button/MainButton";
import Link from "next/link";


const HeroBanner = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[var(--desktop)] mx-auto bg-[var(--secondary)] md:h-[485px]">
            
            {/* first column */}
            <div className="w-full md:w-[30%] flex flex-col justify-center p-sm gap-md">
                <div className="text-lg font-light">
                    <span>Solid Foundation</span><br/>
                    <span>Stunning Finishes</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quae id et corrupti fugiat animi accusantium ipsam laborum tenetur minus.</p>

                <Link href="/contact">
                    <div className="">
                        <MainButton name="Let's Talk" background="var(--primary)" color="var(--secondary)" />
                    </div>
                </Link>
            </div>

            {/* second column */}
            <div className="w-full md:w-[40%] h-[500px] md:h-full relative">
                 <Image
                    src="/images/image-001.jpg"
                    alt="later"
                    fill
                    priority
                    className="object-cover overflow-hidden"
                />
            </div>

            {/* third column */}
            <div className="w-full md:w-[30%] flex flex-col">
                <div className="md:h-[50%] flex items-center justify-center flex-col font-bold text-[var(--textLight)] py-md">
                    <span>Experience you can touch</span>
                    <span>Elegance you can feel</span>
                </div>
                <div className="w-full h-[300px] md:h-[50%] relative">
                    <Image
                        src="/images/image-002.jpg"
                        alt="later"
                        fill
                        priority
                        className="object-cover overflow-hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;