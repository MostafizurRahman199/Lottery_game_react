import React from 'react'
import TicketNum from './TicketNum'

export default function Ticket({ticketArr}) {
  return (
    <div>
       {
        ticketArr.map((num, index)=>(
            <TicketNum num={num} key={index}></TicketNum>
        ))
       }
    </div>
  )
}
