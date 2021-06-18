import React from "react";
import {
  Grid,
  Segment,
  Input,
  Message,
  Icon,
  Search,
  Card,
  Image,
} from "semantic-ui-react";
export default function ChatDashboard() {
  return (
    <Grid>
      <Grid.Column width={3}>
        <Search />
        <Segment.Group raised>
          <Segment>Staff 1</Segment>
          <Segment>Staff 2</Segment>
          <Segment>Student 1</Segment>
          <Segment>Student 2</Segment>
          <Segment>Group 1</Segment>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column width={10}>
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
      <Grid.Column width={3}>
        <Segment>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Ravi</Card.Header>
              <Card.Meta>
                <span className="date">(4/4) IT B</span>
              </Card.Meta>
              <Card.Description>Ravi is a colleague.</Card.Description>
            </Card.Content>
          </Card>
          <h4>Files shared</h4>
          <Card.Meta>
            <span>None</span>
          </Card.Meta>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}