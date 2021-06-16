import React, { useEffect,useContext, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { SocketContext } from '../../app/api/Context'
import {updateSocketId} from '../../app/firestore/firestoreService'

export default function AdditionalBar({profile , user}) {
    const { me, callAccepted, callEnded, leaveCall, callUser} = useContext(SocketContext);
    const idToCall = profile.socketId;
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
     updateSocketId(me);
     if(me)
     {
        setStatus(true);
     }
    console.log("SocketID in Component",me);

    },[me]);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' , marginTop:20}} >
            {/* <p>{me} == JOIN == {idToCall}</p> */}
            {callAccepted && !callEnded ? (
                <Button icon="stop" color='red' onClick={leaveCall} content="Leave" />
              ) : (
                <Button icon="video" disabled={!status} positive loading={loading} onClick={() =>{
                  callUser(idToCall, user?.displayName);
                  setLoading(true);
                }} content="Join" />
              )}
        </div>
    )
}
