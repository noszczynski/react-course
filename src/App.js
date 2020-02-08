import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import TwittersView from "./views/TwittersView/TwittersView";
import NotesView from "./views/NotesView/NotesView";
import ArticleView from "./views/ArticlesView/ArticleView";
import { Switch } from "react-router";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
