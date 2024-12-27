import React from "react";
import heropic from "../assets/code.svg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import { TbBrandMysql } from "react-icons/tb";
import { RiPhpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="mt-32 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Database Enthusiast",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-2xl md:text italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hola, soy <br />
            <span className="text-blue-700">Fabio Daniel</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            Desarrollador de 22 años con experiencia en lenguajes y frameworks
            backend y frontend
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                           border-blue-800 rounded-xl"
              href="./resumefd.pdf"
              download="resumefd.pdf"
            >
              Descargar CV
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-800 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.github.com/dfabiorc/">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="linkedin.com/in/fabio-daniel-3790a6305">
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={heropic}
          className="w-[0px] md:w-[200px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">Tech Stack</p>
        <TbBrandMysql  className="text-orange-600 mx-2" />
        <RiPhpLine  className="text-green-600 mx-2" />
        <FaPython className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <BiLogoCPlusPlus className="text-blue-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
