// routes for the application

import Dashboard from './../components/Dashboard';
import LandingPage from '../components/LandingPage';
import NotFound from './../components/NotFound';
import SignUp from './../components/SignUp';
import SignIn from './../components/SignIn';
import CreateTeam from './../components/CreateTeam';
import JoinTeam from './../components/JoinTeam';
import Game from './../components/Game';

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
    component: Game,
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