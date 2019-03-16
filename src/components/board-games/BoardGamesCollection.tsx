import * as React from "react";
import { BoardGamesTable } from "./BoardGamesTable";

export const BoardGamesCollection = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <BoardGamesTable />
      </div>
      <div className="d-md-none">
        Board game collection is currently unavailable on small screens.
      </div>
    </>
  )
}
