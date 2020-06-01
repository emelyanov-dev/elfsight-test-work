import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import routes from "./routes";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route}/>)}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
