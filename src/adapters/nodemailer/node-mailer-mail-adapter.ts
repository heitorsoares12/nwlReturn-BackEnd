import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "067016b3389e0b",
      pass: "e1991e6436ed9f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Heitor Soares <heitor.soaress@outlook.com>',
            subject,
            html: body,
        });
    }
    
}