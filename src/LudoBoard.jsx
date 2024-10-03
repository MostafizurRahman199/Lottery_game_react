import React, { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr] = useState(["no moves"]);


    let updateBlue = ()=>{
        setMoves({ ...moves, blue: moves.blue + 1 });

       setArr((prevArr)=>{
        return [...prevArr, "Blue Moves"]
       })


    }
    let updateYellow = ()=>{
        setMoves({ ...moves, yellow: moves.yellow + 1 });
        
    }
    let updateRed = ()=>{
        setMoves({ ...moves, red: moves.red + 1 });
    }
    let updateGreen = ()=>{
        setMoves({ ...moves, green: moves.green + 1 });
    }

  return (
    <div>
      <p className="">Game Begins!</p>
      <div className="flex gap-4 mt-4">

        <div className="flex flex-col gap-2 w-16">
          <p className="">Blue Moves : {moves.blue}</p>
          <button onClick={updateBlue} className="bg-blue-500 text-white">{moves.blue}</button>
        </div>

        <div className="flex flex-col gap-2 w-16">
          <p>Yellow Moves : {moves.yellow}</p>
          <button onClick={updateYellow} className="bg-yellow-500 text-white">{moves.yellow}</button>
        </div>

        <div className="flex flex-col gap-2 w-16">
          <p>Green Moves : {moves.green}</p>
          <button onClick={updateGreen} className="bg-green-500 text-white">{moves.green}</button>
        </div>

        <div className="flex flex-col gap-2 w-16">
          <p>Red Moves : {moves.red}</p>
          <button onClick={updateRed} className="bg-red-500 text-white">{moves.red}</button>
        </div>

      </div>
    </div>
  );
}
