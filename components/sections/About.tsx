export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
      
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center md:text-left">
          {/* Title with gradient underline */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 rounded-full"></div>
          </div>
          
          {/* Content with card styling */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I'm a passionate software engineering student focused on building scalable web applications 
              and exploring cutting-edge AI solutions. I thrive on transforming complex challenges into 
              elegant, efficient software solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-600 flex-1">
                  Proficient in <span className="font-semibold text-blue-600">Java, Python, JavaScript, C/C++</span> 
                  with hands-on experience across the stack
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-600 flex-1">
                  Building with modern frameworks like <span className="font-semibold text-purple-600">Spring Boot, Laravel, Next.js</span> 
                  and following best practices
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                <p className="text-gray-600 flex-1">
                  Continuously learning <span className="font-semibold text-cyan-600">real-world software architecture, CI/CD workflows,</span> 
                  and system design principles
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4+</div>
                <div className="text-gray-600 text-sm mt-1">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600 text-sm mt-1">Projects Built</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}