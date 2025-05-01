import ContactForm from "@/app/components/form/ContactForm";
import { contactData, faqsData } from "@/data/SiteData";


const ContactPage = () => {
    return (
        <main className="w-full flex flex-col gap-xl mt-md">
            
            {/* contact form & info section */}
            <section aria-labelledby="contact-heading" className="flex flex-col w-full max-w-[var(--desktop)] gap-md mx-auto">
                <h1 id="contact-heading" className="px-sm">Contact Us <span className="font-thai">(ติดต่อเรา)</span></h1>
                <ContactForm />
            </section>

            {/* FAQs and map section */}
            <section id="faqs" aria-labelledby="faqs-heading" className="flex w-full gap-md bg-[var(--secondary)] py-xl">

                <div className="w-full max-w-[var(--desktop)] mx-auto flex flex-col md:flex-row gap-md">
                    
                {/* FAQs */}
                    <div className="w-full md:w-[50%] flex flex-col gap-sm">
                        <h2 id="faqs-heading" className="px-sm text-[var(--primary)] font-semibold">
                            FAQs
                            <span className="font-thai font-medium"> (คำถามที่พบบ่อย)</span>
                        </h2>

                        {faqsData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-xs p-sm bg-[var(--bgMain)]">
                                <h3 className="font-thai font-medium">{item.question}</h3>
                                <p className="font-thai">{item.answer}</p>
                            </div>
                        ))}
                    </div>

                    {/* Google Map */}
                    <div className="flex flex-col gap-sm flex-1 pr-sm pl-sm md:pl-0">
                        <h2 className="mob-sm text-[var(--primary)] font-semibold px-sm">Find Us on Map</h2>
                        <iframe
                            src={contactData.map}
                            width="100%"
                            height="400"
                            allowFullScreen
                            loading="lazy"
                            className=""
                        />
                        <div className="self-end">
                            <a 
                                href={contactData.mapLink} 
                                target="_blank" 
                                className="font-thai text-xs pt-3 pb-2 px-5 bg-[var(--primary)] text-[var(--secondary)] font-light">
                                หาเส้นทาง
                            </a>
                        </div>
                    </div>
                </div>

                
            </section>
        </main>
    )
}

export default ContactPage;