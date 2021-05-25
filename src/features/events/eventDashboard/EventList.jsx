import React from 'react'
import EventListItem from './EventListItem'

export default function EventList({events, selectEvent, deleteEvent}) {
    return (
        <div>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
        ))}
        </div>
    )
}
