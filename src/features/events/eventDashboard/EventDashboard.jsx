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
}
