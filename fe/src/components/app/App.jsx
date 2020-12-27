import { Route, Switch } from 'react-router-dom';
import { Login, NewChallenge, ActiveChallenge, TaskArchive, Notification } from '../pages/index';

const App = () => {
  return (
    <>
      <Notification />
      <Switch>
        <Route 
          path='/'
          component={Login}
          exact
        />

        <Route 
          path='/newChallenge'
          component={NewChallenge}
          exact
        />

        <Route 
          path='/activeChallenge'
          component={ActiveChallenge}
          exact
        />

        <Route 
          path='/taskArchive'
          component={TaskArchive}
          exact
        />
      </Switch>
    </>
  );
}

export default App;