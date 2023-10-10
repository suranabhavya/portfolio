import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-2 sm:h-30 h-20 cyan-gradient-upside-down' />
          <div className='w-5 h-20 rounded-full bg-[#008B8B]' />
          <div className='w-2 sm:h-80 h-40 cyan-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            👋Hey Folks, <br className='sm:block hidden' /> 
            <span className='text-[#008B8B]'>I'm Bhavya Surana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            🖥️Passionate Tech Enthusiast <br className='sm:block hidden' />
            🧠Experienced Software Developer <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
