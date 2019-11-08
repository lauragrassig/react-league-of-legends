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

//*~ Váriaveis para o consumo da API
const linguagem = localStorage.getItem('idioma');
const URL = "https://ddragon.leagueoflegends.com/cdn/6.24.1/data/" + linguagem + "/champion.json";

class cards extends Component {
//*~ Armazenar valores
  constructor(props) {
    super(props);
    this.state = {import React, { Component } from 'react';

//*~ Váriaveis para o consumo da API
const linguagem = localStorage.getItem('idioma');
const URL = "https://ddragon.leagueoflegends.com/cdn/9.22.1/data/" + linguagem + "/champion.json";

class cards extends Component {
//*~ Armazenar valores
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      error: null,
    };
  }

//*~ Consumino a API
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

//*~ Retornar pro DOM as informações
  render() {
    const { items, isLoading, error } = this.state;
    if (isLoading) { return <p>Loading ...</p>; }
    if (error) { return <p>{error.message}</p>; }
      return (
        <div className="teste">
          {Object.keys(items).map((key, item) => (
            <div key={item}>
              {items[key].name} - {items[key].title} - {items[key].blurb}
              <img src={ "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + items[key].id + "_0.jpg" }/>
            </div>
          ))}
        </div>
      );
  }
}

export default cards;
