import React, { useState } from 'react'
import { generateTicket,sum } from './lotteryHelper';
import Ticket from './Ticket';




export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(generateTicket(n));
    }
  return (
   <div>
    <h1>Lottery Game!</h1>
    <div className='text-2xl'>
        <Ticket ticketArr={ticket}></Ticket> <br /> <br />
        <button onClick={buyTicket}>Buy Ticket</button>
        <br /> <br />
        {isWinning  && <h1 className="text-2xl">Hurray!! you won the lottery🥳</h1>}
    </div>
   </div>
  )
}
