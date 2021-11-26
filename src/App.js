import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterHare from './components/RegisterHare/RegisterHare';
import SerialBookDetails from './components/SerialBookDetails/SerialBookDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
         <AuthProvider>
          <Router>
              <Switch>
                <Route exact path="/">
                  <Header></Header>
                </Route>
                <Route path="/home">
                  <Header></Header>
                </Route>
                <Route path="/doctors">
                  <Doctors></Doctors>
                </Route>
                <Route path="/features">
                  <Feature></Feature>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <RegisterHare></RegisterHare>
                </Route>
                <PrivateRoute path="/serialbook/:serialbookId">
                  <SerialBookDetails></SerialBookDetails>
                </PrivateRoute>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
