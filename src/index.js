// import React from 'react';
// import { render } from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
// import language from "./pages/language";
// import cards from "./pages/cards";

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={language} />
//           <Route path="/cards" component={cards} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));


import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Language from "./pages/language";
import Cards from "./pages/cards";
import Header from "./components/header";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <Header />
            <Language />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
