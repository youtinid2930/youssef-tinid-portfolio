import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies I work with to build modern applications
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12 sm:space-y-16">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6 sm:space-y-8">
              
              {/* Group Title */}
              <div className="flex items-center space-x-4">
                <div
                  className="w-10 sm:w-12 h-1 rounded-full"
                  style={{ backgroundColor: skillGroup.color }}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center
                               hover:border-blue-300 hover:shadow-lg
                               transition-all duration-300 group"
                  >
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3
                                    group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    <div className="font-semibold text-sm sm:text-base text-gray-900
                                    group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-gray-600 italic text-sm sm:text-base">
            Always learning and adding new technologies to my toolkit
          </p>
        </div>
      </div>
    </section>
  );
}
