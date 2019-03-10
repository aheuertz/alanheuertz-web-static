import * as React from "react";
import Table from "reactstrap/lib/Table";
import { listBoardGames } from "../../services/board-games/BoardGamesCollectionService";
import { BoardGame } from "../../services/board-games/BoardGame";
import { Spinner } from "reactstrap";
import "./board-games-table.scss";

enum ActionType {
  RESOLVE_BOARD_GAMES = 'RESOLVE_BOARD_GAMES',
  FETCH_BOARD_GAMES_FAILURE = 'FETCH_BOARD_GAMES_FAILURE',
}

interface ResolveBoardGamesAction {
  type: ActionType.RESOLVE_BOARD_GAMES;
  boardGames: BoardGame[];
}

interface FetchBoardGamesFailureAction {
  type: ActionType.FETCH_BOARD_GAMES_FAILURE;
}

type BoardGamesTableAction = ResolveBoardGamesAction
  | FetchBoardGamesFailureAction;

const resolveBoardGames: (boardGames: BoardGame[]) => ResolveBoardGamesAction = (boardGames: BoardGame[]) => ({
  type: ActionType.RESOLVE_BOARD_GAMES,
  boardGames: boardGames
});

const fetchBoardGamesFailure: () => FetchBoardGamesFailureAction = () => ({
  type: ActionType.FETCH_BOARD_GAMES_FAILURE
});

interface BoardGamesTableState {
  isPending: boolean;
  error: boolean;
  boardGames: BoardGame[];
  totalItems: number;
  visibleColumns: {[columnTitle: string]: boolean};
}

interface ColumnDefinition {
  title: string;
  accessor: (boardGame: BoardGame) => any;
}

const initialState = {
  isPending: true,
  error: false,
  boardGames: [],
  totalItems: 0,
  visibleColumns: {
    'ID': true,
    'Name': true,
    'Min Players': true,
    'Max Players': true,
    'Play Time': true,
  },
}

const reducer: React.Reducer<BoardGamesTableState, BoardGamesTableAction> = (state: BoardGamesTableState, action: {type: ActionType}) => {
  switch (action.type) {
    case ActionType.RESOLVE_BOARD_GAMES:
      return {
        ...state,
        isPending: false,
        boardGames: (action as ResolveBoardGamesAction).boardGames,
      }
    case ActionType.FETCH_BOARD_GAMES_FAILURE:
      return {
        ...state,
        isPending: false,
        error: true,
      }
  }

  return state;
}

const availableColumns: ColumnDefinition[] = [
  {title: 'ID', accessor: (boardGame: BoardGame) => boardGame.id},
  {title: 'Name', accessor: (boardGame: BoardGame) => boardGame.name},
  {title: 'Min Players', accessor: (boardGame: BoardGame) => boardGame.minPlayers},
  {title: 'Max Players', accessor: (boardGame: BoardGame) => boardGame.maxPlayers},
  {title: 'Recommended Players', accessor: (boardGame: BoardGame) => boardGame.bggRecommendedPlayers},
  {title: 'Best Players', accessor: (boardGame: BoardGame) => boardGame.bggBestPlayers},
  {title: 'Min Play Time', accessor: (boardGame: BoardGame) => boardGame.minPlayTime},
  {title: 'Max Play Time', accessor: (boardGame: BoardGame) => boardGame.maxPlayTime},
  {title: 'Play Time', accessor: (boardGame: BoardGame) => boardGame.playTime},
]

export const BoardGamesTable = () => {
  const [state, dispatch] = React.useReducer<BoardGamesTableState, BoardGamesTableAction>(reducer, initialState);

  React.useEffect(() => {
    listBoardGames()
      .then((boardGames: BoardGame[]) => {
        dispatch(resolveBoardGames(boardGames));
      })
      .catch((reason: any) => {
        console.error('An error occurred while fetching board games.', reason);
        dispatch(fetchBoardGamesFailure());
      });
  }, []);

  const style = {display: 'table', width: '100%', tableLayout: 'fixed'} as React.CSSProperties;

  const columns = availableColumns.filter((columnDefinition: ColumnDefinition) => state.visibleColumns.hasOwnProperty(columnDefinition.title));

  return (
    <>
      {state.boardGames && (
        <>
          <Table className="board-games-table">
            <thead>
              <tr style={style}>
                {columns.map((columnDefinition: ColumnDefinition, index: number) => (
                  <th key={index}>{columnDefinition.title}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{overflowY: 'scroll', maxHeight: '400px', display: 'block'}}>
              {[...state.boardGames]
                .sort()
                .filter((boardGame: BoardGame) => boardGame.minPlayers <= 3)
                .filter((boardGame: BoardGame) => boardGame.maxPlayers >=3)
                // .filter((boardGame: BoardGame) => state.hiddenBoardGames.indexOf(boardGame.id) === -1)
                // .slice(state.offset, state.offset + state.pageSize)
                .map((boardGame: BoardGame, index: number) => (
                  <tr key={index} style={style}>
                    {columns.map((columnDefinition: ColumnDefinition, index: number) => (
                      <td key={index}>{columnDefinition.accessor(boardGame)}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </Table>
          <div>Total: 25</div>
        </>
      )}
      {state.isPending && <Spinner />}
      {state.error && <div>An error occurred while loading board games</div>}
    </>
  );
}
