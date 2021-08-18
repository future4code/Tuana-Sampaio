import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage";


const isLogged = false;

function Router() {
    return (
      <BrowserRouter>

        <Switch>
            <Route exact path = "/">
                <HomePage/>
            </Route>

            <Route exact path = "/listTrip">
                <ListTripsPage/>
            </Route>

            <Route exact path = "/login">
                <LoginPage/>
            </Route>

            <Route exact path = "/AdminHome">
                {isLogged ? <AdminHomePage/> : <Redirect to="/login"/>}
            </Route>

            <Route exact path = "/tripDetails">
                <TripDetailsPage/>
            </Route>

            <Route exact path = "/ApplicationForm">
                <ApplicationFormPage/>
            </Route>

            <Route exact path = "/CreateTrip">
                <CreateTripPage/>
            </Route>
            
        </Switch>
        
      </BrowserRouter>
    );
  }
  
  export default Router;
  