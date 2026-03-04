import './App.css';
import teamData from './CollegeBasketballTeams.json';

function Heading() {  //This function is called and it prints out the text showing what the march madness tournament is
  return (
    <div className="header-section">
      <h1>NCAA Basketball Teams</h1>
      <p>
        <strong>Welcome to our March Madness directory!</strong> March Madness is the thrilling 
        annual NCAA Division I basketball tournament where teams compete in a high-stakes, 
        single-elimination bracket to determine the national champion. Browse the teams below!
      </p>
    </div>
  );
}

// This Team Card function grabs the individual team information for each team so it can be displayed
function TeamCard(props: { school: string; name: string; city: string; state: string }) {
  return (
    <div className="team-card">
      <h2>{props.school}</h2>
      <p><strong>Mascot:</strong> {props.name} | <strong>Location:</strong> {props.city}, {props.state}</p>
    </div>
  );
}

// The TeamList function grabs each individual team information that is collected above and then displays it
function TeamList() {
  return (
    <>
      {teamData.teams.map((singleTeam) => (
        <TeamCard 
          key={singleTeam.tid} 
          {...singleTeam} 
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  )
}

export default App;