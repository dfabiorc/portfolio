import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const studies = [
  {
    company: 'Institut Tecnològic de Barcelona',
    period: 'Sep 2021 – Mayo 2023',
    description:
      'Adquirí experiencia en programación con Kotlin en IntelliJ IDEA, desarrollo web con Node.js, PHP y JavaScript, manejo de bases de datos (PostgreSQL, MySQL). Además, desarrollé mis habilidades en diseño y prototipado (Bootstrap, Figma), y me familiaricé con metodologías ágiles (Scrum, Trello).',
  }
]



const Studies = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
    <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Estudios</h1>
    <motion.div
      className='space-y-8'
      initial="hidden"
      animate="visible"
    >
      {studies.map((experience, index) => (
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

export default Studies