import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a curious junior developer with a passion for crafting web
        experiences that people actually enjoy using. I specialize in React and
        love diving into things like Three.js to add a bit of "wow!" to my
        projects. While I may not know everything yet, I’m a fast learner with a
        "Google-first" problem-solving strategy (because let’s be real, even
        senior devs do that). I’m all about creating simple, clean, and
        functional solutions — with just a hint of magic. Ready to turn some
        wild ideas into reality? Let’s build something cool, and maybe break the
        internet (in a good way)! 😎
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
