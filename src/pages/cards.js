import React, { Component } from 'react';

class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {Object.keys(items).map((key, item) => (
            <li key={item}>
              {items[key].name} - {items[key].title} - {items[key].blurb}
              <img src={items[key].image}/>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default cards;