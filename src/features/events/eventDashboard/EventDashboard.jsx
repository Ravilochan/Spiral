import React , {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../../eventform/EventForm'
import EventList from './EventList'
import {sampleData} from '../../../app/api/sampleData.js';
export default function EventDashboard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData);
    return (
            <Grid>
                <Grid.Column width={2}>
                   <h2>Hello Menu</h2>
                </Grid.Column>
                <Grid.Column width={10}>
                    <EventList events={events} />
                </Grid.Column>
                <Grid.Column width={4}>
                {formOpen &&
                <EventForm setFormOpen={setFormOpen}/>}
                </Grid.Column>
            </Grid>
    )
}
