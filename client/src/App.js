import './App.css';
import About from './Components/about';
import CreateTeam from './Components/createTeam';
import JoinTeam from './Components/joinTeam';
import Login from './Components/login';
import Navbar from './Components/navbar';
import Register from './Components/registration';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <CreateTeam />
      <Login />
      <Register />
      <JoinTeam />
    </div>
  );
}

export default App;
