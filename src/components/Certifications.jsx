const certifications = [
  {
    title: 'The Joy of Computing using Python',
    org: 'NPTEL',
    year: 'Jul-Oct 2025',
    duration: '12 Weeks',
    score: '88% (Elite + Silver)',
  },

  {
    title: 'Problem Solving Through Programming in C',
    org: 'NPTEL',
    year: 'Jul-Oct 2024',
    duration: '12 Weeks',
    score: '67% (Elite)',
  },

  {
    title: 'Problem Solving Through Programming in C',
    org: 'NPTEL',
    year: 'Jul-Oct 2023',
    duration: '12 Weeks',
    score: '77% (Elite + Silver)',
  },

  {
    title: 'Programming in Java',
    org: 'NPTEL',
    year: 'Jan-Apr 2023',
    duration: '12 Weeks',
    score: '86% (Elite + Silver)',
  },

  {
    title: 'Programming in Java',
    org: 'NPTEL',
    year: 'Jul-Oct 2022',
    duration: '12 Weeks',
    score: '83% (Elite + Silver)',
  },

  {
    title: 'Python for Data Science',
    org: 'NPTEL',
    year: 'Aug-Sep 2019',
    duration: '4 Weeks',
    score: '77% (Elite + Silver)',
  },

  {
    title: 'RPA Developer Foundation (UiPath)',
    org: 'UiPath Academy',
    year: 'May 2023',
    duration: '—',
    score: '—',
  },

  {
    title: 'RPA Developer Advanced (UiPath)',
    org: 'UiPath Academy',
    year: 'May 2023',
    duration: '—',
    score: '—',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Certifications
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {cert.title}
            </h3>

            <div className="mt-5 space-y-2 text-gray-300">
              <p>🏢 Organization: {cert.org}</p>
              <p>📅 Year: {cert.year}</p>
              <p>⏳ Duration: {cert.duration}</p>
              <p>🏆 Result: {cert.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications