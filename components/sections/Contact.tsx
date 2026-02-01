import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

type Color = "blue" | "gray" | "orange";

type ContactLink = {
  name: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: Color;
  description: string;
};

export default function Contact() {
  const contactLinks: ContactLink[] = [
    {
      name: "Email",
      value: "tinidyoussef.pro@gmail.com",
      href: "mailto:tinidyoussef.pro@gmail.com",
      icon: FiMail,
      color: "blue",
      description: "Send me an email",
    },
    {
      name: "LinkedIn",
      value: "youssef-tinid",
      href: "https://www.linkedin.com/in/youssef-tinid/",
      icon: FiLinkedin,
      color: "blue",
      description: "Connect professionally",
    },
    {
      name: "GitHub",
      value: "youtinid2930",
      href: "https://github.com/youtinid2930",
      icon: FiGithub,
      color: "gray",
      description: "View my projects",
    },
  ];

  const colorClasses: Record<Color, string> = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200",
    gray: "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-200",
    orange:
      "bg-orange-100 text-orange-600 hover:bg-orange-200 border-orange-200",
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl text-left md:text-left">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about tech.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : "_self"}
                rel={
                  link.name !== "Email" ? "noopener noreferrer" : undefined
                }
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${colorClasses[link.color]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="flex-1 text-left">
                    <div className="text-xl sm:text-2xl font-bold mb-1">
                      {link.name}
                    </div>
                    <div className="text-base sm:text-lg font-medium mb-1 break-all">
                      {link.value}
                    </div>
                    <div className="text-sm opacity-80">
                      {link.description}
                    </div>
                  </div>

                  <div className="hidden sm:block text-2xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Location & Availability */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <FiMapPin className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">Based in Morocco</div>
                <div className="opacity-80">
                  Open to remote opportunities worldwide
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">Available</div>
                <div className="opacity-80">
                  For internships & collaborations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-left md:text-center">
          <a
            href="mailto:tinidyoussef.pro@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-base md:text-lg group"
          >
            <span>Start a Conversation</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
          <p className="text-gray-600 mt-4">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
