import React from 'react'
import AdditionalBar from './AdditionalBar'
import Notification from './Notification'
import VideoContainer from './VideoContainer'
import {ContextProvider} from '../../app/api/Context'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../app/firestore/firestoreService'
import { listenToSelectedUserProfile } from '../profiles/profileActions'
import useFirestoreDoc from '../../app/hooks/useFirestoreDoc'
import LoadingComponent from '../../app/layout/LoadingComponent'

export default function VideoDashboard({match}) {
    const dispatch = useDispatch();
    const { selectedUserProfile } = useSelector((state) => state.profile);
    const { currentUser } = useSelector((state) => state.auth);
    const { loading, error } = useSelector((state) => state.async);

    useFirestoreDoc({
        query: () => getUserProfile(match.params.id),
        data: (profile) => dispatch(listenToSelectedUserProfile(profile)),
        deps: [dispatch, match.params.id],
      });

      if ((loading && !selectedUserProfile) || (!selectedUserProfile && !error))
      return <LoadingComponent content='Loading ...' />;

    return (
        
        <ContextProvider>
            <Notification />
            <VideoContainer profile={selectedUserProfile} />
            <AdditionalBar profile={selectedUserProfile} user={currentUser} />
        </ContextProvider>
    )
}
