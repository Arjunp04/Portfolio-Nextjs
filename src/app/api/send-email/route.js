import nodemailer from "nodemailer";

export async function POST(req) {
  // Parse the request body
  const { username, phoneNumber, email, message } = await req.json();

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Define the email options
    const mailDetails = {
      from: process.env.GMAIL_USER, // Authenticated sender (your Gmail address)
      replyTo: email, // The user's email (the one who filled the form)
      to: process.env.GMAIL_USER, // Receiver address (your email)
      subject: `New message from ${username}`,
      html: `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailDetails);

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email!" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
