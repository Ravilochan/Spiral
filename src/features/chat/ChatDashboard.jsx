import React from "react";
import { Grid, Segment, Input, Message, Icon } from "semantic-ui-react";
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
            <Segment color="red">
              <h4>
                <Icon name="user" />
                Aryan
              </h4>
              <Message color="red">Hi Ravi</Message>
            </Segment>
            <Segment color="blue">
              <h4>
                <Icon name="user outline" />
                Ravi
              </h4>
              <Message color="blue">Hey Aryan</Message>
            </Segment>
            <Segment color="red">
              <h4>
                <Icon name="user" />
                Aryan
              </h4>
              <Message color="red">This wroks</Message>
            </Segment>
            <Segment color="blue">
              <h4>
                <Icon name="user outline" />
                Ravi
              </h4>
              <Message color="blue">It sure does</Message>
            </Segment>
            <Segment>
              <Input fluid icon="send" placeholder="Enter Text..." size="big" />
            </Segment>
          </div>
        </Segment.Group>
      </Grid.Column>
    </Grid>
  );
}
