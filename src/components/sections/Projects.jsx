import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
    <RevealOnScroll>
    <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                Job-scraper
                </h3>
                <p className="text-gray-400 mb-4 ">
                A machine learning-based job listing scraper 
                that collects data from Moroccan recruitment portals,
                 categorizes job offers, and provides an interactive interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Java","Mysql","Swing"].map((tech,key)=> (
                       <span key={tech}
                       className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                       hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         {tech}  
                       </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Lamyae2004/job-scraper" className="text-purple-400 hover:text-purple-300 transition-colors my-4">View Project  </a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                Ensak Events
                </h3>
                <p className="text-gray-400 mb-4 ">
                A  web application to streamline the organization and management of school events.it allows users to  manage event details, participant lists, and schedules, providing an intuitive interface for both administrators and students.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Html","CSS","PHP"].map((tech,key)=> (
                       <span key={tech}
                       className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                       hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         {tech}  
                       </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Lamyae2004/ensak_events" className="text-purple-400 hover:text-purple-300 transition-colors my-4">View Project  </a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                GYMoNLINE
                </h3>
                <p className="text-gray-400 mb-4 ">
                A web application optimizing the management of sports activities, developed with Streamlit (Python) and Oracle APEX.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Streamlite","Mysql"].map((tech,key)=> (
                       <span key={tech}
                       className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                       hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         {tech}  
                       </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Lamyae2004/GYM" className="text-purple-400 hover:text-purple-300 transition-colors my-4">View Project  </a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                Mini-Compiler
                </h3>
                <p className="text-gray-400 mb-4 ">
                A compiler that checks Victor Hugo's poem "To the Mother of the Dead Child", translates it, and includes speech recognition and linguistic analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {[" Python"].map((tech,key)=> (
                       <span key={tech}
                       className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                       hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         {tech}  
                       </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Lamyae2004/CompilatonProject" className="text-purple-400 hover:text-purple-300 transition-colors my-4">View Project  </a>
                </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                MyAvito
                </h3>
                <p className="text-gray-400 mb-4 ">
                myAvito is a Ruby on Rails web application that closely replicates the design and some of the functionalities of Avito. It includes full CRUD operations, 
                secure custom authentication with Bcrypt (no Devise), and a simple UI built with pure CSS .

                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {[" Ruby on Rails ","Sqlite","CSS"].map((tech,key)=> (
                       <span key={tech}
                       className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                       hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         {tech}  
                       </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Lamyae2004/MyAvito" className="text-purple-400 hover:text-purple-300 transition-colors my-4">View Project  </a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
                Class Manager
            </h3>

            <p className="text-gray-400 mb-4">
                Class Manager is a web and mobile application designed for class management.
                The backend is built with Spring Boot, using Spring Security and JWT-based
                authentication, and follows a microservices architecture.
                The web frontend is developed with React.js and the Shadcn UI library,
                while the mobile application is built using Android Studio.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {[
                "Spring Boot",
                "Spring Security",
                "JWT",
                "Microservices",
                "React.js",
                "Shadcn UI",
                "Android Studio"
                ].map((tech) => (
                <span
                    key={tech}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm
                    hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                    {tech}
                </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <a
                href="https://github.com/Lamyae2004/ClassManager"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                View Project
                </a>
            </div>
            </div>

        </div>
    </div>
    </RevealOnScroll>
    </section>
}