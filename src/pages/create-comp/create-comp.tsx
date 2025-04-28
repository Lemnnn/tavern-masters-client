import { Input } from "@/components/ui/input";
import CardHolder from "./components/card-holder";
import CommonCardsModal from "./components/common-cards-modal";
import HeroCardsModal from "./components/hero-cards-modal";
import SpellCardsModal from "./components/spell-cards-modal";
import { useState } from "react";
import { useCreateComp } from "@/api/queries/comps";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCompSchema, TCreateComp } from "@/schemas/comps";
import { Loader2 } from "lucide-react";

export default function CreateComp() {
  const [coreCards, setCoreCards] = useState<string[]>([]);
  const [addonCards, setAddonCards] = useState<string[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);
  const [spells, setSpells] = useState<string[]>([]);
  const [compName, setCompName] = useState("");

  console.log("Core cards", coreCards);
  console.log("Addon cards", addonCards);
  console.log("Heroes", heroes);
  console.log("Spells", spells);
  console.log("Comp name", compName);

  const form = useForm<TCreateComp>({
    resolver: zodResolver(createCompSchema),
    defaultValues: {
      name: "",
      coreCards: [],
      addonCards: [],
      heroCards: [],
      spellCards: [],
    },
  });

  const { mutateAsync: createComp, isPending, error } = useCreateComp();

  async function handleSubmit() {
    if (!compName.trim()) {
      alert("Comp name is required!");
      return;
    }

    try {
      await createComp({
        name: compName,
        coreCards,
        addonCards,
        heroCards: heroes,
        spellCards: spells,
      });
      form.reset();
      form.clearErrors();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Create comp</h1>
        <p>Create and share your comp with other players!</p>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg text-center mt-4">
            {error?.message || "Something went wrong."}
          </div>
        )}

        <Input
          value={compName}
          onChange={(e) => setCompName(e.target.value)}
          className="w-full bg-transparent border-2 border-white focus:outline-none focus:ring-0 text-white placeholder:text-white"
        />

        <CardHolder
          label="Core Cards"
          Modal={CommonCardsModal}
          selectedCards={coreCards}
          setSelectedCards={setCoreCards}
        />

        <CardHolder
          label="Addon Cards"
          Modal={CommonCardsModal}
          selectedCards={addonCards}
          setSelectedCards={setAddonCards}
        />

        <CardHolder
          label="Heroes"
          Modal={HeroCardsModal}
          selectedCards={heroes}
          setSelectedCards={setHeroes}
        />

        <CardHolder
          label="Spells"
          Modal={SpellCardsModal}
          selectedCards={spells}
          setSelectedCards={setSpells}
        />

        <button
          onClick={handleSubmit}
          disabled={isPending}
          className="mt-10 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 flex items-center justify-center"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Saving...
            </>
          ) : (
            "Submit Comp"
          )}
        </button>
      </div>
    </div>
  );
}
