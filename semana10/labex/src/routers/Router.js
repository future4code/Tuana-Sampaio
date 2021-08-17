import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";



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

            <Route exact path = "/AdminHome">
                <AdminHomePage/>
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
  