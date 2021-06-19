import React, {useState} from 'react';
import { Grid , Segment, Image , Button, Icon} from 'semantic-ui-react';
import { useDispatch,useSelector } from 'react-redux';
import {listenToAllUsers} from '../profiles/profileActions';
import useFirestoreCollection from '../../app/hooks/useFirestoreCollection';
import { getAllUsers } from '../../app/firestore/firestoreService';

export default function VideoChatChild({onLogin, startCall, setRemoteVideoRef, setLocalVideoRef, connectedUser}) {
    const { currentUser } = useSelector((state) => state.auth);
    const { allUsers} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);
    const [select, setSelect] = useState(false);
    const [call, setCall]=useState(false)
    useFirestoreCollection({
        query: getAllUsers,
        data: (users) => dispatch(listenToAllUsers(users)),
        deps: [dispatch]
      });
    return (
        <Grid >
            <div style={{marginLeft:"2em"}}>
                <h3> Instructions to make a Video Call:</h3>
                <h4> <span style={{marginRight:"2em"}}>1: Click on <Icon name="video" color="grey" style={{margin:"0.5em"}}/>Make your self Online button to make & receive calls</span><span style={{marginRight:"2em"}}>2 : Select User <Icon name="video" color="green" style={{margin:"0.5em"}}/> to make video call </span> <span>3 : Click on <Icon name="stop" color="red" style={{margin:"0.5em"}}/>Leave to exit the Video Call</span></h4>
                
            </div>   
            <Grid.Row style={{display:"flex", justifyContent:"center"}}>
            {call? (<Button icon="stop" color='red' onClick={()=>{
                    setCall(false);
                     window.location.reload();
                     window.history.back()
             }} content="Leave" />
              ) : (
                <Button icon="video" color='teal' onClick={() =>{
                    onLogin(currentUser.uid);
                    console.log("CURRENT ID : "+currentUser.uid)
                    setLoggedIn(true); 
                    setCall(true);
                }} content="Make Your Self Online" />
              )}
            </Grid.Row>
            <Grid.Row>
             {!select && (   
            <Segment.Group style={{marginLeft:50}}>
            <h3 style={{padding:"1em"}}>Click on <Icon name="video" color="green" style={{margin:"0.5em"}}/> to make Video Call to User</h3>
        {allUsers?.map((user) => (
        <Segment key={user.id} style={{display:"flex"}}>
        <Image avatar src={user.photoURL || '/assets/user.png'} style={{marginRight:"1em"}}/>
        {user.displayName}
        <Button positive icon="video" style={{marginLeft:"auto"}} onClick={()=>{
            startCall(currentUser.uid,user.id);
            console.log("USER ID : "+user.id)
            setSelect(true)
            }} />
        </Segment>
        ))}
        </Segment.Group>
            )}
            <Grid.Column width={8}>  
            <div style={{marginLeft:50}}>
                <h3>You</h3>
                <video ref={setLocalVideoRef} muted autoPlay playsInline></video>
            </div>
          </Grid.Column>
          {loggedIn && (  
          <Grid.Column width={8}> 
            <h3> Other</h3>
            <video ref={setRemoteVideoRef} autoPlay playsInline></video>
          </Grid.Column> 
         )}
            </Grid.Row>
        </Grid>
          
    )
}
