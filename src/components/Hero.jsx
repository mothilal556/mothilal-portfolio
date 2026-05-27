import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'
import resume from '../assets/MOTHILAL_TADIPARTHI_RESUME.pdf'
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mothilal Tadiparthi
            </span>
          </motion.h1>

          <p className="mt-6 text-xl text-gray-300 leading-8">
            Assistant Professor | Computer Science and Engineering |
            Full Stack Developer
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="px-4 md:px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 duration-300"
            >
              Contact Me
            </a>


  {/* View Resume */}
  <a
    href={resume}
    target="_blank"
    rel="noreferrer"
    className="px-4 md:px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 duration-300"
  >
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href={resume}
    download
    className="px-4 md:px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 duration-300"
  >
    Download Resume
  </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="Mothilal"
              className="relative w-[280px] md:w-[400px] rounded-3xl border border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero