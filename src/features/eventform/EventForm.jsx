import React , { useState} from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../events/eventActions';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

    const initialValues = selectedEvent ?? {
        title:"",
        category:"",
        description:"",
        location:"",
        class:"",
        date:""
    }
    const [values , setValues] = useState(initialValues)

    function handleFormSubmit(){
        selectedEvent
        ? dispatch(updateEvent({ ...selectedEvent, ...values }))
        : dispatch(
            createEvent({
              ...values,
              id: '5',
              hostedBy: 'Bob',
              attendees: [],
              hostPhotoURL: '/assets/user.png',
            })
          );
      history.push('/events');
    }

    function handleInputChange(e){
        const { name , value } = e.target;
        setValues({...values, [name]:value})
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type='text' name="title" placeholder='Event Title' value={values.title} onChange={(e)=> handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' name="category" placeholder='Event Category' value={values.category} onChange={(e)=> handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <textarea type='text' name="description" placeholder='Event Description ' rows="4" cols="50" value={values.description} onChange={(e)=> handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' name="location" placeholder='Event Location' value={values.location} onChange={(e)=> handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' name="class" placeholder='Event Class' value={values.class} onChange={(e)=> handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='date' name="date" placeholder='Event Date' value={values.date} onChange={(e)=> handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content="Submit" />
                <Button as={Link} to='/events' type='cancel' content="Cancel" />
            </Form>
        </Segment>
    )
}
