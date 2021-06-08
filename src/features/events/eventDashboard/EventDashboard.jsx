import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
import { useSelector, useDispatch } from 'react-redux';

export default function EventDashboard() {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.event);
    const { loading } = useSelector((state) => state.async);
    
    useFirestoreCollection({
        query: () => listenToEventsFromFirestore(),
        data: events => dispatch(listenToEvents(events)),
        deps: [dispatch]
      })

    return (
            <Grid>
                <Grid.Column width={2}>
                   <h2>Hello Menu</h2>
                </Grid.Column>
                <Grid.Column width={10} >
                    {loading &&
                     <>
                        <EventListItemPlaceholder />
                        <EventListItemPlaceholder />
                     </>
                    }
                    <EventList events={events}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <EventFilters />     
                </Grid.Column>
            </Grid>
    )
}
