import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import routes from './config/routes';
import { AuthProvider } from './context';
import AppRoute from './components/AppRoutes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {
              routes.map((route) => (
                <AppRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))
            }
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
