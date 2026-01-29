import SkillCard from "@/components/ui/SkillCard";

const languages = ["Java", "Python", "JavaScript", "C/C++"];
const frameworks = ["Spring Boot", "Laravel", "Next.js"];
const tools = ["Git", "Docker", "Linux", "n8n"];
const concepts = ["REST APIs", "MVC", "Authentication", "CI/CD basics"];

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <SkillCard key={lang} name={lang} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((fw) => (
              <SkillCard key={fw} name={fw} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <SkillCard key={tool} name={tool} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Concepts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {concepts.map((concept) => (
              <SkillCard key={concept} name={concept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
