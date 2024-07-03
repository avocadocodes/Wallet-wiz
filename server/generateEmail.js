import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.APP_PASSWORD)
export async function generateEmail(receiverName,receiverEmail,amount,senderName){
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "priyanshuarya4@gmail.com",
          pass: `${process.env.APP_PASSWORD}`,
        },
      });
    const mailOptions = {
        from: "priyanshuarya4@gmail.com",
        to: `${receiverEmail}`,
        subject: `Hello ${receiverName} from Wallet-wiz!!`,
        text: `You just received a payment request from ${senderName} of Rs${amount}`,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email: ", error);
        } else {
          console.log("Email sent: ", info.response);
        }
      });
}
