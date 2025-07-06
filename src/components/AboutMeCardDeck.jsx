import { useState } from "react";
import { Code, User, Briefcase, Music, Lock, ChartBar, PersonStandingIcon} from "lucide-react";
export const AboutMeCardDeck = () => {
  const cardData = [
    {
      title: "Data Analytics",
      icon: <ChartBar className="h-6 w-6 text-[#00ffc6]" />,
      content: "I am fascinated by how data tells stories. I have experience using Power BI, Python, and SQL to pull insights that drive action.",
    },
    {
      title: "Human Centered Design",
      icon: <User className="h-6 w-6 text-[#00ffc6]" />,
      content: "I am passionate about maximizing human experiences, optimizing processes for employees, and leveraging technology to create intuitive, efficient solutions that empower both users and organizations.",
    },
    {
      title: "Data Privacy",
      icon: <Lock className="h-6 w-6 text-[#00ffc6]" />,
      content: "I am interested in deploying and creating solutions that maximize user data privacy while maintaining functionality, transparency, and trust in digital systems. AI data privacy is something of big interest to me!"
    },
    {

      title: "Personal Hobbies",
      icon: <PersonStandingIcon className="h-6 w-6 text-[#00ffc6]" />,
      content: "In my freetime, I enjoy working out, listening to music, and trying new recipes!",
    },
    {
      title: "Favorite Album",
      content: (
        <div className="flex flex-col items-center text-center mt-2">
          <img
            src="./projects/blonde.jpeg"
            className="w-35 h-35 object-cover rounded-lg shadow-md mb-2"
          />
          <p className="font-semibold">“Blonde”</p>
          <p className="text-sm text-muted-foreground">by Frank Ocean</p>
          <a
            href="https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
            target="_blank"
            rel="noreferrer"
            className="mt-1 text-xs underline text-primary hover:text-primary/80"
          >
            Listen on Spotify
          </a>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const current = cardData[currentIndex];

  return (
  <div className="flex flex-col items-center">
    <div className="relative w-[450px] h-[370px] transition-transform duration-500 overflow-hidden">
      <div
        key={current.title}
         className="primary-foreground p-8 w-full h-full 
             rounded-3xl shadow-2xl backdrop-blur-sm 
             flex flex-col items-center justify-start gap-9 text-center 
             animate-fade-slide relative"
      >
        <button
          onClick={prevCard}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl 
                     text-muted-foreground hover:text-[#00FFC6] transition"
          aria-label="Previous"
        >
          ←
        </button>

        <h2 className="text-2xl font-semibold">{current.title}</h2>

       {current.title !== "Favorite Album" && (
  <div className="p-3 rounded-full bg-primary/10">
    {current.icon}
  </div>
)}

        <div className="text-muted-foreground text-big">
          {typeof current.content === "string" ? (
            <p>{current.content}</p>
          ) : (
            current.content
          )}
        </div>

        <button
          onClick={nextCard}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl 
                     text-muted-foreground hover:text-[#00FFC6] transition"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  </div>
);
};
