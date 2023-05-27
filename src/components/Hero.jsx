import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typingOptions = [
    "Web Application",
    "Collaboration Tools",
    "Online Marketplaces",
    "E-commerce Platforms",
    "Content Management Systems",
    "Learning Management Systems",
    "Real-time Chat Applications",
    "Booking and Reservation Systems",
  ];  

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let interval;

    const type = () => {
      if (currentIndex === typingOptions.length) {
        currentIndex = 0;
      }

      const targetText = typingOptions[currentIndex];
      const targetLength = targetText.length;

      if (currentText.length < targetLength) {
        currentText = targetText.substring(0, currentText.length + 1);
        setTypedText(currentText);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(erase, 50);
        }, 2000);
      }
    };

    const erase = () => {
      if (currentText.length === 0) {
        currentIndex++;
        clearInterval(interval);
        interval = setInterval(type, 200);
      } else {
        currentText = currentText.substring(0, currentText.length - 1);
        setTypedText(currentText);
      }
    };

    interval = setInterval(type, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}  text-white`}>
            Hi, I'm <span className="text-[#915eff]">Shishir</span>
          </h1>
          <p className="{`${styles.heroSubText} mt-2 text-white-100`} font-bold text-4xl">
            I develop{" "}
            <span className="typing-animation text-[#915eff] text-4xl font-bold">{typedText}</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
