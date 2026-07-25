import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaCertificate,
  FaUsers,
  FaBolt,
  FaClock,
} from "react-icons/fa";

import "./About.css";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "15+",
    title: "Projects",
    subtitle: "Completed",
  },

  {
    icon: <FaCode />,
    number: "12+",
    title: "Technologies",
    subtitle: "Worked With",
  },

  {
    icon: <FaCertificate />,
    number: "6+",
    title: "Certifications",
    subtitle: "Completed",
  },

  {
    icon: <FaBolt />,
    number: "8+",
    title: "Hackathons",
    subtitle: "Participated",
  },

  {
    icon: <FaClock />,
    number: "1000+",
    title: "Hours",
    subtitle: "Learning & Building",
  },

  {
    icon: <FaUsers />,
    number: "Team",
    title: "Collaboration",
    subtitle: "Problem Solver",
  },
];

export default function About() {
  return (
    <section className="about-section">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Highlights
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        A quick overview of my journey, experience, and technical growth.
      </motion.p>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            className="stat-card"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
          >
            <div className="stat-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}