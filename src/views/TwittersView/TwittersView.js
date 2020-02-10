import React, { Component } from "react";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import AppContext from "../../context";

class TwittersView extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => <ListWrapper items={context.twitter} />}
      </AppContext.Consumer>
    );
  }
}

export default TwittersView;
