import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'ESSistemas',
    period: 'Sep 2023 – Feb 2024',
    description:
      'Desarrollé un decodificador que procesaba la información JSON generada por sensores, como los de temperatura y CO₂, transformándola en datos estructurados para almacenarlos en bases de datos. Esto garantizó la integridad y disponibilidad de la información, facilitando su análisis posterior y mejorando la toma de decisiones basada en datos.',
  }
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencia</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=' border border-blue-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-blue-700/10'>
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>


    </div>
  )
}

export default Experience