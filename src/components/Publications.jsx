const publications = [
  {
    title:
      'Gray Scale Image Colorization using Convolutional Neural Network and PyTorch',

    conference:
      '5th International Conference on Expert Clouds and Applications (ICOECA)',

    year: '2025',

    publisher: 'IEEE',

    link: 'https://doi.org/10.1109/ICOECA66273.2025.00126',
  },

  {
    title:
      'SCIHYPO - A Deep Learning Framework for Data-Driven Scientific Hypothesis Generation from Extensive Literature Analysis',

    conference:
      '2024 International Conference on Expert Clouds and Applications (ICOECA)',

    year: '2024',

    publisher: 'IEEE',

    link: 'https://doi.org/10.1109/ICOECA62351.2024.00180',
  },

  {
    title:
      'Design and Implementation of a Chatbot for Automated Legal Assistance using Natural Language Processing and Machine Learning',

    conference:
      '2023 Annual International Conference on Emerging Research Areas: International Conference on Intelligent Systems (AICERA/ICIS)',

    year: '2023',

    publisher: 'IEEE',

    link: 'https://doi.org/10.1109/AICERA/ICIS59538.2023.10420298',
  },

  {
    title: 'Parallel Aggregation on Sharded Clusters',

    conference:
      'International Journal of Computer Sciences and Engineering',

    year: '2015',

    publisher: 'IJCSE',

    link: 'https://ijcseonline.org/index.php/j/article/view/656',
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-24 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 break-words">
        Publications
      </h2>

      <div className="max-w-7xl mx-auto space-y-8">

        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5 md:p-8 hover:scale-[1.01] duration-300"
          >

            {/* Clickable Title */}
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-cyan-400 leading-10 hover:text-purple-400 duration-300 break-words text-justify"
            >
              {pub.title}
            </a>

            <div className="mt-5 text-gray-300 space-y-2">
              <p>📚 Conference / Journal: {pub.conference}</p>
              <p>📅 Year: {pub.year}</p>
              <p>🏢 Publisher: {pub.publisher}</p>
            </div>

            {/* View Paper Button */}
            <div className="mt-6">
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 duration-300"
              >
                View Publication
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Publications