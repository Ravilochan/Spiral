import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS, LISTEN_TO_EVENT_CHAT , LISTEN_TO_SELECTED_EVENT, CLEAR_SELECTED_EVENT} from './eventConstants';
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../../app/async/asyncReducer';
import {fetchSampleData} from '../../app/api/mockApi';

export function loadEvents() {
    return async function(dispatch) {
        dispatch(asyncActionStart())
        try {
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: events});
            dispatch(asyncActionFinish())
        } catch (error) {
            dispatch(asyncActionError(error));
        }
    }
}

export function createEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        payload: eventId
    }
}

export function listenToEvents(events) {
    return {
        type: FETCH_EVENTS,
        payload: events
    }
}

export function listenToEventChat(comments) {
    return {
        type: LISTEN_TO_EVENT_CHAT,
        payload: comments
    }
}

export function listenToSelectedEvent(event) {
    return {
      type: LISTEN_TO_SELECTED_EVENT,
      payload: event,
    };
  }
  
  export function clearSelectedEvent() {
    return {
      type: CLEAR_SELECTED_EVENT
    }
  }