import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '@components/Header/Header';
import Home from '@views/Home';
import About from '@views/About';

const App = () => {
  return (
    // <></> -> raccourcis pour faire <React.Fragment><React.Fragment />
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
