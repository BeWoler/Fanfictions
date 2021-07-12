const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Activation" + "http://localhost:3001",
            text: '',
            html: 
                `
                <div>
                    <h1>To activate, follow the link</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
        })
    }
}

module.exports = new MailService();