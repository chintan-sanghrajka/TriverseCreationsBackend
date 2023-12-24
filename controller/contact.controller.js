import nodemailer from "nodemailer";

export const sendEmail = (req, res) => {
  const { name, contact, email, message } = req.body;
  mail(name, contact, email, message);
};

const mail = async (name, contact, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sanghrajka.chintan@gmail.com",
      pass: "geccbbmvgckimbkz",
    },
  });
  try {
    let info = await transporter.sendMail({
      from: "Triverse Creations",
      to: "triversecreations1111@gmail.com",
      subject: "Testing",
      html: `
            <div>
            <h2>Dear Raj,</h2>
              <p style="font-size: 18px">${name}</p>
              <p style="font-size: 18px">${contact}</p>
              <p style="font-size: 18px">${email}</p>
              <p style="font-size: 18px">${message}</p>
            <h2>Thanks and Regards,</h2>
            <h2>Team BookMySeat</h2>
            </div>
            `,
    });
  } catch (error) {
    console.log(error.message);
  }
};
