import React from "react";
import "./Contact.module.css";

const Contact: React.FC = () => {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "0";
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "-200px";
  };

  return (
    <div>
      <section className="sub-header">
        <nav>
          <a href="index.html">
            <img src="Images/logo.png" alt="Logo" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="events.html">EVENTS</a></li>
              <li><a href="contact.html">CONTACT</a></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <h1>Contact Us</h1>
      </section>

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.543636873405!2d-79.38137662448821!3d43.657662352143085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb35431c1395%3A0xe8ed8bd69125d6f4!2sToronto%20Metropolitan%20University!5e0!3m2!1sen!2sca!4v1725328449581!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house"></i>
              <span>
                <h5>350 Victoria St</h5>
                <p>Toronto, ON M5B 2K3</p>
              </span>
            </div>
            <div>
              <i className="fa-regular fa-envelope"></i>
              <span>
                <h5>a11sandhu@torontomu.ca</h5>
                <p>Email us your inquiries</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form action="form-handler.php" method="post">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <textarea
                rows={8}
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>
          At QSEC, we aim to provide a platform where quantum enthusiasts can
          connect, delve into the field, and foster valuable relationships,{" "}
          <br />
          as well as introduce newcomers to this ever-intriguing field.
        </p>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </section>
    </div>
  );
};

export default Contact;


