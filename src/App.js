import React from "react";
import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
