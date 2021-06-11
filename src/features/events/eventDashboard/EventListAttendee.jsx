import React from 'react'
import { Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function EventListAttendee({attendee}) {
    return (
        <List.Item as={Link} to={`/profile/${attendee.id}`}>
            <Image size='mini' circular src='/assets/user.png' />
        </List.Item>
    )
}
