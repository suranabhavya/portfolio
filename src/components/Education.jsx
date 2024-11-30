import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, school, duration, grade, icon }) => (
    <Tilt className='xs:w-[350px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full cyan-violet-gradient p-[2px] rounded-[100px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[100px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='school'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {school}
          </h3>

          <p className='text-secondary text-[14px]'>
            {duration}
          </p>

          <p className='text-secondary text-[14px]'>
            {grade}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );

const Education = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          Academics
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education History.
        </h2>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {educations.map((education, index) => (
          <EducationCard key={education.school} index={index} {...education} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
