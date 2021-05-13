import './App.css';
import About from './Components/about';
import CreateTeam from './Components/createTeam';
import JoinTeam from './Components/joinTeam';
import Login from './Components/login';
import Navbar from './Components/navbar';
import Register from './Components/registration';
import ScoreBoard from './Components/scoreBoard';
import Play from './Components/play';

function App() {
  return (
    <div className="App">
      
      <CreateTeam />
      <ScoreBoard />
      <Play />
    </div>
  );
}

export default App;
