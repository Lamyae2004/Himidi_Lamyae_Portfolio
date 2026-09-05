import { RevealOnScroll } from "../RevealOnScroll";
export const About = () =>{
const frontendSkills = [
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap"
];

const backendSkills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Microservices",
  "JWT"
];

const databaseSkills = [
  "PostgreSQL",
  "MySQL"
];

const devopsSkills = [
  "Git",
  "GitLab",
  "Docker",
  "Docker Compose",
  "GitLab CI/CD"
];

const toolsSkills = [
  "Postman",
  "Swagger / OpenAPI",
  "IntelliJ IDEA",
  "VS Code"
];

const dataSkills = [
  "Python",
  "Power BI",
  "Talend",
  "R",
  "Business Intelligence"
];

return (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        {/* Introduction */}
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">

          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a Computer Engineer and Full Stack Developer passionate about
            building modern, scalable, and meaningful software solutions.
            My main focus is Java, Spring Boot, Microservices, and React.js,
            with hands-on experience developing web applications and REST APIs.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I recently completed my engineering degree and my final-year
            internship at Smalter, where I contributed to the development of
            an ERP SaaS solution using Spring Boot, React.js, PostgreSQL, and
            a microservices architecture. I'm always curious, eager to learn,
            and ready to turn challenging ideas into clean and practical solutions.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>

              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>

              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Database</h3>

              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">DevOps</h3>

              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools</h3>

              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & BI */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Data & BI</h3>

              <div className="flex flex-wrap gap-2">
                {dataSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">

            <h3 className="text-xl font-bold mb-4">
              Education
            </h3>

            <ul className="text-gray-300 space-y-4">

              <li>
                <strong className="text-white">
                  Engineering Degree in Computer Engineering
                </strong>
                <br />
                National School of Applied Sciences, Kenitra
                <span className="block text-sm text-gray-400">
                  2023 – 2026
                </span>
              </li>

              <li>
                <strong className="text-white">
                  Integrated Preparatory Classes
                </strong>
                <br />
                National School of Applied Sciences, Kenitra
                <span className="block text-sm text-gray-400">
                  2021 – 2023
                </span>
              </li>

            </ul>
          </div>

          {/* Experiences */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">

            <h3 className="text-xl font-bold mb-4">
              Experiences
            </h3>

            <div className="space-y-6 text-gray-300">

              {/* PFE */}
              <div>
                <h4 className="font-bold text-white">
                  Full Stack Developer Intern — Smalter, Rabat
                </h4>

                <p className="text-sm text-pink-400 mb-2">
                  Feb 2026 – Jul 2026 · Final-Year Internship
                </p>

                <p className="leading-relaxed">
                  Contributed to the development of an ERP SaaS solution for
                  Egyptian SMEs using Spring Boot, React.js, PostgreSQL, and
                  a microservices architecture. Developed REST APIs,
                  implemented business features, managed data, and contributed
                  to the integration of different services.
                </p>
              </div>

              {/* Perfect Industry */}
              <div>
                <h4 className="font-bold text-white">
                  Assistant Engineer Intern — Perfect Industry, Kenitra
                </h4>

                <p className="text-sm text-pink-400 mb-2">
                  Jun 2025 – Aug 2025
                </p>

                <p className="leading-relaxed">
                  Developed an internal web application for managing company
                  processes, including purchase and sales requests, quotes,
                  invoices, and inventory. Implemented dashboards and reports
                  using React.js, Node.js / Express, and MySQL.
                </p>
              </div>

              {/* Marsa Maroc */}
              <div>
                <h4 className="font-bold text-white">
                  Web Development Intern — Marsa Maroc, Casablanca
                </h4>

                <p className="text-sm text-pink-400 mb-2">
                  Jul 2024 – Aug 2024
                </p>

                <p className="leading-relaxed">
                  Developed an internal web application using React.js and
                  Node.js to improve supplier, printer, and equipment
                  management, including automated email notifications.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </RevealOnScroll>
  </section>
);
}