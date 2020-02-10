import React, { Component } from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

class ArticleView extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => <ListWrapper items={context.article} />}
      </AppContext.Consumer>
    );
  }
}

export default ArticleView;
