import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { GithubUserDetails } from './Components/GithubUserDetails/GithubUserDetail';
import { GithubSearchHome } from './Components/GithubSearch/GithubSearchHome';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/users/:login" component={GithubUserDetails} />
            <Route path="/" children={<GithubSearchHome />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
