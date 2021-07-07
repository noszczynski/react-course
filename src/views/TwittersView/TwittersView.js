import React, { Component, Fragment } from "react";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const initialStateItems = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg",
    name: "Dan Abramov",
    description: "The creator of React",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class TwittersView extends Component {
  state = {
    items: [...initialStateItems]
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <>
        <ListWrapper items={this.state.items} />
      </>
    );
  }
}

export default TwittersView;
