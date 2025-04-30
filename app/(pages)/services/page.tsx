import PortfolioCard from "@/app/components/ui/card/PortfolioCard";
import ServiceCard from "@/app/components/ui/card/ServiceCard";
import { portfolioData, serviceData, serviceDetails } from "@/data/SiteData";
import Image from "next/image";


const ServicesPage = () => {
    return (
        <main 
            id="services"
            aria-labelledby="services-heading"
            className="max-w-[var(--desktop)] w-full py-md md:py-xl mx-auto"
        >

            {/* top section */}
            <section className="innerContainer">

                {/* intro */}
                <div className="flex flex-col w-full gap-sm px-sm mb-sm">
                    <h1 className="text-lg">Our Services <span className="font-thai text-">(บริการของเรา)</span></h1>
                    <p className="font-thai">{serviceData.intro}</p>
                </div>

                {/* service cards section */}
                <div className="flex flex-col md:flex-row w-full gap-sm">

                    <div className="w-full md:w-[400px] flex flex-col gap-sm">
                        {serviceDetails.map((item, index) => (
                            <article key={index}>
                                <ServiceCard topic={item.name} topicEn={item.nameEn} detail={item.detail} />
                            </article>
                        ))}
                    </div>

                    {/* image */}
                    <div className="w-full h-[400px] md:h-auto md:flex-1 relative">
                        <Image
                            src="/images/my-shots/my-shot-015.jpg"
                            alt="Modern marble kitchen with under-lighting and polished surfaces"
                            fill
                            priority
                            className="object-cover overflow-hidden"
                        />
                    </div>
                </div>

            </section>

            {/* portfolio section*/}
            <section id="portfolio" aria-labelledby="portfolio-heading" className="innderContainer">

                <div className="flex flex-col w-full gap-sm py-xl">
                    <div className="flex flex-col gap-sm px-sm">
                        <h2 id="portfolio-heading" className="text-lg">PORTFOLIO</h2>
                        <p className="font-thai">{serviceData.portfolio}</p>
                    </div>

                    <div className="cardContainer mt-sm">
                        {portfolioData.map((item, index) => (
                            <article key={index}>
                                <PortfolioCard 
                                    key={index} 
                                    place={item.place} 
                                    location={item.location} 
                                    detail={item.detail} 
                                    image={item.image} 
                                />
                            </article>
                        ))}
                    </div>
                </div>

            </section>
            
        </main>
    )
}

export default ServicesPage;