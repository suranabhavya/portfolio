import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { contacts, socials } from "../constants";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#272727] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <div className="grid grid-cols-3 mt-5">
          {socials.map((social) => (
            <div className="mt-10">
              <a href={social.link} target="_blank"><img src={social.icon} alt={social.social} className="w-12 h-12 object-contain" /></a>
              {/* <a href={contact.link}>{contact.text}</a> */}
            </div>
          ))}
        </div>
        <div className="mt-12">
          {contacts.map((contact) => (
            <div className="grid grid-cols-9 mt-5">
              <a href={contact.link} target="_blank"><img src={contact.icon} alt={contact.social} className="w-6 h-6 object-contain" /></a>
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
