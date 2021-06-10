import React from "react";
import {
  Button,
  Form,
  Grid,
  Segment,
  Header,
  Image,
  Table,
} from "semantic-ui-react";

export default function AlumniDashboard() {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input fluid label="Name" placeholder="Name" />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input fluid label="Roll Number" placeholder="Roll Number" />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Class"
                placeholder="Roll Number(without last three digits)"
              />
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
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Contact Info</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src="/images/woman1.jpg" rounded size="mini" />
                    <Header.Content>
                      Lena
                      <Header.Subheader>Human Resources</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>9999999999</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src="/images/man1.jpg" rounded size="mini" />
                    <Header.Content>
                      Matthew
                      <Header.Subheader>Fabric Design</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>8888888888</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src="/images/woman2.jpg" rounded size="mini" />
                    <Header.Content>
                      Lindsay
                      <Header.Subheader>Entertainment</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>7777777777</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src="/images/man2.jpg" rounded size="mini" />
                    <Header.Content>
                      Mark
                      <Header.Subheader>Executive</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>6666666666</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
