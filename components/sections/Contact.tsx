import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {

  type Color = "blue" | "gray" | "orange";

  const contactLinks: {
  name: string;
  value: string;
  href: string;
  icon: any;
  color: Color;
  description: string;
}[] = [
  {
    name: "Email",
    value: "tinidyoussef.pro@gmail.com",
    href: "mailto:tinidyoussef.pro@gmail.com",
    icon: FiMail,
    color: "blue",
    description: "Send me an email"
  },
  {
    name: "LinkedIn",
    value: "youssef-tinid",
    href: "https://www.linkedin.com/in/youssef-tinid/",
    icon: FiLinkedin,
    color: "blue",
    description: "Connect professionally"
  },
  {
    name: "GitHub",
    value: "youtinid2930",
    href: "https://github.com/youtinid2930",
    icon: FiGithub,
    color: "gray",
    description: "View my projects"
  },
];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200",
    gray: "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-200",
    orange: "bg-orange-100 text-orange-600 hover:bg-orange-200 border-orange-200"
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : "_self"}
                rel={link.name !== "Email" ? "noopener noreferrer" : ""}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${colorClasses[link.color]}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">{link.name}</div>
                    <div className="text-lg font-medium mb-1">{link.value}</div>
                    <div className="text-sm opacity-80">{link.description}</div>
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Location & Availability */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <FiMapPin className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">Based in Morocco</div>
                <div className="opacity-80">Open to remote opportunities worldwide</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-3xl">✅</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">Available</div>
                <div className="opacity-80">For internships & collaborations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="mailto:tinidyoussef.pro@gmail.com"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg group"
          >
            <span>Start a Conversation</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <p className="text-gray-600 mt-4">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}