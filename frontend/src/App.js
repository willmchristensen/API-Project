import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import SpotBrowser from "./components/SpotBrowser"
import SpotCards from "./components/SpotCards";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route
              path={[ "/api/spots"]}
              exact
            >
              <SpotBrowser />
            </Route>
          </Switch>
        )}  */}
      <SpotCards></SpotCards>
    </>
  );
}

export default App;