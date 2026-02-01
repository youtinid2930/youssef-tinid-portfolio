export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid gap-12 md:grid-cols-5 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-3 space-y-8 text-left">
            <div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                Hello, I'm
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Youssef Tinid
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Software engineering student specializing in full-stack web
                development and AI-powered solutions. I build scalable
                applications with modern technologies and clean architecture.
              </p>
            </div>

            <div className="space-y-6">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-medium text-center"
                >
                  Contact Me
                </a>
              </div>

              <div className="text-sm text-gray-500">
                Currently studying Software Engineering • Open to internships &
                collaborations
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl -rotate-3"></div>

              {/* Image */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Youssef Tinid"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border">
                <div className="text-sm font-medium">Full Stack Dev</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
