import { contactData, faqsData } from "@/data/SiteData";


const ContactPage = () => {
    return (
        <main className="w-full mt-xl flex flex-col gap-xl">
            
            {/* contact form & info section */}
            <section aria-labelledby="contact-heading" className="flex flex-col w-full max-w-[var(--desktop)] gap-md mx-auto">
                <h1 id="contact-heading" className="px-sm">Contact Us</h1>
                <div className="flex flex-col md:flex-row w-full gap-md">
                    <form
                        aria-labelledby="Contact Form"
                        className="flex flex-col gap-sm p-sm bg-[var(--secondary)] w-full md:w-[50%]"
                    >
                        <label htmlFor="fullName" className="sr-only">Full Name</label>
                        <input 
                            id="fullName" 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name"
                            className="text-[var(--textLight)] border-b border-[var(--textKill)]
                            focus:border-[var(--primary)] flex-1 py-3 text-sm" 
                        />
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            id="email" 
                            type="text" 
                            name="email" 
                            placeholder="Email Address"
                            className="text-[var(--textLight)] border-b border-[var(--textKill)]
                            focus:border-[var(--primary)] flex-1 py-3 text-sm" 
                        />
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message..."
                            rows={6}
                            className="text-[var(--textLight)] bg-[var(--bgMain)] p-sm text-sm"
                        />
                        <div className="self-end">
                            <button 
                                type="submit" 
                                className="py-1 px-6 bg-[var(--primary)] text-[var(--secondary)] text-sm font-light cursor-pointer"
                                >Send</button>
                        </div>
                    </form>

                    {/* contact info */}
                    <div className="flex flex-col gap-sm flex-1 pl-sm pr-sm md:pl-0">
                        <p>{contactData.intro}</p>
                        <div className="flex flex-col gap-sm">
                            <h2 className="font-semibold">Contact Info</h2>
                            <div>
                                <p>Phone: {contactData.phoneNumber}</p>
                                <p>Email: {contactData.email}</p>
                                <p>Website: {contactData.url}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-sm">
                            <h2 className="font-semibold">Address</h2>
                            <div>
                                <p>{contactData.businessName}</p>
                                <p>{contactData.address}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-sm">
                            <h2 className="font-semibold">Opening Hours</h2>
                            <div>
                                <p>{contactData.workHours}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* FAQs and map section */}
            <section id="faqs" aria-labelledby="faqs-heading" className="flex w-full gap-md bg-[var(--secondary)] py-xl">

                <div className="w-full max-w-[var(--desktop)] mx-auto flex flex-col md:flex-row gap-md">
                    
                {/* FAQs */}
                    <div className="w-full md:w-[50%] flex flex-col gap-sm">
                        <h2 id="faqs-heading" className="px-sm text-[var(--primary)] font-semibold">FAQs</h2>

                        {faqsData.map((item, index) => (
                            <div key={index} className="p-sm bg-[var(--bgMain)]">
                                <h3 className="font-semibold">{item.question}</h3>
                                <p>{item.answer}</p>
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
                            <a href={contactData.mapLink} target="_blank" className="px-4 py-1 bg-[var(--primary)] text-[var(--secondary)] text-sm font-light">
                                Get Direction
                            </a>
                        </div>
                    </div>
                </div>

                
            </section>
        </main>
    )
}

export default ContactPage;