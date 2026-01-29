type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
};

export default function ProjectCard({ name, description, stack, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span key={tech} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className="mt-auto text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}
