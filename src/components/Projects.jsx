const projects = [
  {
    title: 'College Website',
    tech: 'PHP, HTML, CSS, JavaScript, MySQL',
    description:
      'Designed and developed the official college website with responsive UI, dynamic content management, department pages, admission details, notifications, and academic information portal for students and faculty.',
    link: 'http://vkrvnbcoe.org/',
  },

  {
    title: 'College Automation System (Staff Attendance and Salary Module)',
    tech: 'PHP, MySQL, Bootstrap, JavaScript',
    description:
      'Developed a complete staff automation platform to manage staff records, salary details, attendance management, and reporting system. The application streamlined institutional administrative operations with secure login and real-time data management.',

    modules: [
      'Enroll / Update / Delete / View Staff Data',
      'Enroll / Update / Delete / View Staff Salary',
      'Post / Update / Delete / View Staff Attendance',
      'View Staff Attendance Reports',
      'View Staff Salary Reports',
    ],

    link: 'http://automation.vkrvnbcoe.org/',
  },

  {
    title: 'College Results Management Portal',
    tech: 'PHP, MySQL, JavaScript, Bootstrap',
    description:
      'Built a comprehensive online result management and analysis system for students, faculty, and administrators. The system supports secure logins, marks management, result analysis, and automated memo generation.',

    modules: [
      'Admin Login',
      'Department Login',
      'Student Login',
      'Add / Update / Delete Student Data',
      'Add / Update / Delete Student Marks',
      'Subject Wise Result Analysis',
      'Student Wise Result Analysis',
      'Semester Wise Result Analysis',
      'Overall Marks Memo Generation',
    ],

    link: 'http://results.vkrvnbcoe.org/',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-[1.02] duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 w-fit"
              >
                Live Website
              </a>
            </div>

            <p className="mt-4 text-purple-300 font-medium">
              Technologies Used: {project.tech}
            </p>

            <p className="mt-6 text-gray-300 leading-8 text-lg">
              {project.description}
            </p>

            {project.modules && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4 text-white">
                  Key Modules:
                </h4>

                <ul className="grid md:grid-cols-2 gap-3">
                  {project.modules.map((module, i) => (
                    <li
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300"
                    >
                      • {module}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects