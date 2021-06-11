import React , { useContext} from 'react';
import { Button } from 'semantic-ui-react'
import { SocketContext } from '../../app/api/Context';
export default function Notification() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
      <>
        {call.isReceivingCall && !callAccepted && (
          <div style={{ display:'flex', justifyContent: 'center' }}>
            <h2>{call.name} is on the Call </h2>
            <span>
            <Button positive onClick={answerCall} icon="video" content={'Join '+call.name} style={{ marginLeft:20}} />
            </span>
          </div>
        )}
</>
    )
}
