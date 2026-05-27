const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Mothilal
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#experience">Teching Experience</a>
          <a href="#skills">Technical Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
