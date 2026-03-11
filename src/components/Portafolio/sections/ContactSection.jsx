import React, { useState } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { ContactItem } from "../components/ContactItem";
import { Button } from "../components/Button";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";
import emailjs from "@emailjs/browser";

const AnimatedElement = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    delay,
    triggerOnce: true,
  });
  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("entro");
    e.preventDefault();
    // Send email using EmailJS
    emailjs
      .send(
        "service_dm9bhhg", // Replace with your EmailJS service ID
        "template_4cl3el6", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "enriquegrassporras@gmail.com",
        },
        "NhnOdhlpIAGNKtS9G", // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div className="flex w-full flex-wrap">
      {/* Left Column - Contact Info */}
      <AnimatedElement
        animation="fadeInLeft"
        delay={0}
        className="flex flex-col mb-3 lg:w-1/3 md:w-1/2 sm:w-full"
      >
        <div className="flex flex-col md:gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              DON'T BE SHY!
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>

          {/* Contact Items with staggered animation */}
          <AnimatedElement animation="fadeInUp" delay={100}>
            <ContactItem
              titulo={"ADDRESS POINT"}
              ico={"fa-map"}
              adress={"calle 206 e/ 26 y 27a, Habana City, Cuba"}
            />
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={200}>
            <ContactItem
              titulo={"MAIL ME"}
              ico={"fa-envelope"}
              adress={"enriquegrassporras@gmail.com"}
            />
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={300}>
            <ContactItem
              titulo={"CALL ME"}
              ico={"fa-phone"}
              adress={"+53 58428530"}
            />
          </AnimatedElement>
        </div>

        {/* Social Media Buttons */}
        <AnimatedElement
          animation="fadeInUp"
          delay={400}
          className="flex gap-3"
        >
          <MDBBtn
            floating
            className="m-1 transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: "#1877f2" }}
            href="https://www.facebook.com/Enrique_Grass_Porras"
            role="button"
            aria-label="Facebook"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: "#1da1f2" }}
            href="https://twitter.com"
            role="button"
            aria-label="Twitter"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: "#ff0000" }}
            href="https://www.youtube.com/"
            role="button"
            aria-label="YouTube"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: "#0077b5" }}
            href="https://www.linkedin.com/"
            role="button"
            aria-label="LinkedIn"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
        </AnimatedElement>
      </AnimatedElement>

      {/* Right Column - Contact Form */}
      <AnimatedElement
        animation="fadeInRight"
        delay={200}
        className="flex flex-col lg:w-2/3 md:w-1/2 sm:w-full"
      >
        <div className="h-full w-full flex items-center justify-center md:px-8">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-wrap justify-between">
              <AnimatedElement
                animation="fadeInUp"
                delay={300}
                className="lg:w-5/12 md:w-full sm:w-full"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-full bg-elevated border border-border-default h-12 text-primary text-base focus:bg-elevated focus:border-brand-yellow focus:text-primary w-full px-4 transition-all duration-300"
                  placeholder="YOUR NAME"
                  type="text"
                  required
                  aria-label="Your name"
                />
              </AnimatedElement>
              <AnimatedElement
                animation="fadeInUp"
                delay={400}
                className="lg:w-5/12 md:w-full sm:w-full"
              >
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-full bg-gray-900 border border-gray-700 h-12 text-white text-base focus:bg-gray-800 focus:border-yellow-500 focus:text-white w-full px-4 transition-all duration-300"
                  placeholder="YOUR EMAIL"
                  type="email"
                  required
                  aria-label="Your email"
                />
              </AnimatedElement>
            </div>

            <AnimatedElement
              animation="fadeInUp"
              delay={500}
              className="flex w-full mt-4"
            >
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="rounded-full bg-elevated border border-border-default h-12 text-primary text-base focus:bg-elevated focus:border-brand-yellow focus:text-primary w-full px-4 transition-all duration-300"
                placeholder="YOUR SUBJECT"
                type="text"
                required
                aria-label="Subject"
              />
            </AnimatedElement>

            <AnimatedElement
              animation="fadeInUp"
              delay={600}
              className="flex w-full mt-4"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-2xl bg-elevated border border-border-default min-h-48 max-h-64 text-primary text-base focus:bg-elevated focus:border-brand-yellow focus:text-primary mb-4 w-full p-4 transition-all duration-300 resize-none"
                placeholder="YOUR MESSAGE"
                required
                aria-label="Your message"
              />
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={700}>
              <Button
                type="submit"
                buttons="SEND MESSAGE"
                ico="fa-paper-plane"
                href="#"
              />
            </AnimatedElement>
          </form>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ContactSection;
