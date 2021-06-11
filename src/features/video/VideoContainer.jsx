import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react'

import { SocketContext } from '../../app/api/Context';

export default function VideoContainer({profile}) {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <Grid >
            <Grid.Row>
            <Grid.Column width={8}>  
          {stream && (
            <div>
                <video playsInline muted ref={myVideo} autoPlay/>
            </div>
          )}
          </Grid.Column>  
          <Grid.Column width={8}> 
          {callAccepted && !callEnded && (
            <div>
                <video playsInline ref={userVideo} autoPlay />
            </div>
          )}
          </Grid.Column> 
            </Grid.Row>
        </Grid>
      );
}
