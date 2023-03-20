
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/HomePage/HomePage";
import LandingPage from "../src/LandingPage/LandingPage";
import Detail from "./Detail/Detail";


function App() {
  return (
    <Router>
      
        <Switch>
          
          <Route path="/detail/:id"><Detail /></Route>
          <Route path="/home" > <HomePage /> </Route>
          <Route path="/" > <LandingPage /> </Route>
        </Switch>
    </Router>

  );
}

export default App;
