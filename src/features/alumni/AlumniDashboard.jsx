import React, {useState} from "react";
import Fuse from 'fuse.js';
import { Form, Grid, Segment,Item } from "semantic-ui-react";
import {Alumni} from '../../app/api/sampleAlumni';

export default function ProjectDashboard() {
  const [query, updateQuery] = useState('');

  const fuse = new Fuse(Alumni, {
    keys: ['name', 'description', 'workplace'],
    includeScore: true
  });
  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : Alumni;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <Grid>
      <Grid.Row>
      <Grid.Column width={6}>
        <Segment inverted>
          <Form inverted>
            <h1>Search Alumni</h1>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                // label="Search Repositories"
                placeholder="Start Typing Name or Any Inforamtion"
                onChange={onSearch}
                value={query}
              />
            </Form.Group>
            <h3 style={{marginBottom:"1em"}}> Related Information will be populated 😃</h3>
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={10}>
<Segment>
        <Item.Group>
        {characterResults.map(character => {
            const { name, photoURL, description , year, workplace} = character;
            return (
    <Item style={{width:"100vh"}}>
      <Item.Image size='small' src={photoURL || '/assets/user.png'} />
      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Description>
        {description}
        <h4 style={{marginTop:"1em"}}>Workplace : {workplace}</h4>
        </Item.Description>
        <Item.Extra>Bacth of {year}</Item.Extra>
      </Item.Content>
    </Item>
        )
        })} 
    </Item.Group>
    </Segment>
    </Grid.Column>
    </Grid.Row>
    </Grid>
  );
}
