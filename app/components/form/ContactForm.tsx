'use client'
import { LineIcon } from "@/assets/Icons";
import { contactData } from "@/data/SiteData";
import React, { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/util/send-email", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus("Email sent successfully");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("Failed to send email");
            }
        } catch (error) {
            console.error("Error sending email: ", error);
            setStatus("Failed to send email");
        }

    };

    return (
        <div className="flex flex-col md:flex-row w-full gap-md">
            <form
                method="POST"
                onSubmit={handleSubmit}
                aria-labelledby="Contact Form"
                className="flex flex-col gap-sm p-sm bg-[var(--secondary)] w-full md:w-[50%] fadeInItem"
            >
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input 
                    id="fullName" 
                    type="text" 
                    name="fullName" 
                    placeholder="Full Name (ชื่อ)"
                    className="text-[var(--textLight)] border-b border-[var(--textKill)]
                    focus:border-[var(--primary)] flex-1 py-3 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                    id="email" 
                    type="text" 
                    name="email" 
                    placeholder="Email Address (อีเมล)"
                    className="text-[var(--textLight)] border-b border-[var(--textKill)]
                    focus:border-[var(--primary)] flex-1 py-3 text-sm" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message... (ข้อความ)"
                    rows={6}
                    className="text-[var(--textLight)] bg-[var(--bgMain)] p-sm text-sm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end gap-sm w-full items-center">
                    {status && 
                        <p>{status}</p>
                    }
                    <div className="self-end">
                        <button 
                            type="submit" 
                            className="font-thai text-xs pt-3 pb-2 px-6 bg-[var(--primary)] text-[var(--secondary)] font-light cursor-pointer"
                            >ส่งข้อความ</button>
                    </div>
                </div>
            </form>

            {/* contact info */}
            <div className="flex flex-col gap-sm flex-1 pl-sm pr-sm md:pl-0">
                <p className="font-thai">{contactData.intro}</p>
                <div className="flex flex-col gap-sm">
                    <h2 className="font-semibold">Contact Info <span className="font-thai font-medium">(ข้อมูลการติดต่อ)</span></h2>
                    <div>
                        <p>{contactData.phoneNumber}</p>
                        <p>Email: {contactData.email}</p>
                        <p>Website: {contactData.url}</p>

                        <div className="flex gap-xs items-center pt-sm">
                            <LineIcon size={36} color="#00B900" />
                            <p>{contactData.lineId}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-sm">
                    <h2 className="font-semibold">Address <span className="font-thai font-medium">(ที่อยู่)</span></h2>
                    <div>
                        <p>{contactData.businessName} {contactData.lineId}</p>
                        <p className="font-thai">{contactData.address}</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-sm">
                    <h2 className="font-semibold">Operating Hours <span className="font-thai font-medium">(เวลาทำการ)</span></h2>
                    <div>
                        <p className="font-thai">{contactData.workHours}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactForm;