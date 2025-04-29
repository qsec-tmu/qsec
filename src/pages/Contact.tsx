import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "0";
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "-100%";
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_xuuod99",     // Replace with your EmailJS service ID
        "template_aa5drnn",    // Replace with your EmailJS template ID
        form.current!,
        "o9IsURtmzEJlHqWKr"      // Replace with your EmailJS public key
      )
      .then(
        () => {
          setMessageSent(true);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setError(true);
        }
      );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <nav className="absolute top-4 left-0 w-full flex justify-between items-center px-6">
          <div
            id="navLinks"
            className="fixed top-0 right-[-100%] w-64 h-full bg-gray-800 flex flex-col gap-6 items-end px-6 pt-20 transition-all duration-300 z-50"
          >
            <i className="fa fa-times text-2xl cursor-pointer" onClick={hideMenu}></i>
          </div>
          <i className="fa fa-bars text-white text-2xl cursor-pointer md:hidden" onClick={showMenu}></i>
        </nav>
        <h1 className="text-5xl font-bold mt-10">Contact Us</h1>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.543636873405!2d-79.38137662448821!3d43.657662352143085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb35431c1395%3A0xe8ed8bd69125d6f4!2sToronto%20Metropolitan%20University!5e0!3m2!1sen!2sca!4v1725328449581!5m2!1sen!2sca"
          className="w-full h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <i className="fa-regular fa-envelope text-pink-500 text-2xl"></i>
              <div>
                <h5 className="text-xl font-semibold">qsectmus@gmail.com</h5>
                <p className="text-gray-400">Email us your questions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fab fa-instagram text-pink-500 text-2xl"></i>
              <div>
                <h5 className="text-xl font-semibold">
                  <a
                    href="https://www.instagram.com/qsec_tmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition"
                  >
                    @qsec_tmu
                  </a>
                </h5>
                <p className="text-gray-400">Follow us on Instagram</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fab fa-discord text-pink-500 text-2xl"></i>
              <div>
                <h5 className="text-xl font-semibold">
                  <a
                    href="https://discord.com/invite/k9fhQZ6Mvp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition"
                  >
                    Join our Discord
                  </a>
                </h5>
                <p className="text-gray-400">Join our Discord Server</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                required
                className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 px-6 rounded"
              >
                Send Message
              </button>
              {messageSent && (
                <p className="text-green-400 mt-2">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-400 mt-2">Failed to send message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-800 text-center py-12 px-4">
        <h4 className="text-2xl font-semibold mb-4">About Us</h4>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-6">
          At QSEC, we aim to provide a platform where quantum enthusiasts can connect,
          delve into the field, and foster valuable relationships. We also welcome
          newcomers to this ever-intriguing space.
        </p>
        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <i className="fa-brands fa-facebook-f hover:text-pink-500 cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-pink-500 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin-in hover:text-pink-500 cursor-pointer"></i>
        </div>
      </section>
    </div>
  );
};

export default Contact;
