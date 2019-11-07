// import React, { Component } from 'react';

// class cards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             items: result.data
//           });
//         }
//       )
//   }

//   render() {
//     const { items } = this.state;
//       return (
//         <ul>
//           {Object.keys(items).map((key, item) => (
//             <li key={item}>
//               {items[key].name} - {items[key].title} - {items[key].blurb}
//               <img src={ "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + items[key].id + "_0.jpg" }/>
//             </li>
//           ))}
//         </ul>
//       );
//   }
// }

// export default cards;

import React, { Component } from 'react';

const base = "https://ddragon.leagueoflegends.com/cdn/6.24.1/data/";
const campeao =  "/champion.json";
const idioma = "en_US";
const URL = base + idioma + campeao;

class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      error: null,
    };
    console.log(this.state);
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(URL)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error ('Algo errado');
      }
    })
      .then(result => this.setState({ items: result.data, isLoading: false}))
      .catch(error => this.setState ({ error, isLoading: false }));
  }


  render() {
    const { items, isLoading, error } = this.state;
    if (isLoading) { return <p>Loading ...</p>; }
    if (error) { return <p>{error.message}</p>; }
      return (
        <ul>
          {Object.keys(items).map((key, item) => (
            <li key={item}>
              {items[key].name} - {items[key].title} - {items[key].blurb}
              {/* <img src={ "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + items[key].id + "_0.jpg" }/> */}
            </li>
          ))}
        </ul>
      );
  }
}

export default cards;
