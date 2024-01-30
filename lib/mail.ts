import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: "onboading@resend.dev",
    to: email,
    subject: "Verify your email",
    html: ` <p>Please click the link below to verify your email
    <a href="${confirmLink}">Click Here</a>
    
    </p>`

  })
}