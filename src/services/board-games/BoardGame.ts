export interface BoardGame {
  id: number;
  name: string;
  image: any;
  rank: number;
  rating: number;
  yearPublished: number;

  minPlayers: number;
  maxPlayers: number;

  playTime: number;
  minPlayTime: number;
  maxPlayTime: number;

  bggBestPlayers: string;
  bggRecommendedPlayers: string;
  bggRecommendedAge: string;
}
