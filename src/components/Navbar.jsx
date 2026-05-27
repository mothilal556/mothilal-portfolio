import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Mothilal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-black/90">

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>


          <a href="#certifications" onClick={() => setOpen(false)}>
            Certifications
          </a>

          <a href="#publications" onClick={() => setOpen(false)}>
            Publications
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}
    </nav>
  )
}

export default Navbar