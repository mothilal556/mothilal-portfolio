const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 text-gray-300 leading-8 text-lg">
        <p>
          I am <span className="text-cyan-400 font-semibold">
            Mothilal Tadiparthi
          </span>, an enthusiastic and dedicated Assistant Professor with
          over 10 years of teaching experience in the field of Computer Science,
          Artificial Intelligence, and Data Science.
        </p>

        <br />

        <p>
          I specialize in modern technologies including
          <span className="text-purple-400">
            {" "}Java, Python, PHP, HTML, CSS, JavaScript, MongoDB, MySQL, Hadoop,
            and Full Stack Development
          </span>.
          I am passionate about building scalable web applications,
          automation systems, and interactive learning platforms.
        </p>

        <br />

        <p>
          Throughout my academic and professional journey, I have successfully
          developed and managed several college automation systems,
          result analysis portals, and institutional websites that improved
          operational efficiency and user experience.
        </p>

        <br />

        <p>
          Along with teaching, I actively mentor students in programming,
          project development, full stack technologies, and emerging areas
          like Artificial Intelligence and Data Analytics. I strongly believe
          in practical learning, innovation, and continuous skill enhancement.
        </p>

        <br />

        <p>
          I have earned multiple
          <span className="text-cyan-400">
            {" "}NPTEL Elite + Silver certifications{" "}
          </span>
          in Java, C Programming, and Python for Data Science, which reflect
          my commitment to continuous learning and technical excellence.
        </p>

        <br />

        <p>
          My objective is to inspire students, contribute to innovative
          educational environments, and create impactful technology solutions
          that combine creativity, knowledge, and real-world applications.
        </p>
      </div>
    </section>
  )
}

export default About