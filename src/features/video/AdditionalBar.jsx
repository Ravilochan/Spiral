import React, { useEffect,useContext, useState } from 'react'
import { Segment ,Button } from 'semantic-ui-react'
import { SocketContext } from '../../app/api/Context'
import {updateSocketId} from '../../app/firestore/firestoreService'

export default function AdditionalBar({profile , user}) {
    const { me, callAccepted, callEnded, leaveCall, callUser, call } = useContext(SocketContext);
    const idToCall = profile.socketId;
    const [status, setStatus] = useState(false);
    useEffect(() => {
     updateSocketId(me);
     if(me)
     {
        setStatus(true);
     }
    console.log(me);

    }, [me]);
    return (
        <Segment style={{ display: 'flex', justifyContent: 'space-around'}} >
            {/* <p>{me} == JOIN == {idToCall}</p> */}
            {callAccepted && !callEnded ? (
                <Button icon="stop" onClick={leaveCall} content="Leave" />
              ) : (
                <Button icon="video" disabled={!status} positive onClick={() => callUser(idToCall, user?.displayName)} content="Join" />
              )}
        </Segment>
    )
}
