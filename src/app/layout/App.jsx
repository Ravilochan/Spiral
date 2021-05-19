import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";

function App() {
  return (
    // <div className="App">
    <div>
      <Navbar />
      <Container className="main">
      <EventDashboard/>
      </Container>
    </div>
  );
}

export default App;
