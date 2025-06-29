export type BattlepassResponse = {
  season: number;
  seasonName: string;
  items: {
    name: string;
    image: string;
    cost: string;
    isLuxury: boolean;
  }[];
};
