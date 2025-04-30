import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailText = 
    `You have received a new message from ${name} (${email}):\n\n`
    + `${message}`;

    try {
        const info = await transporter.sendMail({
            from: `${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "Message from Nana Marble site",
            text: mailText,
        });

        console.log('Email sent: %s', info.messageId);
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({ message: "Error sending email. "}, { status: 500 });
    }
}