
import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [captcha, setCaptcha] = useState<string | null>(null);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === "";
    const isEmailEmpty = email.trim() === "";
    const isMessageEmpty = message.trim() === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    // CAPTCHA CHECK (IMPORTANT)
    if (!captcha) {
      alert("Please verify CAPTCHA first!");
      return;
    }

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) {
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_8kjspa5",
        "template_45v25c9",
        templateParams,
        "Ys5Xfd1Ja8RTnnapo"
      )
      .then(
        () => {
          alert("Message sent successfully!");

          setName("");
          setEmail("");
          setMessage("");
          setCaptcha(null);
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Don't think too much! Just send me a message 🚀</p>

          <Box
            ref={form}
            component="form"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />

              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me your message"
              multiline
              rows={6}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />

            {/* CAPTCHA */}
            <ReCAPTCHA
  sitekey="6LfemOgsAAAAALC56uOuNVzyyprAkbLxI3KirHb5"
  onChange={(value: string | null) => setCaptcha(value)}
/>

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;