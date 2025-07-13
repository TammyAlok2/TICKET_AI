import nodemailer from 'nodemailer'



export const sendMail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({

            host: process.env.MAIL_TRAP_SMTP_HOST,
            port: process.env.MAIL_TRAP_SMTP_PORT,
            secure: true, // use TLS
            auth: {
                user: process.env.MAIL_TRAP_SMTP_USER,
                pass: process.env.MAIL_TRAP_SMTP_PASS,
            },
        });
        
        const info = await transporter.sendMail({
            from:"Innges TMS",
            to,
            subject,
            text,
        })
        console.log("Message Sent",info.messageId)


        return info;
    } catch (error) {
console.error("Nodemailer failed",error)
    }
}