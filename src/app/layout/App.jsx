import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailer from '../../features/events/eventDetailed/EventDetailed';
import EventForm from '../../features/eventform/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/Navbar';
import ErrorComponent from '../common/errors/ErrorComponent';
import ModalManager from '../common/modals/ModalManganer';
import { Container } from 'semantic-ui-react';
import {Route , useLocation} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  const {key} = useLocation();
  return (
    <>
    <ModalManager />
    <Toaster />
    <Route exact path='/' component={HomePage} />
    <Route
      path={'/(.+)'}
      render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailer} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
            <Route path='/error' component={ErrorComponent} />
          </Container>
        </>
      )}
    />
  </>
  );
}