import contactProfile from '../assets/contact-profile.jpg'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={contactProfile}
              alt="Mothilal"
              className="w-52 h-52 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-300">

          {/* Email Click */}
          <a
            href="mailto:mothilal556@gmail.com"
            className="flex items-center gap-3 hover:text-cyan-400 duration-300"
          >
            📧 mothilal556@gmail.com
          </a>

          {/* Mobile Click */}
          <a
            href="tel:+918179138288"
            className="flex items-center gap-3 hover:text-cyan-400 duration-300"
          >
            📱 +91 8179138288
          </a>

          {/* Location */}
          <p className="flex items-center gap-3">
            📍 Andhra Pradesh, India
          </p>

        </div>


        </div>
      </div>
    </section>
  )
}

export default Contact