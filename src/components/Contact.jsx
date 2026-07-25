import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <a href="tel:+916300341767" className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 6300341767</p>
        </a>

        <a href="mailto:hemu50524@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>hemu50524@gmail.com</p>
        </a>

        <a
          href="https://github.com/SaiHemanth2005"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>SaiHemanth2005</p>
        </a>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Hyderabad, Telangana, India</p>
        </div>

      </motion.div>

      <motion.div
        className="social-buttons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >

        <a
          href="https://github.com/SaiHemanth2005"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sai-hemanth-koyyana-3b20b9387/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a 
          href="https://drive.google.com/file/d/161lPQn0MxBZVeHqkSg1MFJOeVsdFq5V8/preview"
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaFileDownload />
          Resume
        </a>

      </motion.div>

    </section>
  );
}