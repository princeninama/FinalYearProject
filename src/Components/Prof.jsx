import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../assets/dialog";
import { Button } from "../assets/button";
import { Card, CardContent } from "../assets/card";
import { User, BookOpen, Award } from "lucide-react";
import img from "/robot.png";

const professors = [
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
];

const assistantProfessors = [
  {
    name: "Dr. Alice Brown",
    title: "Assistant Professor of Physics",
    bio: "Researcher in quantum mechanics.",
    portfolio: "Published research on quantum entanglement and its applications in quantum computing.",
    image: img,
  },
  {
    name: "Dr. Bob White",
    title: "Assistant Professor of Chemistry",
    bio: "Specialist in organic synthesis.",
    portfolio: "Developed innovative methods for synthesizing complex organic compounds.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    bio: "Expert in AI and Machine Learning.",
    portfolio: "Developed cutting-edge AI algorithms for autonomous vehicles and published over 50 papers in top-tier conferences.",
    image: img,
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Mathematics",
    bio: "Focus on Algebraic Structures.",
    portfolio: "Published groundbreaking research on non-commutative algebraic geometry and received the Fields Medal for exceptional contributions to mathematics.",
    image: img,
  },
];

export default function ProfessorProfiles() {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [isProfScrolling, setIsProfScrolling] = useState(false);
  const [isAsstProfScrolling, setIsAsstProfScrolling] = useState(false);

  const profScrollRef = useRef(null);
  const asstProfScrollRef = useRef(null);

  let profScrollTimeout = useRef(null);
  let asstProfScrollTimeout = useRef(null);

  const handleProfScroll = () => {
    setIsProfScrolling(true);
    if (profScrollTimeout.current) clearTimeout(profScrollTimeout.current);
    profScrollTimeout.current = setTimeout(() => setIsProfScrolling(false), 300);
  };

  const handleAsstProfScroll = () => {
    setIsAsstProfScrolling(true);
    if (asstProfScrollTimeout.current) clearTimeout(asstProfScrollTimeout.current);
    asstProfScrollTimeout.current = setTimeout(() => setIsAsstProfScrolling(false), 300);
  };

  useEffect(() => {
    const profScrollContainer = profScrollRef.current;
    const asstProfScrollContainer = asstProfScrollRef.current;

    if (profScrollContainer) {
      profScrollContainer.addEventListener("scroll", handleProfScroll);
    }
    if (asstProfScrollContainer) {
      asstProfScrollContainer.addEventListener("scroll", handleAsstProfScroll);
    }

    return () => {
      if (profScrollContainer) {
        profScrollContainer.removeEventListener("scroll", handleProfScroll);
      }
      if (asstProfScrollContainer) {
        asstProfScrollContainer.removeEventListener("scroll", handleAsstProfScroll);
      }
    };
  }, []);

  const renderCards = (data, ref, isScrolling) => (
    <div
      className={`overflow-x-auto pb-4 ${
        isScrolling ? "scroll-visible" : "scroll-hidden"
      }`}
      ref={ref}
    >
      <div className="flex space-x-6 min-w-max">
        {data.map((prof, index) => (
          <Card
            key={index}
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex-shrink-0 w-80"
            onClick={() => setSelectedProfessor(prof)}
          >
            <CardContent className="p-6">
              <img
                src={prof.image}
                alt={`Professor ${prof.name}`}
                className="w-48 h-48 rounded-full mb-4 mx-auto"
              />
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">{prof.name}</h3>
              </div>
              <p className="text-gray-600 mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{prof.title}</span>
              </p>
              <p className="text-gray-500">{prof.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Professor Profiles</h2>
      {renderCards(professors, profScrollRef, isProfScrolling)}

      <h2 className="text-3xl font-bold mb-6 text-center">Assistant Professor Profiles</h2>
      {renderCards(assistantProfessors, asstProfScrollRef, isAsstProfScrolling)}

      <Dialog open={!!selectedProfessor} onOpenChange={() => setSelectedProfessor(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedProfessor?.name}</DialogTitle>
            <DialogDescription>{selectedProfessor?.title}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Biography
            </h4>
            <p className="text-gray-700 mb-4">{selectedProfessor?.bio}</p>
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Portfolio Highlights
            </h4>
            <p className="text-gray-700">{selectedProfessor?.portfolio}</p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setSelectedProfessor(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .scroll-visible::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-hidden::-webkit-scrollbar {
          height: 0;
        }
        .scroll-visible::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .scroll-visible::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .scroll-visible::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}
