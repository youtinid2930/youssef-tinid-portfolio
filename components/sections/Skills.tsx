import SkillCard from "@/components/ui/SkillCard";

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "C/C++"],
    color: "blue"
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Laravel", "Next.js", "React"],
    color: "purple"
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Linux", "n8n"],
    color: "green"
  },
  {
    category: "Concepts",
    items: ["REST APIs", "MVC Pattern", "Authentication", "CI/CD Basics"],
    color: "orange"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies I work with to build modern applications
          </p>
        </div>

        <div className="space-y-16">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-1 bg-${skillGroup.color}-500 rounded-full`}></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {skill === "Java" && "☕"}
                      {skill === "Python" && "🐍"}
                      {skill === "JavaScript" && "📜"}
                      {skill === "C/C++" && "⚙️"}
                      {skill === "Spring Boot" && "🌱"}
                      {skill === "Laravel" && "🪶"}
                      {skill === "Next.js" && "▲"}
                      {skill === "React" && "⚛️"}
                      {skill === "Git" && "📊"}
                      {skill === "Docker" && "🐳"}
                      {skill === "Linux" && "🐧"}
                      {skill === "n8n" && "🔄"}
                      {skill === "REST APIs" && "🔗"}
                      {skill === "MVC Pattern" && "🏗️"}
                      {skill === "Authentication" && "🔐"}
                      {skill === "CI/CD Basics" && "⚡"}
                    </div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 italic">
            Always learning and adding new technologies to my toolkit
          </p>
        </div>
      </div>
    </section>
  );
}