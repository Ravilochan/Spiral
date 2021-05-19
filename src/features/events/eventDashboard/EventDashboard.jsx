import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function EventDashboard() {
    return (
            <Grid>
                <Grid.Column width={4}>
                   <h2>Hello Menu</h2>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2>Main </h2>
                </Grid.Column>
                <Grid.Column width={4}>
                <h2> Notifications </h2>
                </Grid.Column>
            </Grid>
    )
}
