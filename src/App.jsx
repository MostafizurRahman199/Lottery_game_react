import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import LodoList from './LodoList'
import Lottery from './Lottery'
import TicketNum from "./TicketNum";
import Ticket from './Ticket'
import {sum } from './lotteryHelper'

function App() {

  let winCondition = (ticket)=>{
      return sum(ticket) === 15;
  }

  let winCondition2 = (ticket)=>{
    return ticket.every((num)=> num === ticket[0]);
  }

  return (
  <div>
    {/* <LudoBoard></LudoBoard> */}
    {/* <LodoList></LodoList> */}
    {/* <Lottery></Lottery> */}

  {/* <Ticket ticketArr={[0, 1, 2]}></Ticket> */}

  <Lottery n={3}  winCondition={winCondition}></Lottery>

  </div>
  )
}

export default App
