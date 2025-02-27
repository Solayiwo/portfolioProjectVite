import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import contact from "../../assets/images/contact.svg";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pqlf65o", "template_6j65zod", form.current, {
        publicKey: "wVK3RlxoiTE8gIjBS",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent to Solam");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error();
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-me">
        <div className="contact-image deskscrin">
          <img src={contact} alt="contact" width={600} />
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <select
                defaultValue="Select your Interest"
                name="subject"
                id="subject"
                required
              >
                <option value="Select your Interest" disabled>
                  Select your Interest
                </option>
                <option value="software development">
                  Software Development
                </option>
                <option value="training">Training</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="message"
                required
              ></textarea>
            </div>
            <div className="submit-btn">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
