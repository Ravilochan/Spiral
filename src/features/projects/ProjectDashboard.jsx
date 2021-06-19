import React, {useState} from "react";
import Fuse from 'fuse.js';
import { NavLink } from 'react-router-dom';
import { Form, Grid, Segment, Header, Table, Item } from "semantic-ui-react";
import {Projects} from '../../app/api/sampleProjects';

export default function ProjectDashboard() {
  const [query, updateQuery] = useState('');

  const fuse = new Fuse(Projects, {
    keys: [
      'title',
      'description',
      'guide',
      'tag',
      'year'
    ],
    includeScore: true
  });
  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : Projects;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <Grid>
      <Grid.Row>
      <Grid.Column width={10}>
        <Segment inverted>
          <Form inverted>
            <h1>Search Repositories</h1>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                // label="Search Repositories"
                placeholder="Start Typing Project Name , Title , Abstract or Any Inforamtion"
                onChange={onSearch}
                value={query}
              />
            </Form.Group>
            {/* <Form.Group widths="equal">
              <Form.Input fluid label="Team Member" placeholder="Team Member" onChange={onSearch} value={query} />
            </Form.Group>

            <Button type="submit">Search</Button> */}
            <h3 style={{marginBottom:"1em"}}> Related Information will be populated below 😃</h3>
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <h2>Top Results</h2>
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
              {/* <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>
                      Suraj, Jayanth, Rachanarshini
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Image tampering detection</Table.Cell>
              </Table.Row> */}
              {/* <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>Rohit , Ashish, Kiran</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Disaster prediction system</Table.Cell>
              </Table.Row> */}
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
<Segment>
        <Item.Group>
        {characterResults.map(character => {
            const { title, description, guide, abstract,hostPhotoURL, RepoURL } = character;
            return (
    <Item style={{width:"100vh"}}>
      <Item.Image size='small' src={hostPhotoURL || '/assets/user.png'} />
      <Item.Content>
        <Item.Header as={NavLink} to={{ pathname: RepoURL || 'https://cloud-campus-15a0d.web.app/project'}} target="_blank">{title}</Item.Header>
        <Item.Meta>{description}</Item.Meta>
        <Item.Description>
        {abstract}
        </Item.Description>
        <Item.Extra>Guide : {guide}</Item.Extra>
        </Item.Content>
        </Item>
        )
        })} 
    </Item.Group>
    </Segment>
    </Grid.Row>
    </Grid>
  );
}
