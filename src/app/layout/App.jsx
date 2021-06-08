import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailer from '../../features/events/eventDetailed/EventDetailed';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';
import EventForm from '../../features/eventform/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/Navbar';
import ErrorComponent from '../common/errors/ErrorComponent';
import ModalManager from '../common/modals/ModalManganer';
import LoadingComponent from './LoadingComponent';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import {Route , useLocation} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  const {key} = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content='Loading app...' />
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
            <Route path='/account' component={AccountPage} />
            <Route path='/profile/:id' component={ProfilePage} />
            <Route path='/error' component={ErrorComponent} />
          </Container>
        </>
      )}
    />
  </>
  );
}