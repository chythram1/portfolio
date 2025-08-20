import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 
  { name: "Python", level: 60, category: "technical" },
      { name: "Java", level: 70, category: "technical" },
         { name: "SQL", level: 70, category: "technical" },
   { name: "HTML/CSS", level: 50, category: "technical" },
  { name: "JavaScript", level: 50, category: "technical" },
  { name: "React", level: 40, category: "technical" },
  { name: "Tailwind CSS", level: 40, category: "technical" },
  { name: "Next.js", level: 40, category: "technical" },

  // Personal Skills
  { name: "Project Management/Agile", level: 95, category: "personal" },
  { name: "Communication", level: 95, category: "personal" },
  { name: "Leadership", level: 90, category: "personal" },
  { name: "Attention to Detail", level: 90, category: "personal" },

  // Tools
  { name: "VS Code", level: 95, category: "tools" },// FINISH ADDING SKILLS
     { name: "Microsoft 365 Apps", level: 95, category: "tools" },
  { name: "Power BI", level: 80, category: "tools" },
  { name: "Azure DataBricks", level: 80, category: "tools" },
  { name: "Adobe Premiere Pro", level: 80, category: "tools" },
  { name: "ServiceNow", level: 80, category: "tools" },
  { name: "FileMakerPro", level: 80, category: "tools" },
  { name: "AWS Web Services", level: 60, category: "tools" },
];

const categories = ["technical", "tools", "personal"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[#00FFC6]"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-[#00ffc6] text-black"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-2 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#00ffc6] h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
