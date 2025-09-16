import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaGraduationCap, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const stats = [
    { icon: FaCode, label: 'Projects Built', value: '50+' },
    { icon: FaUsers, label: 'Open Source Contributions', value: '100+' },
    { icon: FaRocket, label: 'Years Experience', value: '3+' },
    { icon: FaGraduationCap, label: 'Technologies Mastered', value: '15+' },
  ]

  const interests = [
    { icon: FaCode, title: 'Coding', description: 'Building innovative solutions' },
    { icon: FaRocket, title: 'DevOps', description: 'Automating workflows & deployments' },
    { icon: FaUsers, title: 'Open Source', description: 'Contributing to community projects' },
    { icon: FaHeart, title: 'Anime & Manga', description: 'Passionate about storytelling' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Passionate developer blending creativity with technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Bhopal, India 🇮🇳</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold mb-4">Personal Description</h3>
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Abde Ali Arif from Bhopal, India — an Open Source and V contributor, and a DevOps enthusiast. 
                I enjoy building projects, automating workflows, and collaborating with the developer community while 
                seamlessly blending creativity with technology. Passionate about anime and manga, I also share knowledge 
                through writing and remain eager to learn, experiment, engage in discussions, and work on exciting new ideas.
              </p>
              <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                <span>😄 Pronouns: He/him</span>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-sm text-gray-400">
                <span>⚡ Fun fact: Acknowledged by Guido Van Rossum himself 🤯</span>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center"
                >
                  <stat.icon className="text-blue-500 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interests & Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-center">What I Love</h3>
              <div className="grid gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    whileHover={{ x: 10 }}
                    className="card flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <interest.icon className="text-blue-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{interest.title}</h4>
                      <p className="text-gray-400 text-sm">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Started Programming</h4>
                    <p className="text-gray-400 text-sm">Began my coding journey with C++ and Python</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Open Source Contributions</h4>
                    <p className="text-gray-400 text-sm">Started contributing to various open source projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">DevOps & Automation</h4>
                    <p className="text-gray-400 text-sm">Fell in love with automating workflows and deployments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">V Language Contributor</h4>
                    <p className="text-gray-400 text-sm">Contributing to the V programming language ecosystem</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
