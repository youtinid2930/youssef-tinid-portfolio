export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          I am a software engineering student passionate about building web applications and exploring AI solutions. 
          I enjoy solving problems, learning new technologies, and following best practices in development.
        </p>
        <ul className="text-gray-600 list-disc list-inside space-y-2">
          <li>Proficient in Java, Python, JavaScript, C/C++</li>
          <li>Experience with Spring Boot, Laravel, Next.js</li>
          <li>Learning real-world software architecture and CI/CD workflows</li>
        </ul>
      </div>
    </section>
  );
}
