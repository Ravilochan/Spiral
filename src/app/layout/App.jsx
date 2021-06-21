import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailer from '../../features/events/eventDetailed/EventDetailed';
import AlumniDashboard from '../../features/alumni/AlumniDashboard';
import ChatDashboard from '../../features/chat/ChatDashboard'
import ProjectDashboard from '../../features/projects/ProjectDashboard.jsx';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';
import EventForm from '../../features/eventform/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/Navbar';
import LiveStream from '../../features/live/LiveStream';
import ErrorComponent from '../common/errors/ErrorComponent';
import ModalManager from '../common/modals/ModalManganer';
import LoadingComponent from './LoadingComponent';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import {Route , useLocation} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import VideoChatContainer from '../../features/videoChat/VideoChatContainer';

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
            <Route path='/alumni' component={AlumniDashboard} />
            <Route path='/project' component={ProjectDashboard} />
            <Route path='/chat' component={ChatDashboard} />
            <Route path='/profile/:id' component={ProfilePage} />
            <Route path="/live" component={LiveStream} />
            <Route path='/error' component={ErrorComponent} />
          </Container>
          <Route path='/videoChat' component={VideoChatContainer} />
        </>
      )}
    />
  </>
  );
}