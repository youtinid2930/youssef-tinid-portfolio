"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider inline-block mb-2">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Highlights
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Interactive showcase of my key projects. Navigate through to explore each one.
          </p>
        </div>

        <div className="relative">

          {/* Desktop Carousel Navigation */}
          <div className="hidden lg:flex items-center justify-between absolute top-1/2 left-0 right-0 z-10 -translate-y-1/2">
            <button
              onClick={prevProject}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Previous project"
            >
              <span className="text-2xl group-hover:-translate-x-0.5 transition-transform">←</span>
            </button>
            <button
              onClick={nextProject}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Next project"
            >
              <span className="text-2xl group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* Active Project Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: Project Visual */}
              <div className="relative min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 p-6 sm:p-8">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:p-8">
                  <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 text-white">
                    {projects[activeIndex].icon || "💻"}
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-white">
                    {projects[activeIndex].name}
                  </div>
                  <div className="text-lg sm:text-xl text-white/90">
                    {projects[activeIndex].type || "Full Stack Project"}
                  </div>
                </div>

                {/* Project tech overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 flex flex-wrap gap-2">
                  {projects[activeIndex].stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {projects[activeIndex].stack.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium">
                      +{projects[activeIndex].stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="p-6 sm:p-10">
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {projects[activeIndex].name}
                    </h3>
                    {projects[activeIndex].status && (
                      <span className="mt-2 sm:mt-0 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                        {projects[activeIndex].status}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {projects[activeIndex].description}
                  </p>
                </div>

                {/* Full Tech Stack */}
                <div className="mb-6 sm:mb-10">
                  <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-4">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {projects[activeIndex].stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div>
                  {projects[activeIndex].link ? (
                    <a
                      href={projects[activeIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
                    >
                      <span>View on GitHub</span>
                      <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  ) : (
                    <div className="text-center py-3 sm:py-4 border border-gray-200 rounded-xl text-gray-500 text-sm sm:text-base">
                      🔒 Private Repository
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Thumbnails Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-300
                  ${activeIndex === index 
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  }`}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  {project.icon || "💻"}
                </div>
                <span className={`font-medium text-center text-sm sm:text-base ${
                  activeIndex === index ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {project.name}
                </span>
                <div className="text-xs text-gray-500 mt-1">
                  {project.type?.split(' ')[0] || 'Project'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/youtinid2930"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold group"
          >
            <span>Explore All Projects on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
