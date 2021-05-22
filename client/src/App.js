import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import routes from './config/routes';
import { FacelessProvider } from './context';
import AppRoute from './components/AppRoutes';

function App() {
  return (
    <div className="App">
      <FacelessProvider>
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
      </FacelessProvider>
    </div>
  );
}

export default App;
