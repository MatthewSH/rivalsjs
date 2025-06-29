export type AllMapsResponse = {
  totalMaps: number;
  maps: {
    id: number;
    name: string;
    fullName: string;
    location: string;
    description: string;
    gameMode: string;
    isCompetitive: boolean;
    subMap: {
      id: number | null;
      name: string | null;
      thumbnail: string | null;
    };
    video: string | null;
    images: string[];
  }[];
};
