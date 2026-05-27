const skills = ['Java', 'Python', 'C', 'Php','HTML+CSS+JS', 'MySQL','MongoDB', 'UiPath', 'Hadoop', 'MS Office']

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">Technical Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
