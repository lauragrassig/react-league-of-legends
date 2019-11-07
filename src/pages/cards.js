import React, { Component } from 'react';

class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data
          });
        }
      )
  }

  render() {
    const { items } = this.state;
      return (
        <ul>
          {Object.keys(items).map((key, item) => (
            <li key={item}>
              {items[key].name} - {items[key].title} - {items[key].blurb}
              <img src={ "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + items[key].id + "_0.jpg" }/>
            </li>
          ))}
        </ul>
      );
  }
}

export default cards;