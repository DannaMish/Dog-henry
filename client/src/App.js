
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/HomePage/HomePage";
import LandingPage from "../src/LandingPage/LandingPage";


function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/home" > <HomePage /> </Route>
          <Route path="/" > <LandingPage /> </Route>
        </Switch>
    </Router>

  );
}

export default App;
