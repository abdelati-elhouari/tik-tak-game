import React, { useState,useEffect } from "react";
import Popup from "./Popup";
import Gane from "./Gane";


function Dmop() {
    const [answer,setAnswer]=useState()
    const [num1,setnum1] =useState(Math.floor(Math.random() * 10));
    const [num2,setnum2] =useState(Math.floor(Math.random() * 10));
    const [num3,setnum3] =useState(Math.floor(Math.random() * 10));
    const [grid, setGrid] = useState(Array(4).fill(Array(4).fill(null)));
    const [joueur, setjoueur] = useState("X");
    const [PtsJoueur1, setPtsJoueur1] = useState(0);
    const [PtsJoueur2, setPtsJoueur2] = useState(0);
    const[lin,setlin]=useState()
    const[li,setli]=useState()
    const [show,setshow]=useState(false)
    const [gane,setgane]=useState(false)
    const [secondsLeft, setSecondsLeft] = useState(10);
 

useEffect(() => {
       let timerId;
       if (show ) {
         setSecondsLeft(10);
         timerId = setInterval(() => {
           setSecondsLeft((secondsLeft) => secondsLeft - 1);
         }, 1000);
       }
       return () => clearInterval(timerId);
     }, [show]);
  
     useEffect(() => {
       if (secondsLeft === 0) {
         setAnswer(0)
         setshow(false);
         setjoueur(joueur === "X" ? "O" : "X")
         setnum1(Math.floor(Math.random() * 10))
         setnum2(Math.floor(Math.random() * 10))
         setnum3(Math.floor(Math.random() * 10))
       }
     }, [secondsLeft]);
   const reponse =(e)=>{
    setAnswer(e.target.value)
   }

  const handleClick = (row, col) => {
      if( grid[row][col] === null) {
        setlin(row)
        setli(col)
        setshow(!show)
    }
    if(winner){
        handleRestart()
    }
    
    
    
  };
  function pts(e){
    if(e=='X'){
        if(PtsJoueur1==0){
            setPtsJoueur1(5)
        }else if(PtsJoueur1==5){
            setPtsJoueur1(15)
        }else if(PtsJoueur1==15){
            setPtsJoueur1(30)
        }else{
            setPtsJoueur1(50)
            setgane(!gane)
        }
    }else{
        if(PtsJoueur2==0){
            setPtsJoueur2(5)
        }else if(PtsJoueur2==5){
            setPtsJoueur2(15)
        }else if(PtsJoueur2==15){
            setPtsJoueur2(30)
        }else{
            setPtsJoueur2(50)
            setgane(!gane)
        }
    }
  }
  function handleRestart() {
      setPtsJoueur1(0)
      setPtsJoueur2(0)
      setjoueur('X')
      setGrid( Array(4).fill(Array(4).fill(null)))
      setgane(!gane)
         
  }
  const handeClick2=()=>{
        const somme=num1+num2+num3
        if(answer == somme){
            if (grid[lin][li] === null ) {
                const newGrid = grid.map((lin) => [...lin]);
                newGrid[lin][li] = joueur;
                setGrid(newGrid);
                pts(joueur)
                setjoueur(joueur === "X" ? "O" : "X");
                
                
            }
            
            
            setshow(!show)
            setAnswer()
            setnum1(Math.floor(Math.random() * 10))
            setnum2(Math.floor(Math.random() * 10))
            setnum3(Math.floor(Math.random() * 10))
            
            
        }else{
            setshow(!show)
            setjoueur(joueur === "X" ? "O" : "X");
            setAnswer()
            setnum1(Math.floor(Math.random() * 10))
            setnum2(Math.floor(Math.random() * 10))
            setnum3(Math.floor(Math.random() * 10))
        }
       }
           
  const checkWinner = () => {
    
    for (let i = 0; i < 4; i++) {
      if (grid[i][0] !== null && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][2] === grid[i][3]) {
        return grid[i][0];
      }
    }

    for (let j = 0; j < 4; j++) {
      if (grid[0][j] !== null && grid[0][j] === grid[1][j] && grid[1][j] === grid[2][j] && grid[2][j] === grid[3][j]) {
        return grid[0][j];
      }
    }

    
    if (grid[0][0] !== null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[2][2] === grid[3][3]) {
      return grid[0][0];
    }
    if (grid[0][3] !== null && grid[0][3] === grid[1][2] && grid[1][2] === grid[2][1] && grid[2][1] === grid[3][0]) {
      return grid[0][3];
    }

    
    return null;
  };

  const winner = checkWinner();

  return (
    <div className="App">
      <h1>Morpion amélioré</h1>
      <h2>{!winner && <p><span> joueur 1 :{PtsJoueur1} pts</span> <span> joueur 2: {PtsJoueur2} pts</span> </p>  }</h2>
      <h2>{!winner && <p>C'est au tour du joueur {joueur}.</p>}</h2>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (<>
            
                <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                  {cell}
                 
                </div>
                { show && <Popup num={{num1,num2,num3}} onClick={handeClick2} second={secondsLeft} answer={answer} reponse={reponse}/>}
                {gane && <Gane    joueur={winner}  onClick={handleRestart}   />}
            </>
            ))}
          </div>
        ))}
      </div>
      <p><button onClick={handleRestart}>Rejouer</button></p>
      {winner && <p>Le joueur {winner} a gagné !</p>}
      
      
    </div>
  );
}

export default Dmop;