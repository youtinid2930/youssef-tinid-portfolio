export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out for collaboration, projects, or just a chat!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:tinidyoussef.pro@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-tinid/"
            target="_blank"
            className="px-6 py-3 border border-gray-600 rounded hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/youtinid2930"
            target="_blank"
            className="px-6 py-3 border border-gray-600 rounded hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
