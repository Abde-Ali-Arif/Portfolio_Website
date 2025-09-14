import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowDown } from 'react-icons/fa'
import { ReactTyped } from "react-typed"


const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Abde-Ali-Arif', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/abde-ali-arif-a2205a317/', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/abde_ali_arif/', color: 'hover:text-pink-400' },
  ]

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      AA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Abde Ali Arif</span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4">
              <ReactTyped
                strings={[
                  'Open Source Contributor',
                  'DevOps Enthusiast',
                  'Full Stack Developer',
                  'Python Developer',
                  'React Developer',
                  'V Contributor',
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              />

            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From Bhopal, India — I enjoy building projects, automating workflows, and collaborating with the developer
              community while seamlessly blending creativity with technology.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"         // opens in new tab
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <FaDownload className="w-5 h-5" />
              <span>View Resume</span>
            </motion.a>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500 hover:text-purple-500 transition-colors duration-300"
          >
            <FaArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
