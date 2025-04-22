import CardHolder from "./components/card-holder";
import CommonCardsModal from "./components/common-cards-modal";
import HeroCardsModal from "./components/hero-cards-modal";
import SpellCardsModal from "./components/spell-cards-modal";

export default function CreateComp() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Create comp</h1>
        <p>Create and share your comp with other players!</p>

        <p className="text-sm text-gray-400">
          You can add up to 7 core cards and 3 addon cards.
        </p>
        <CardHolder label="Core cards" Modal={CommonCardsModal} />

        <CardHolder label="Addon cards" Modal={CommonCardsModal} />

        <CardHolder label="Heroes" Modal={HeroCardsModal} />

        <CardHolder label="Spells" Modal={SpellCardsModal} />
      </div>
    </div>
  );
}
