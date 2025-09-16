import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaPython, 
  FaJs, 
  FaJava, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaServer,
  FaCode,
  FaTools
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTypescript, SiMysql, SiKubernetes, SiPostman, SiJupyter } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'C++', icon: 'C++', level: 95, color: 'bg-blue-500' },
        { name: 'C', icon: 'C', level: 95, color: 'bg-blue-600' },
        { name: 'Python', icon: FaPython, level: 80, color: 'bg-yellow-500' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: 'bg-yellow-400' },
        { name: 'Java', icon: FaJava, level: 90, color: 'bg-red-500' },
        { name: 'TypeScript', icon: SiTypescript, level: 50, color: 'bg-blue-400' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: 'bg-cyan-500' },
        { name: 'HTML5', icon: FaHtml5, level: 100, color: 'bg-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 100, color: 'bg-blue-500' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 75, color: 'bg-purple-500' },
        { name: 'Tailwind CSS', icon: 'TW', level: 95, color: 'bg-teal-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 95, color: 'bg-green-600' },
        { name: 'Express.js', icon: SiExpress, level: 90, color: 'bg-purple-600' },
        { name: 'Python Flask', icon: FaPython, level: 45, color: 'bg-red-400' },
        { name: 'REST APIs', icon: FaServer, level: 75, color: 'bg-indigo-500' },
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'bg-green-500' },
        { name: 'MySQL', icon: SiMysql, level: 95, color: 'bg-blue-600' },
        { name: 'PostgreSQL', icon: 'Pg', level: 30, color: 'bg-blue-700' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: FaTools,
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'bg-orange-600' },
        { name: 'VS Code', icon: 'VSC', level: 100, color: 'bg-blue-500' },
        { name: 'IntelliJ IDEA', icon: 'IJ', level: 100, color: 'bg-purple-600' },
        { name: 'Postman', icon: SiPostman, level: 70, color: 'bg-orange-400' },
        { name: 'Docker', icon: FaDocker, level: 30, color: 'bg-blue-500' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 30, color: 'bg-blue-600' },
        { name: 'AWS', icon: FaAws, level: 45, color: 'bg-orange-500' },
        { name: 'Jupyter', icon: SiJupyter, level: 70, color: 'bg-orange-600' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Technologies I work with and continue to learn
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="text-blue-500 text-2xl" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className="group relative"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 p-4 text-center hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center space-y-3">
                        {typeof skill.icon === 'string' ? (
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{skill.icon}</div>
                        ) : (
                          <skill.icon className="text-3xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                        )}
                        <span className="text-sm font-medium text-white group-hover:text-blue-500 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                      {skill.name} - {skill.level}%
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 card text-center"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Docker', 'Kubernetes', 'AWS', 'Codecov', 'Jupyter Notebook'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-500 text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
