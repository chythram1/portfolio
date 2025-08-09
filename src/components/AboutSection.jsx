import { Briefcase, Code, User } from "lucide-react";
import { AboutMeCardDeck } from "./AboutMeCardDeck";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-[#00FFC6]"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student & Researcher
            </h3>

            <p className="text-muted-foreground">
              I’m passionate about using my technical skills to solve real-world problems and contribute to work that drives positive change.
            </p>

            <p className="text-muted-foreground">
             As a conference-published co-author and previous intern at three companies, I have extensive experience in working in both academic and real-world technical enviroments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="./projects/Chythra Malapati_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-[#00FFC6] text-[#00FFC6] hover:bg-[#00FFC6]/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
         <div className="flex justify-center">
            <AboutMeCardDeck />
          </div>
      </div>
      </div>
    </section>
  );
};
