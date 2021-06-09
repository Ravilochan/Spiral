import React from 'react'
import { Grid, Container, Segment } from 'semantic-ui-react'
// import EventList from './EventList'
// import EventListItemPlaceholder from './EventListItemPlaceholder';
// import EventFilters from './EventFilters';
// import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
// import { listenToEvents } from '../eventActions';
// import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
// import { useSelector, useDispatch } from 'react-redux';

export default function EventDashboard() {
    // const dispatch = useDispatch();
    // const { events } = useSelector((state) => state.event);
    // const { loading } = useSelector((state) => state.async);
    
    // useFirestoreCollection({
    //     query: () => listenToEventsFromFirestore(),
    //     data: events => dispatch(listenToEvents(events)),
    //     deps: [dispatch]
    //   })

    return (
            <Grid>
                <Grid.Column width={12} >
                    <h1>MVSR ENGINEERING COLLEGE</h1>
                    <Segment raised>
                    <h2>College Profile</h2>
                    <Container>
                        <p>
                        Maturi Venkata Subba Rao (MVSR) Engineering College was established in 1981 with affiliation to Osmania University. Currently, the college has B.E programs in Civil, CSE, ECE, EEE, IT, Mechanical and Automobile Engineering, PG programs in CSE, ECE and Mechanical besides MBA. This college has been recognized by Osmania University as a Centre for pursuing research leading to the award of Ph.D. Degree in the Disciplines of CSE, ECE and Mechanical Engineering. In all about a 1000 students take admission per year. The college is one of the earliest of the private Engineering colleges in the state, and since inception, the college has ensured excellent and exemplary standards, which has helped the college to be one of the topmost andsought after colleges in the state.
                        </p>
                    </Container>
                    </Segment>

                    <Segment raised>
                        <h2>Vision</h2>
                    <Container>
                        <p>
                        To Impart technical education of the highest standards, producing technically competent confident and socially responsible engineers.
                        </p>
                    </Container>
                    </Segment>

                    <Segment raised>
                        <h2>Mission</h2>
                    <Container>
                        <p>
                        To Impart adequate fundamental knowledge,technical and soft skills to students.
                        To make learning process exciting,stimulating and joyful.
                        To create a climate conducive to excellent teaching - learning Process.
                        To bring out creativity in students.
                        To contribute to advancement of engineering and technology.
                        To make positive contribution to meet societal needs.
                        </p>
                    </Container>
                    </Segment>
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
                </Grid.Column>
            </Grid>
    )
}
