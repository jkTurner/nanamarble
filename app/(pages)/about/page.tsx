import ServiceCard from "@/app/components/ui/card/ServiceCard";
import { aboutData as about, ourValues, whoWeServe } from "@/data/SiteData";
import Image from "next/image";

const AboutPage = () => {
    return (
        <main 
            id="about"
            aria-labelledby="about-heading"
            className="mt-xl flex flex-col gap-xl"
        >
            <div className="innerContainer">

                {/* top section */}
                <section className="flex md:flex-row flex-col w-full gap-md">

                    {/* left column */}
                    <div className="flex flex-col gap-sm pl-sm pr-sm md:pr-0 md:w-[50%] w-full">
                        <h1 id="about-heading">{about.topicEn} <span className="font-thai">{about.topic}</span></h1>
                        <h2 className="font-thai text-[var(--primary)]">{about.whoWeAre}</h2>
                        <p className="font-thai">{about.whoWeAreDetail}</p>
                        {/* <p className="font-thai">
                            Learn more about our <a href="/services" className="underline">services</a> or <a href="/contact" className="underline">get in touch</a> for a quote.
                        </p> */}
                        <p className="font-thai">
                            เรียนรู้เพิ่มเติมเกี่ยวกับ <a href="/services" className="underline">บริการของเรา</a> หรือ <a href="/contact" className="underline">ติดต่อเราเพื่อขอคำปรึกษา</a>.
                        </p>
                        <h2 className="text-[var(--primary)]">{about.whatWeDoEn} <span className="font-thai">{about.whatWeDo}</span></h2>
                        <p className="font-thai">{about.whatWeDoDetail}</p>
                    </div>
                    <div className="md:w-[50%] w-full h-[400px] md:h-auto md:flex-1 relative">
                        <Image
                            src={about.image}
                            alt="later"
                            fill
                            priority
                            className="object-cover overflow-hidden"
                        />
                    </div>

                </section>

                {/* value section */}
                <section id="our-values" aria-labelledby="values-heading" className="mt-xl">

                    <h2 id="values-heading" className="text-[var(--primary)] mb-sm px-sm">
                        Our Values
                        <span className="font-thai"> {about.ourValues}</span>
                    </h2>

                    <div className="cardContainer">
                        {ourValues.map((item, index) => (
                            <article key={index}>
                                <ServiceCard topic={item.topic} detail={item.detail} />
                            </article>
                        ))}
                    </div>

                </section>

            </div>

            {/* why us section */}
            <section id="why-nana" aria-labelledby="why-heading" className="bg-[var(--secondary)] w-full py-xl">

                <div className="innerContainer flex flex-col md:flex-row">
                    {/* left column */}
                    <div className="w-full md:w-[50%] flex flex-col p-sm gap-sm">
                        <h2 className="font-thai text-[var(--primary)]">{about.whyUs}</h2>
                        <p className="font-thai">{about.whyUsDetail}</p>

                        <div className="flex h-[400px] md:h-auto md:flex-1 relative">
                            <div className="w-[50%] relative">
                                <Image
                                    src="/images/my-shots/my-shot-020.jpg"
                                    alt="later"
                                    fill
                                    className="object-cover overflow-hidden"
                                />
                            </div>
                            <div className="w-[50%] relative">
                                <Image
                                    src="/images/my-shots/my-shot-014.jpg"
                                    alt="later"
                                    fill
                                    className="object-cover overflow-hidden"
                                />
                            </div>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="w-full md:w-[50%] flex flex-col p-sm gap-sm">
                        <h2 className="font-thai text-[var(--primary)]">ลูกค้าของเรา</h2>
                        <ul className="flex flex-col gap-sm">
                        {whoWeServe.map((item, index) => (
                            <li 
                                key={index}
                                className="font-thai p-xs bg-[var(--bgMain)]"
                            >{item.client}</li>
                        ))}
                        </ul>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default AboutPage;