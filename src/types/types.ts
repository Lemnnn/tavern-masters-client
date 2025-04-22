export interface Card {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: number[];
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  health: number;
  manaCost: number;
  armor: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  childIds: number[];
  isZilliaxFunctionalModule: boolean;
  isZilliaxCosmeticModule: boolean;
  battlegrounds: {
    hero: boolean;
    quest: boolean;
    reward: boolean;
    duosOnly: boolean;
    solosOnly: boolean;
    companionId: number;
    image: string;
    imageGold: string;
  };
}
