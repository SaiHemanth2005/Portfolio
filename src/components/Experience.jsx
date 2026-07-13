import { motion } from "framer-motion";
import experience from "../data/experience";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience-section">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        My growth from learning programming to building AI and Full Stack projects.
      </motion.p>

      <div className="timeline">

        <div className="timeline-line"></div>

        {experience.map((item, index) => (

          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span className="year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

             {item.company && (
              <h4 className="company">
                {item.company}
                </h4>
                )}

              {item.duration && (
                  <span className="duration">
                    {item.duration}
                  </span>
                )}

                {item.location && (
                  <p className="location">
                    📍 {item.location}
                  </p>
                )}

                <p>{item.description}</p>
              
              

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}