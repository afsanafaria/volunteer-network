import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import VolunteerList from './pages/VoluneerList/VolunteerList';
import VolunteerReg from './pages/VolunteerReg/VolunteerReg';
import AddEvent from './pages/AddEvent/AddEvent';
import Header from './shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import EventTasks from './components/EventTasks/EventTasks';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="/home">
            <Home ></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/volunteerlist">
            <VolunteerList></VolunteerList>
          </PrivateRoute>
          <PrivateRoute path="/volunteerreg/:eventId">
            <VolunteerReg></VolunteerReg>
          </PrivateRoute>
          <PrivateRoute path="/eventTasks/:userId">
            <EventTasks></EventTasks>
          </PrivateRoute>
          <PrivateRoute path="/addevent">
            <AddEvent></AddEvent>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
