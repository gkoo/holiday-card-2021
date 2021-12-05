import React, { useState, MouseEvent } from 'react';

import cx from 'classnames';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Puzzle, { CellState } from '../utils/puzzle';

import './PuzzleView.css';

const PuzzleView: React.FC<{
  puzzle: Puzzle
}> = ({ puzzle }) => {
  const [puzzleState, setPuzzleState] = useState(puzzle.state);
  const [rowClues, setRowClues] = useState(puzzle.rowClues);
  const [columnClues, setColumnClues] = useState(puzzle.columnClues);
  const [num, setNum] = useState(0);
  const [solved, setSolved] = useState<boolean>(false);

  const handleClick = (e: MouseEvent, rowIdx: number, colIdx: number) => {
    e.preventDefault();

    switch(e.type) {
      case 'click':
        if (e.shiftKey) {
          puzzle.toggleCellState(rowIdx, colIdx, CellState.Marked);
        } else {
          puzzle.toggleCellState(rowIdx, colIdx, CellState.Filled);
        }
        break;
      case 'contextmenu':
        puzzle.toggleCellState(rowIdx, colIdx, CellState.Xed);
        break;
      default:
        return;
    }

    // redraw the puzzle state
    setPuzzleState(puzzle.state);

    if (puzzle.options.test) {
      setRowClues(puzzle.rowClues);
      setColumnClues(puzzle.columnClues);
    }

    if (!puzzle.options.test) {
      setSolved(puzzle.isSolved());
    }

    // For some reason the component doesn't redraw without the following line...?
    setNum(num ? 0 : 1);
  };

  return (
    <Box>
      {
        solved ? <h1>You solved it!</h1> : undefined
      }
      <Table className='puzzle-table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0 }}>
              {/* empty for row clue */}
            </TableCell>
            {columnClues.map((clues, colIdx) =>
              <TableCell key={`col-${colIdx}`} sx={{ border: 0 }}>
                <span>
                  {
                    clues.map((clue, clueIdx) =>
                      <span key={`clue-${colIdx}-${clueIdx}`}>{clue}<br/></span>
                    )
                  }
                </span>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            puzzleState.map((row, rowIdx) => (
              <TableRow key={`row-${rowIdx}`}>
                <TableCell
                  className='clue-labels row-clues'
                  sx={{
                    border: 0,
                    height: 25,
                    minWidth: 100,
                  }}
                  align='right'
                >
                  {
                    rowClues[rowIdx].map(
                    (clue, clueIdx) =>
                      <span key={`clue-${rowIdx}-${clueIdx}`} className='clue'>{clue}</span>
                    )
                  }
                </TableCell>
                {
                  row.map((cell, colIdx) =>
                    <TableCell
                      key={`col-${colIdx}`}
                      sx={{
                        border: 1,
                        width: 25,
                        height: 25,
                      }}
                      onClick={e => handleClick(e, rowIdx, colIdx)}
                      onContextMenu={e => handleClick(e, rowIdx, colIdx)}
                      className={
                        cx({
                          'picross-cell': true,
                          'highlight-border-top': rowIdx % 5 === 0,
                          'highlight-border-left': colIdx % 5 === 0,
                          filled: cell === CellState.Filled,
                          xed: cell === CellState.Xed,
                          marked: cell === CellState.Marked
                        })
                      }
                    />
                  )
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Box>
  );
};

export default PuzzleView;
