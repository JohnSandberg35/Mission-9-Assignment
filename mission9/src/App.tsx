import './App.css';
import teamData from './CollegeBasketballTeams.json';

function Heading() {
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

function TeamCard(props: { school: string; name: string; city: string; state: string }) {
  return (
    <div className="team-card">
      <h2>{props.school}</h2>
      <p><strong>Mascot:</strong> {props.name} | <strong>Location:</strong> {props.city}, {props.state}</p>
    </div>
  );
}

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