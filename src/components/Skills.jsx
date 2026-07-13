import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiFirebase,
  SiOpencv,
} from "react-icons/si";

import "./Skills.css";

const skills = [

{
icon:<FaReact/>,
name:"React",
color: "#61DAFB",
x:0,
y:-250,
},

{
icon:<FaHtml5/>,
name:"HTML",
color: "#E34F26",
x:-250,
y:-140,
},

{
icon:<FaCss3Alt/>,
name:"CSS",
color: "#1572B6",
x:520,
y:-140,
},

{
icon:<FaJsSquare/>,
name:"JavaScript",
color: "#F7DF1E",
x:-520,
y:-250,
},

{
icon:<SiCplusplus/>,
name:"C++",
color: "#00599C",
x:-160,
y:170,
},

{
icon:<FaJava/>,
name:"Java",
color: "#F89820",
x:180,
y:190,
},

{
icon:<SiPython/>,
name:"Python",
color: "#3776AB",
x:330,
y:90,
},

{
icon:<FaGithub/>,
name:"GitHub",
color: "#FFFFFF",
x:-330,
y:80,
},

{
icon:<FaGitAlt/>,
name:"Git",
color: "#F05032",
x:0,
y:320,
},

{
icon:<SiMysql/>,
name:"MySQL",
color: "#4479A1",
x:520,
y:300,
},

{
icon:<SiFirebase/>,
name:"Firebase",
color: "#FFCA28",
x:-380,
y:300,
},

{
icon:<FaLaptopCode/>,
name:"OpenAI",
color: "#10A37F",
x:280,
y:-250,
},

{
icon:<SiOpencv/>,
name:"OpenCV",
color: "#5C3EE8",
x:-560,
y:-10,
},

];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  return (
    <div className="skills-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        Technologies I use for building software, AI applications,
        and modern web experiences.
      </motion.p>

      <div className="skills-container">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              className="skill"
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={
                inView
                  ? {
                      x: skill.x,
                      y: skill.y,
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      x: 0,
                      y: 0,
                      scale: 0,
                      scale: 0,
                  }
              }
              transition={{
                duration: 1.2,
                delay: index * 0.08,
                type: "spring",
                stiffness: 80,
                damping: 12,
              }}
              whileHover={{
                scale: 1.2,
                y: -8,
              }}
            >
              <div 
              className="skill-icon"
              style={{color:skill.color}}>
                {skill.icon}
              </div>

              <span>{skill.name}</span>
            </motion.div>
          );
        })}

        <motion.div
          className="core-circle"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
        >
          <FaLaptopCode />
        </motion.div>
      </div>
    </div>
  );
}