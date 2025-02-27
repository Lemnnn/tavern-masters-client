import { Baby, History, Scroll, Share } from "lucide-react";
import UVPCard from "./uvp-card";

const UVP_CONTENT = [
  {
    id: 1,
    title: "Share Your Comps",
    description:
      "Easily create and share your Battlegrounds compositions with the community. Get feedback and improve your strategy!",
    icon: Share,
  },
  {
    id: 2,
    title: "Meta & Strategy Tools",
    description:
      "Organize your comps with tags, filters, and insights to stay ahead of the ever-changing Battlegrounds meta.",
    icon: Scroll,
  },
  {
    id: 3,
    title: "Track Changes & Updates",
    description:
      "See how comps evolve over time with version history and community feedback, ensuring your builds stay relevant.",
    icon: History,
  },
  {
    id: 4,
    title: "Easy to Use",
    description:
      "Build and browse comps effortlessly—no complicated tools, just a streamlined experience for every player.",
    icon: Baby,
  },
];

export default function UVPSection() {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 px-4">
        {UVP_CONTENT.map((content, index) => (
          <UVPCard key={index} metadata={content} />
        ))}
      </div>
    </div>
  );
}
