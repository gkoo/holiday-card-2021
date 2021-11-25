import React, { useState } from 'react';

import cx from 'classnames';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Puzzle from '../utils/puzzle';

import './PuzzleView.css';

const PuzzleView = ({ puzzle }) => {
  const [puzzleState, setPuzzleState] = useState<Puzzle>(puzzle);

  const handleClick = (rowIdx: number, colIdx: number) => {
  };

  return (
    <Box sx={{ width: 500 }}>
      <Table className='puzzle-table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0 }}>
              {/* empty for row clue */}
            </TableCell>
            {puzzleState.columnClues.map((clues, colIdx) =>
              <TableCell key={`col-${colIdx}`} sx={{ border: 0 }}>
                <span>
                  {clues.map((clue, clueIdx) => <span key={`clue-${colIdx}-${clueIdx}`}>{clue}<br/></span>)}
                </span>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            puzzleState.state.map((row, rowIdx) => (
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
                  {puzzleState.rowClues[rowIdx].map((clue, clueIdx) => <span key={`clue-${rowIdx}-${clueIdx}`} className='clue'>{clue}</span>)}
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
                      onClick={() => handleClick(rowIdx, colIdx)}
                      className={cx({ 'picross-cell': true, checked: cell === 1 })}
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
