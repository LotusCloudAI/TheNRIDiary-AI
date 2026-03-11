import { eventsData } from "../../data/eventsData"
import EventCard from "./EventCard"

export default function EventsSection(){

 return(

  <div>

   <h2>Upcoming Events</h2>

   {eventsData.map(event=>(
    <EventCard
     key={event.id}
     title={event.title}
     date={event.date}
    />
   ))}

  </div>

 )

}