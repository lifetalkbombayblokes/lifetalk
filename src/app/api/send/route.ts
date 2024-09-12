import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const params = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sales@thriive.in",
      subject: "Life Talk Contact Form Submission",
      //   react: EmailTemplate({ firstName: 'John' }),
      html: `<div>
                <h1>New Contact Form Submission</h1>
                <p><strong>First Name:</strong> ${params.fname}</p>
                <p><strong>Last Name:</strong> ${params.lname}</p>
                <p><strong>Email:</strong> ${params.email}</p>
                <p><strong>Phone:</strong> ${params.tel}</p>
                <p><strong>Designation:</strong> ${params.des}</p>
                <p><strong>Company:</strong> ${params.com}</p>
                <p><strong>Message:</strong> ${params.mess}</p>
            </div>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
