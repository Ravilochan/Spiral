import React , { useState} from "react";
import { Grid, Segment, Search, Card, Image } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import useFirestoreCollection from '../../app/hooks/useFirestoreCollection';
import useFirestoreDoc from "../../app/hooks/useFirestoreDoc";
import {listenToAllUsers, listenToSelectedUserProfile} from '../profiles/profileActions';
import { getUserProfile , getAllUsers } from "../../app/firestore/firestoreService";
import { useSelector, useDispatch } from 'react-redux';
import Fuse from 'fuse.js';
import ChatDetailed from "./ChatDetailed";

export default function ChatDashboard({match}) {
  const dispatch = useDispatch();
  const { selectedUserProfile } = useSelector((state) => state.profile);
  // const { currentUser } = useSelector((state) => state.auth);
  // const { loading, error } = useSelector((state) => state.async);
  // const paramIdLength = match.params.id?.length || "null";
  useFirestoreDoc({
    query: () => getUserProfile(match.params.id),
    data: (profile) => dispatch(listenToSelectedUserProfile(profile)),
    deps: [dispatch, match.params.id],
  });

  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const { allUsers} = useSelector((state) => state.profile);
  // const [searchData, setSearchData] = useState(allUsers)
  useFirestoreCollection({
    query: getAllUsers,
    data: (users) => dispatch(listenToAllUsers(users)),
    deps: [dispatch]
  });
  console.log(allUsers);
  const fuse = new Fuse(allUsers)
  const result = fuse.search(value)
    // const finalResult = [];
    // if (result.length) {
    //   result.forEach((item) => {
    //     finalResult.push(item.item);
    //   });
    //   setSearchData(finalResult);
    //   setLoading(false)
    // } else {
    //   setSearchData([]);
    //   setLoading(false);
    // }
  console.log(result)
  return (
    <Grid>
      <Grid.Column width={3}>
        <Search category
            loading={isLoading}
            results={result}
            onSearchChange={(e)=>{setValue(e.target.value)
            console.log(e.target.value)}}
            searchFunction
            value={value}/>
        <Segment.Group>
        {allUsers?.map((user) => (
  <Segment as={NavLink} to={'/chat/'+user.id} key={user.id} style={{display:"flex"}}>
  <Image avatar src={user.photoURL || '/assets/user.png'} style={{marginRight:"1em"}}/>
  {user.displayName}</Segment>
        ))}
        </Segment.Group>
      </Grid.Column>
      <Grid.Column width={10}>
  {/* {paramIdLength && <Segment.Group>
          <div>
            <Segment color="red">
              <h4>
                <Icon name="user" />
                Aryan
              </h4>
              <Message color="red">Hi Ravi</Message>
            </Segment>
            <Segment color="blue">
              <h4>
                <Icon name="user outline" />
                Ravi
              </h4>
              <Message color="blue">Hey Aryan</Message>
            </Segment>
            <Segment color="red">
              <h4>
                <Icon name="user" />
                Aryan
              </h4>
              <Message color="red">This wroks</Message>
            </Segment>
            <Segment color="blue">
              <h4>
                <Icon name="user outline" />
                Ravi
              </h4>
              <Message color="blue">It sure does</Message>
            </Segment>
            <Segment>
              <Input fluid icon="send" placeholder="Enter Text..." size="big" />
            </Segment>
          </div>
        </Segment.Group>
  } */}
        <ChatDetailed eventId={match.params.id} />
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment>
          <Card>
            <Image
              src={selectedUserProfile?.photoURL ||' /assets/user.png'}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{selectedUserProfile?.displayName || "Ravi"}</Card.Header>
              <Card.Meta>
                <span className="date">(4/4) IT B</span>
              </Card.Meta>
              <Card.Description>{selectedUserProfile?.email}</Card.Description>
            </Card.Content>
          </Card>
          <h4>Files shared</h4>
          <Card.Meta>
            <span>None</span>
          </Card.Meta>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}