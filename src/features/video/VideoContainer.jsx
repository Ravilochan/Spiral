import React, { useContext } from 'react';
import { Grid} from 'semantic-ui-react'

import { SocketContext } from '../../app/api/Context';

export default function VideoContainer() {
    const {callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <Grid >
            <Grid.Row>
            <Grid.Column width={8}>  
          {stream && (
            <div style={{marginLeft:50}}>
                <h3>You</h3>
                <video playsInline muted ref={myVideo} autoPlay/>
            </div>
          )}
          </Grid.Column>  
          <Grid.Column width={8}> 
          {callAccepted && !callEnded && (
            <div style={{}}>
                <h3>{call.name}</h3>
                <video playsInline ref={userVideo} autoPlay />
            </div>
          )}
          </Grid.Column> 
            </Grid.Row>
        </Grid>
      );
}
