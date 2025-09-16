import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/abdealiarif/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'DevOps Automation Tool',
      description: 'An automation tool for CI/CD pipelines built with Python and Docker. Streamlines deployment processes and reduces manual configuration time.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      github: 'https://github.com/abdealiarif/devops-automation',
      live: 'https://devops-automation.com',
      category: 'devops',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/abdealiarif/task-manager',
      live: 'https://taskmanager-demo.com',
      category: 'frontend'
    },
    {
      title: 'API Gateway Service',
      description: 'A microservices API gateway built with Node.js and Express. Handles authentication, rate limiting, and request routing for multiple services.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      github: 'https://github.com/abdealiarif/api-gateway',
      live: 'https://api-gateway-demo.com',
      category: 'backend'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for data visualization using React and D3.js. Supports multiple chart types and real-time data updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'SQLite'],
      github: 'https://github.com/abdealiarif/data-dashboard',
      live: 'https://data-dashboard-demo.com',
      category: 'frontend'
    },
    {
      title: 'V Language Parser',
      description: 'A syntax parser and AST generator for the V programming language. Contributes to the V language ecosystem and compiler development.',
      image: '/api/placeholder/600/400',
      technologies: ['V', 'C', 'Lex', 'Yacc', 'Git'],
      github: 'https://github.com/vlang/v',
      live: null,
      category: 'opensource',
      featured: true
    }
  ]

  const categories = [
    { name: 'All', icon: FaCode },
    { name: 'Full Stack', icon: FaServer },
    { name: 'Frontend', icon: FaCode },
    { name: 'Backend', icon: FaServer },
    { name: 'DevOps', icon: FaServer },
    { name: 'Open Source', icon: FaGithub }
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => {
        const categoryMap = {
          'Full Stack': 'fullstack',
          'Frontend': 'frontend',
          'Backend': 'backend',
          'DevOps': 'devops',
          'Open Source': 'opensource'
        }
        return project.category === categoryMap[selectedCategory]
      })

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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover="hover"
              className="group"
            >
              <div className="card h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-dark-200 rounded-full hover:bg-blue-500 transition-colors duration-300"
                      >
                        <FaGithub className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-dark-200 rounded-full hover:bg-purple-500 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
