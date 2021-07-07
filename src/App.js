import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import TwittersView from "./views/TwittersView/TwittersView";
import NotesView from "./views/NotesView/NotesView";
import ArticleView from "./views/ArticlesView/ArticleView";
import { Switch } from "react-router";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    isModalOpen: true,
  };

  openModal = () => {
    this.setState({isModalOpen: true});
  };

  closeModal = () => {
    this.setState({isModalOpen: false});
  };

  render() {
    const {isModalOpen} = this.state;

    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal}/>}
        </>
      </BrowserRouter>
    );
  }
}

export default App;
