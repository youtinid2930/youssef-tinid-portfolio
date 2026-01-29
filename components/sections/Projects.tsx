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
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive showcase of my key projects. Navigate through to explore each one.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-between absolute top-1/2 left-0 right-0 z-10 -translate-y-1/2">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Previous project"
            >
              <span className="text-2xl group-hover:-translate-x-0.5 transition-transform">←</span>
            </button>
            
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Next project"
            >
              <span className="text-2xl group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* Main Carousel Container */}
          <div className="relative">
            {/* Active Project Showcase */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-12">
              <div className="grid lg:grid-cols-2">
                {/* Left: Project Visual */}
                <div className="relative min-h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-white text-center">
                      <div className="text-8xl mb-6">
                        {projects[activeIndex].icon || "💻"}
                      </div>
                      <div className="text-4xl font-bold mb-4">{projects[activeIndex].name}</div>
                      <div className="text-xl opacity-90">{projects[activeIndex].type || "Full Stack Project"}</div>
                    </div>
                  </div>
                  
                  {/* Project info overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {projects[activeIndex].stack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {projects[activeIndex].stack.length > 3 && (
                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                          +{projects[activeIndex].stack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Right: Project Details */}
                <div className="p-10">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {projects[activeIndex].name}
                      </h3>
                      {projects[activeIndex].status && (
                        <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {projects[activeIndex].status}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                  
                  {/* Full Tech Stack */}
                  <div className="mb-10">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {projects[activeIndex].stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-4">
                    {projects[activeIndex].link ? (
                      <a
                        href={projects[activeIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
                      >
                        <span>View on GitHub</span>
                        <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    ) : (
                      <div className="text-center py-4 border border-gray-200 rounded-xl text-gray-500">
                        🔒 Private Repository
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Thumbnails Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-lg' 
                      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-3xl mb-3">
                    {project.icon || "💻"}
                  </div>
                  <span className={`font-medium text-center ${
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
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/youtinid2930"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold group"
          >
            <span>Explore All Projects on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}