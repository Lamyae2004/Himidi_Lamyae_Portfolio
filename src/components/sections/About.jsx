import { RevealOnScroll } from "../RevealOnScroll";
export const About = () =>{
    const frontendSkills = [
  "React",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS"
];

const backendSkills = [
  "Node.js",
  "PHP",
  "Java",
  "Spring Boot",
  "Spring Data",
  "Ruby On Rails",
  "C#"
];

     return <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">I'm a passionate and curious computer engineering student in my fourth year, always eager to learn, explore new technologies, and take on meaningful challenges.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                   <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech)=> (
                        <span key={tech}
                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                        hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                          {tech}  
                        </span>
                      ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                   <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech)=> (
                        <span key={tech}
                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                        hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                          {tech}  
                        </span>
                      ))}
                    </div>
                </div>
              
            </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
               <h3 className="text-xl font-bold mb-4">Education</h3>
               <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                   Engineering Cycle in Computer Engineering
                  </strong> -National School of Applied Sciences, Kenitra |2023-2026
                </li>
                <li>
                  <strong>
                  Integrated Preparatory Classes
                  </strong> -National School of Applied Sciences, Kenitra |2021-2022
                </li>
               </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
               <h3 className="text-xl font-bold mb-4">Experiences</h3>
                <div className="space-y-4 text-gray-300">
                   <div>
                    <h4 className="font-semibold"> Intern at MARSA MAROC Casablanca (07/2024 - 08/2024)</h4>
                    <p>Designed and developed a web application for Marsa Maroc to manage printers and toner inventory.
                    The solution automates supplier, printer, and stock management processes, integrates automated email
                     notifications, and significantly enhances operational efficiency.

</p>
                   </div>
                    <div>
                    <h4 className="font-semibold"> Intern at Perfect Industry Kenitra (06/2025 - 08/2025)</h4>
                    <p>Development of an internal web application for comprehensive company process management: creation and tracking of purchase/sales requests, management of quotes, invoices, and inventory, as well as automatic document generation. Implementation of dashboards with reports and charts to visualize activity and profitability, using React.js, Node.js/Express, and MySQL

</p>
                   </div>
                </div>
              </div>
         </div>
      </div>
      </RevealOnScroll>
     </section>
}