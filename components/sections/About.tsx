import Container from "@/components/layout/Container";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-left">
          {/* Title */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 rounded-full" />
          </div>

          {/* Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              I'm a passionate software engineering student focused on building
              scalable web applications and exploring cutting-edge AI solutions.
              I enjoy transforming complex challenges into elegant, efficient
              software.
            </p>

            {/* Bullet points */}
            <div className="space-y-6">
              <Item color="blue">
                Proficient in{" "}
                <span className="font-semibold text-blue-600">
                  Java, Python, JavaScript, C/C++
                </span>{" "}
                with hands-on full-stack experience
              </Item>

              <Item color="purple">
                Building with modern frameworks like{" "}
                <span className="font-semibold text-purple-600">
                  Spring Boot, Laravel, Next.js
                </span>{" "}
                following industry best practices
              </Item>

              <Item color="cyan">
                Continuously learning{" "}
                <span className="font-semibold text-cyan-600">
                  system design, CI/CD workflows
                </span>{" "}
                and real-world software architecture
              </Item>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-6">
              <Stat value="4+" label="Years Coding" />
              <Stat value="10+" label="Projects Built" />
              <Stat
                value="5+"
                label="Technologies"
                className="col-span-2 md:col-span-1"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Small internal helpers (clean & readable) */

function Item({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "blue" | "purple" | "cyan";
}) {
  const colors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
  };

  return (
    <div className="flex items-start space-x-4">
      <span
        className={`mt-2 w-2 h-2 rounded-full ${colors[color]}`}
      />
      <p className="text-gray-600 flex-1">{children}</p>
    </div>
  );
}

function Stat({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-gray-600 text-sm mt-1">{label}</div>
    </div>
  );
}
