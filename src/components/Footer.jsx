const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        <p className="text-gray-400 text-center md:text-left">
          © 2026 Mothilal Tadiparthi. All Rights Reserved.
        </p>

        <div className="flex items-center gap-3">

          <span className="text-gray-400">
            Visitors:
          </span>

          <img
  src="https://hitwebcounter.com/counter/counter.php?page=77777111&style=0038&nbdigits=5&type=ip&initCount=1"
  title="Visitor Counter"
  alt="visitor counter"
/>

        </div>

      </div>
    </footer>
  )
}

export default Footer