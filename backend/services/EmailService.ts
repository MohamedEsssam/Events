import config from "config";
import { Model } from "mongoose";
import nodemailer, { SentMessageInfo, Transporter } from "nodemailer";

export class EmailServices<T> {
  private transporter: Transporter<SentMessageInfo>;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: config.get("mailerUser"),
        pass: config.get("mailerPass"),
      },
    });
  }

  async sendVerificationEmail(
    userId: string,
    email: string,
    name: string
  ): Promise<void> {
    const link = `http://localhost:9000/api/user/verify?id=${userId}`;

    this.transporter.sendMail({
      from: config.get("mailerSender"),
      to: email,
      subject: "Verification Request",
      html: `Hello ${name},<br> Please Click on the link to verify your email.<br><a href=${link}>Click here to verify</a>`,
    });
  }
}
