
import React, { useState } from "react";
import Gane from "./Gane";




function Nmp() {
  const [grid, setGrid] = useState(Array(3).fill(Array(3).fill(null)));
  const [joueur, setjoueur] = useState("X");
 

  const handleClick = (row, col) => {
    
    if (grid[row][col] === null ) {
      const newGrid = grid.map((row) => [...row]);
      newGrid[row][col] = joueur;
      setGrid(newGrid);
      setjoueur(joueur === "X" ? "O" : "X");
      
    }
    // if(winner){
    //     handleRestart()
    // }
  };

  function handleRestart() {
    
      setjoueur('X')
      setGrid( Array(3).fill(Array(3).fill(null)))
      
      
    
  }
  const checkWinner = () => {
    
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] !== null && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] ) {
        return grid[i][0];
        
      }
    }

    
    for (let j = 0; j < 3; j++) {
      if (grid[0][j] !== null && grid[0][j] === grid[1][j] && grid[1][j] === grid[2][j]) {
        return grid[0][j];
      }
    }

    
    if (grid[0][0] !== null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] ) {
      return grid[0][0];
    }
    if (grid[0][2] !== null && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] ) {
      return grid[0][2];
    }

    
    return null;
  };

  const winner = checkWinner();

  return (
    <div className="App">
      <h1>Morpion original</h1>
      <h2>{!winner && <p>C'est au tour du joueur {joueur}.</p>}</h2>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p><button onClick={handleRestart}>Rejouer</button></p>
      {winner  && <Gane    joueur={winner}  onClick={handleRestart}   />}

      
    </div>
  );
}

export default Nmp;
