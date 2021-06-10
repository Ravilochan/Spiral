import React from "react";
import { Button, Form, Grid, Segment, Header, Table } from "semantic-ui-react";

export default function ProjectDashboard() {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Project Title"
                placeholder="Project Title"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input fluid label="Team Member" placeholder="Team Member" />
            </Form.Group>

            <Button type="submit">Search</Button>
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={10}>
        <Segment>
          <h1>Output</h1>
          <Table basic="very" celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team members</Table.HeaderCell>
                <Table.HeaderCell>Project Title</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>Ravilochan, Aryan, Eshani</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Cloud Campus</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>Jayram , Sowmya, Nikhil</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Helmet detection</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>
                      Suraj, Jayanth, Rachanarshini
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Image tampering detection</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>Rohit , Ashish, Kiran</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Disaster prediction system</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
