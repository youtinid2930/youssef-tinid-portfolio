export default function Hero() {
    return (
        <section className="py-32 text-center">
            <h1 className="text-5xl font-bold mb-4">
                Hi, I'm Youssef Tinid
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Software engineering student building scalable web apps and explorting AI solutions.
            </p>
            <div className="flex justify-center gaps-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    See Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Contact me
                </a>
            </div>
        </section>
    )
}