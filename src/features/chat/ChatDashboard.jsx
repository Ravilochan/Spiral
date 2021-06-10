import React from "react";
import { Grid, Segment, Input } from "semantic-ui-react";
export default function ChatDashboard() {
  return (
    <Grid>
      <Grid.Column width={4}>
        <h1>Chats</h1>
        <Segment.Group raised>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column width={12}>
        <h1>Chat</h1>
        <Segment.Group>
          <div>
            <Segment color="red">Hi Ravi</Segment>
            <Segment color="blue">Hey Aryan</Segment>
            <Segment color="red">This Works</Segment>
            <Segment color="blue">Yes it does</Segment>
            <Segment>
              <Input fluid icon="send" placeholder="Enter Text..." size="big" />
            </Segment>
          </div>
        </Segment.Group>
      </Grid.Column>
    </Grid>
  );
}
