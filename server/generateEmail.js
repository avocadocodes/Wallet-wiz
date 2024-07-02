import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.APP_PASSWORD)
export async function generateEmail(){
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
        to: "strangelypriyanshu@gmail.com",
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email: ", error);
        } else {
          console.log("Email sent: ", info.response);
        }
      });
}
