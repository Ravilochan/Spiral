<<<<<<< HEAD
import React from "react";
import { Grid, Container, Segment } from "semantic-ui-react";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";
import { useSelector, useDispatch } from "react-redux";

export default function EventDashboard() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <Grid>
      <Grid.Column width={12}>
        <h1>MVSR ENGINEERING COLLEGE</h1>
        <Segment raised textAlign="center">
          <h2>Welcome</h2>
          <Container>
            <p>
              Here are the recent most events that took place in our college
            </p>
          </Container>
        </Segment>

        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={4}>
        <h1>New notification column</h1>
        <Segment raised>
          College Events.
          <ul>
            <li>OU Exam fee</li>
            <li>Declaration of Summer Vacation: Circular 06-05-2021</li>
            <li>
              Sewing Machine Project Executed by the members of Street Cause
              MVSREC - Telecasted on I News TV Channel
            </li>
            <li>Re-Admission of students during the academic year 2020-21</li>
            <li>
              Operating Manuals for Students and Institutions - AICTE Pragati
              and Saksham Schemes - Click Here
            </li>
          </ul>
        </Segment>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
=======
import React , { useState } from 'react'
import { Grid, Container, Segment } from 'semantic-ui-react'
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
    const [predicate, setPredicate] = useState(
        new Map([
          ['startDate', new Date()],
          ['filter', 'all'],
        ])
      );
    
      function handleSetPredicate(key, value) {
        setPredicate(new Map(predicate.set(key, value)));
      }

    useFirestoreCollection({
        query: () => listenToEventsFromFirestore(predicate),
        data: (events) => dispatch(listenToEvents(events)),
        deps: [dispatch , predicate],
      });

    return (
            <Grid>
                <Grid.Column width={2}>
                   <h2>Hello Menu</h2>
                </Grid.Column>
                <Grid.Column width={10} >
                    <h1>MVSR ENGINEERING COLLEGE</h1>
                    <Segment raised center>
                    <h2>Welcome(Put in center)</h2>
                    <Container>
                        <p>Here are the recent most events that took place in our college</p>
                    </Container>
                    </Segment>

                    {loading && (
                     <>
                        <EventListItemPlaceholder />
                        <EventListItemPlaceholder />
                     </>
                    )}
                    <EventList events={events}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h1>New notification column</h1> 
                    <Segment raised>
                        College Events.
                        <ul>
                            <li>OU Exam fee</li>
                            <li>Declaration of Summer Vacation: Circular 06-05-2021</li>
                            <li>Sewing Machine Project Executed by the members of Street Cause MVSREC - Telecasted on I News TV Channel</li>
                            <li>Re-Admission of students during the academic year 2020-21</li>
                            <li>Operating Manuals for Students and Institutions - AICTE Pragati and Saksham Schemes - Click Here</li>
                        </ul>
                    </Segment> 
                    <EventFilters predicate={predicate} setPredicate={handleSetPredicate} loading={loading} />
                </Grid.Column>
            </Grid>
    )
>>>>>>> f5ccb192c123d11a73c7680805959e096e4c825a
}
