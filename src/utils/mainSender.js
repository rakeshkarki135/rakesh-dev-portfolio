
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    secure: true,
    auth : {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    }
})

export const sendEmailMessage = async (senderEmail, senderName, text, html="") => {

    const payload = {
        from : process.env.EMAIL_ADDRESS ,
        replyTo : senderEmail, 
        to: [process.env.EMAIL_ADDRESS],
        subject : `Email from ${senderName}`,
        text: text,
        html: html,
    }

    try{
        const info = await transporter.sendMail(payload)
        return info

    }catch(error){
        switch (error.code) {
            case "ECONNECTION":
            case "ETIMEDOUT":
                console.error("Network error - retry later:", error.message);
                break;
            case "EAUTH":
                console.error("Authentication failed:", error.message);
                break;
            case "EENVELOPE":
                // err.rejected is only present when every recipient was refused
                console.error("Invalid envelope:", error.message, error.rejected || []);
                break;
            default:
                console.error("Send failed:", error.message);
        }
        throw error
    }


}