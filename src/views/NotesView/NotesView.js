import React, { Component } from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

class NotesView extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => <ListWrapper items={context.note} />}
      </AppContext.Consumer>
    );
  }
}

export default NotesView;
