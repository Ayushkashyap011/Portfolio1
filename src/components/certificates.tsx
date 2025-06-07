import { motion } from "framer-motion";

import { CERTIFICATES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export const Certificates = () => {
  return (
    <SectionWrapper idName="certificates">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my certificates showcasing my skills and learning journey.
        </motion.p>

        {/* Certificates List */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-10 flex flex-wrap gap-10 justify-center"
        >
          {CERTIFICATES.map(({ name, image }, index) => (
            <div
              key={name}
              className="flex flex-col items-center w-[200px]"
            >
              <p className="text-white font-semibold mb-2">#{index + 1}</p>
              <img
                src={`/assets/certificates/${image}`}
                alt={name}
                className="w-full h-auto rounded-md"
              />
              <p className="text-white mt-2 text-center">{name}</p>
            </div>
          ))}
        </motion.div>
      </>
    </SectionWrapper>
  );
};
