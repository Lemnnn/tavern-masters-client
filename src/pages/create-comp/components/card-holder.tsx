import { useState } from "react";

interface CardHolderProps {
  label: string;
  Modal: React.ComponentType<{
    selectedCards: string[];
    setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
  }>;
}

export default function CardHolder({ label, Modal }: CardHolderProps) {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  return (
    <div className="w-full flex flex-col pt-20">
      <div className="w-full bg-black/60 flex justify-between items-center rounded-t-2xl">
        <p className="px-5 py-2">{label}</p>
        <Modal
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      </div>

      <div className="w-full min-h-[250px] bg-black/40 flex gap-2 p-4 rounded-b-2xl">
        {selectedCards.map((image, index) => (
          <img key={index} src={image} alt="Selected card" className="h-52" />
        ))}
      </div>
    </div>
  );
}
