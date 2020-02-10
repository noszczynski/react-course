import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import TwittersView from "./views/TwittersView/TwittersView";
import NotesView from "./views/NotesView/NotesView";
import ArticleView from "./views/ArticlesView/ArticleView";
import { Switch } from "react-router";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import AppContext from "../src/context";

class App extends Component {
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  state = {
    isModalOpen: true,
    twitter: [],
    article: [],
    note: [],
    openModal: this.openModal,
    closeModal: this.closeModal
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));

    this.closeModal();
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
