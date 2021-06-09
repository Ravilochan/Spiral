import React from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';

export default function ProfileContent({profile, isCurrentUser}) {
    const panes = [
        {menuItem: 'About', render: () => <AboutTab profile={profile} isCurrentUser={isCurrentUser} />},
        {menuItem: 'Chats', render: () => <Tab.Pane>Chats <p> open chat window </p></Tab.Pane>},
        {menuItem: 'Events', render: () => <Tab.Pane>Events <p> Redirect to main events page</p></Tab.Pane>},
        {menuItem: 'Forms', render: () => <Tab.Pane>Forms <p> open forms page (if forms there show)</p></Tab.Pane>},
        {menuItem: 'Parent Teacher Meet', render: () => <Tab.Pane>PTM <p>go to ptm feature</p></Tab.Pane>},
    ]

    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    )
}