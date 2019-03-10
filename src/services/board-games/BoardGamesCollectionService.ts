import { default as BoardGamesCollectionUrl } from "./board-game-collection.csv";
import { isNullOrUndefined } from "util";
import { parse, ParseResult } from "papaparse";
import { BoardGameCsvRecord } from "./BoardGameCsvRecord";
import { BoardGame } from "./BoardGame";

let boardGamesCollectionPromise: Promise<BoardGame[]>;

const initializeBoardGamesCollectionPromise = () => {
  boardGamesCollectionPromise = fetch(BoardGamesCollectionUrl)
      .then((response: Response) => {
        if (response.status >= 400) {
          throw Error('Failed to fetch board games.');
        }

        return response.text();
      })
      .then((boardGamesCollectionCsv: string) => {
        return parse(boardGamesCollectionCsv, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
        });
      })
      .then((contents: ParseResult) => {
        return contents.data.map((record: BoardGameCsvRecord) => ({
          id: record.objectid,
          name: record.objectname,
          image: record.imageid,
          rank: record.rank,
          rating: record.rank,
          yearPublished: record.yearpublished,
          minPlayers: record.minplayers,
          maxPlayers: record.maxplayers,
          playTime: record.playingtime,
          minPlayTime: record.minplaytime,
          maxPlayTime: record.maxplaytime,
          bggBestPlayers: record.bggbestplayers,
          bggRecommendedPlayers: record.bggrecplayers,
          bggRecommendedAge: record.bggrecagerange,
        })) as BoardGame[];
      });
};

export const listBoardGames = () => {
  if (isNullOrUndefined(boardGamesCollectionPromise)) {
    initializeBoardGamesCollectionPromise();
  }

  return boardGamesCollectionPromise;
};
