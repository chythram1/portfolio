import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Software Engineering Intern at Markel",
    description: "jjjj",
    image: "/projects/project1.png",
    tags: ["Python", "Azure Databricks", "SQL", "Jira", "Power BI", "C#", "Angular.js"],
    
  },
  {
    id: 2,
    title: "IT Intern at Indivior",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/experience2.gif",
    tags: ["Power BI", "ServiceNow", "Azure AD", "Adobe Premire Pro", "Excel"],
    
  },
  {
    id: 3,
    title: "Research Assistant at the Intrusion Detection Lab (VCU)",
    description:
      "Research Project aimed at understanding conspiracy theory propagation networks on Twitter",
    image: "/projects/experience3.png",
    tags: ["Python", "Twitter", "Tweepy", "OverLeaf", "LaTeX", "Data Analysis"],
    demoUrl: "https://ieeexplore.ieee.org/document/10154285",
    
  },
];

export const ExperienceSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-[#00FFC6]"> Experience </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent internship and research experiences!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
    </section>
  );
};
