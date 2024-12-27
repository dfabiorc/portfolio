import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">Sobre <span>Mí</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Desarrollador de 22 años con experiencia en lenguajes y frameworks backend y frontend,
                     así como en bases de datos relacionales y entornos de programación móvil y de escritorio. 
                     Me apasiona crear soluciones tecnológicas escalables y eficientes, combinando habilidades 
                     técnicas con un enfoque en la experiencia de usuario.
                    </p>
                </div>

            </div>
            <div>
            <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                            Mail
                        </h3>
                        <a href="mailto:dfabiorc@outlook.com"><span>dfabiorc@outlook.com</span></a>
                    </div>
                </div>
            </div>

            

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact