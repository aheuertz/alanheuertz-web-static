import * as React from "react";
import Table from "reactstrap/lib/Table";
import { listBoardGames } from "../../services/board-games/BoardGamesCollectionService";
import { BoardGame } from "../../services/board-games/BoardGame";
import { Spinner } from "reactstrap";
import "./board-games-table.scss";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import Container from "reactstrap/lib/Container";

enum ActionType {
  RESOLVE_BOARD_GAMES = 'RESOLVE_BOARD_GAMES',
  FETCH_BOARD_GAMES_FAILURE = 'FETCH_BOARD_GAMES_FAILURE',
  TOGGLE_COLUMNS_MODAL = 'TOGGLE_COLUMNS_MODAL',
  TOGGLE_COLUMN = 'TOGGLE_COLUMN',
}

interface ResolveBoardGamesAction {
  type: ActionType.RESOLVE_BOARD_GAMES;
  boardGames: BoardGame[];
}

interface FetchBoardGamesFailureAction {
  type: ActionType.FETCH_BOARD_GAMES_FAILURE;
}

interface ToggleColumnsModalAction {
  type: ActionType.TOGGLE_COLUMNS_MODAL;
}

interface ToggleColumnAction {
  type: ActionType.TOGGLE_COLUMN;
  columnId: string;
}

type BoardGamesTableAction = ResolveBoardGamesAction
  | FetchBoardGamesFailureAction
  | ToggleColumnsModalAction
  | ToggleColumnAction;

const resolveBoardGames: (boardGames: BoardGame[]) => ResolveBoardGamesAction = (boardGames: BoardGame[]) => ({
  type: ActionType.RESOLVE_BOARD_GAMES,
  boardGames: boardGames
});

const fetchBoardGamesFailure: () => FetchBoardGamesFailureAction = () => ({
  type: ActionType.FETCH_BOARD_GAMES_FAILURE
});

const toggleColumnsModal: () => ToggleColumnsModalAction = () => ({
  type: ActionType.TOGGLE_COLUMNS_MODAL
});

const toggleColumn: (columnId: string) => ToggleColumnAction = (columnId: string) => ({
  type: ActionType.TOGGLE_COLUMN,
  columnId: columnId
});

interface BoardGamesTableState {
  isPending: boolean;
  error: boolean;
  boardGames: BoardGame[];
  totalItems: number;
  visibleColumns: {[columnTitle: string]: boolean};
  columnsModalOpen: boolean;
}

interface ColumnDefinition {
  id: string;
  title: string;
  accessor: (boardGame: BoardGame) => any;
}

const initialState = {
  isPending: true,
  error: false,
  boardGames: [],
  totalItems: 0,
  visibleColumns: {
    'name': true,
    'min-players': true,
    'max-players': true,
    'play-time': true,
  },
  columnsModalOpen: false,
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
    case ActionType.TOGGLE_COLUMNS_MODAL:
      return {
        ...state,
        columnsModalOpen: !state.columnsModalOpen,
      }
    case ActionType.TOGGLE_COLUMN:
      const columnId = (action as ToggleColumnAction).columnId;
      return {
        ...state,
        visibleColumns: {
          ...state.visibleColumns,
          [columnId]: !(state.visibleColumns.hasOwnProperty(columnId) && state.visibleColumns[columnId]),
        }
      }
  }

  return state;
}

const availableColumns: ColumnDefinition[] = [
  {id: 'id', title: 'ID', accessor: (boardGame: BoardGame) => boardGame.id},
  {id: 'name', title: 'Name', accessor: (boardGame: BoardGame) => boardGame.name},
  {id: 'min-players', title: 'Min Players', accessor: (boardGame: BoardGame) => boardGame.minPlayers},
  {id: 'max-players', title: 'Max Players', accessor: (boardGame: BoardGame) => boardGame.maxPlayers},
  {id: 'recommended-players', title: 'Recommended Players', accessor: (boardGame: BoardGame) => boardGame.bggRecommendedPlayers},
  {id: 'best-players', title: 'Best Players', accessor: (boardGame: BoardGame) => boardGame.bggBestPlayers},
  {id: 'min-play-time', title: 'Min Play Time', accessor: (boardGame: BoardGame) => boardGame.minPlayTime},
  {id: 'max-play-time', title: 'Max Play Time', accessor: (boardGame: BoardGame) => boardGame.maxPlayTime},
  {id: 'play-time', title: 'Play Time', accessor: (boardGame: BoardGame) => boardGame.playTime},
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

  const columns = availableColumns.filter((columnDefinition: ColumnDefinition) =>
    state.visibleColumns.hasOwnProperty(columnDefinition.id) && state.visibleColumns[columnDefinition.id]);

  const visibleBoardGames = state.boardGames;

  return (
    <>
      {visibleBoardGames && !state.error && (
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
              {[...visibleBoardGames]
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
          <div>
            <Button className="ml-1" outline onClick={() => dispatch(toggleColumnsModal())}>Columns</Button>
            <Modal isOpen={state.columnsModalOpen} toggle={() => dispatch(toggleColumnsModal())}>
              <ModalHeader>Edit Columns</ModalHeader>
              <ModalBody>
                <Container style={{columns: 'auto 2'}}>
                  {availableColumns.map((columnDefinition: ColumnDefinition, index: number) => (
                    <div key={index}>
                      <Input
                        type="checkbox"
                        onChange={() => dispatch(toggleColumn(columnDefinition.id))}
                        id={columnDefinition.id}
                        name={columnDefinition.id}
                        checked={state.visibleColumns.hasOwnProperty(columnDefinition.id) && state.visibleColumns[columnDefinition.id]} />
                      <Label for={columnDefinition.id}>{columnDefinition.title}</Label>
                    </div>
                  ))}
                </Container>
              </ModalBody>
              <ModalFooter><Button onClick={() => dispatch(toggleColumnsModal())}>Close</Button></ModalFooter>
            </Modal>
          </div>
          <div>Total: {visibleBoardGames.length}</div>
        </>
      )}
      {state.isPending && <Spinner />}
      {state.error && <div>An error occurred while loading board games</div>}
    </>
  );
}
