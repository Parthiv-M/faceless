// routes for the application

import Dashboard from './../components/Dashboard';
import LandingPage from '../components/LandingPage';
import NotFound from './../components/NotFound';
import SignUp from './../components/SignUp';
import SignIn from './../components/SignIn';
import CreateTeam from './../components/CreateTeam';
import JoinTeam from './../components/JoinTeam';
import GameScreen from './../components/Game';
import ScoreBoard from './../components/ScoreBoard';
import TeamProfile from './../components/TeamProfile';

const routes = [  
  {
    path:'/home',
    component: LandingPage,
    isPrivate: false
  },
  {
    path:'/signUp',
    component: SignUp,
    isPrivate: false
  },
  {
    path:'/signIn',
    component: SignIn,
    isPrivate: false
  },
  {
    path:'/createTeam',
    component: CreateTeam,
    isPrivate: true
  },
  {
    path:'/joinTeam',
    component: JoinTeam,
    isPrivate: true
  },
  {
    path:'/game',
    component: GameScreen,
    isPrivate: true
  },
  {
    path:'/scoreboard',
    component: ScoreBoard,
    isPrivate: true
  },
  {
    path:'/teamboard',
    component: TeamProfile,
    isPrivate: true
  },
  {
    path:'/dashboard',
    component: Dashboard,
    isPrivate: true
  },
  {
    path:'/*',
    component: NotFound,
    isPrivate: false
  },
]
 
export default routes;