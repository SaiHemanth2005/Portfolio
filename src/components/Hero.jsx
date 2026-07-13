import hero from "../assets/images/hero.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h3 className="hero-greet">
          👋 Hello, I'm
        </h3>

        <h1 className="hero-title">
          Koyyana <br />
          <span>Sai Hemanth</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "C++ Developer",
            2000,
            "React Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="typing"
        />

        <p className="hero-desc">
          Passionate Software Engineering student focused on building
          scalable web applications, solving real-world problems and
          continuously learning modern technologies.
        </p>

        <div className="hero-buttons">

          <a href="/Resume.pdf" download>
            <button className="btn">
              <FaDownload />
              Resume
            </button>
          </a>

          <a
            href="https://github.com/SaiHemanth2005"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn secondary">
              <FaGithub />
              GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/sai-hemanth-koyyana-3b20b9387/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn secondary">
              <FaLinkedin />
              LinkedIn
            </button>
          </a>

          <a href="#contact">
            <button className="btn contact">
              <FaEnvelope />
              Contact
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image-box">
          <img
            src={hero}
            alt="Koyyana Sai Hemanth"
            className="hero-img"
          />
        </div>

      </div>

    </section>
  );
}