import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const {authenticated} = useSelector(state => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Spiral - Cloud Campus
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' icon="calendar" name='Events' />
        <Menu.Item as={NavLink} to='/alumni' icon="address book" name='Alumni' />
        <Menu.Item as={NavLink} to='/project' icon="github alternate" name='Project Repository' />
        <Menu.Item as={NavLink} to="/live" icon="fire" name="Live" />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? (
        <SignedInMenu />
        ) : (
          <SignedOutMenu />
        )}
      </Container>
    </Menu>
  );
}