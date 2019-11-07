// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import SimpleStorage from "react-simple-storage";

// class language extends Component {

//   render() {
//     return (
//       <div>
//         <select value={this.state.selectValue} onChange={this.handleChange}>
//             <option value="laranja">Laranja</option>
//             <option value="limao">Limão</option>
//             <option value="coco">Coco</option>
//             <option value="manga">Manga</option>
//           </select>
//           <Link to="/cards">Link</Link>
//       </div>
//     )
//   }
// }

// export default language;

import React from 'react';

class Language extends React.Component {
//*~ Armazenar valores
  constructor(props) {
    super(props);
    this.state = { escolha : '', teste : ''};

    //*~ Prevent Default para deletar o localStorage caso o usuário retorne
    if (localStorage.getItem('idioma')) {
      localStorage.removeItem('idioma');
    }
  }

  //*~ Capturar valor selecionado pelo usuário
  onChange = event => {
    this.setState({ escolha: event.target.value })
  }

  //*~ Quando apertar
  onSearch = event => {
    event.preventDefault();

    const { escolha } = this.state;
    
    //*~ Salvar no localStorage + Verificar se há valor + Alterar página
    if ( escolha === '' || escolha == null){
      console.log("não");
    } else {
      localStorage.setItem('idioma', escolha);

     window.location.href = "/cards";
    }
  }

  //*~ Retornar pro DOM as informações
  render() {
      return (
        <div>
          <form onSubmit={this.onSearch}>
            <select onChange={this.onChange}>
            <option value="">Selecione</option>
              <option value="en_US">Ingles</option>
              <option value="pt_BR">Portuguese</option>
            </select>
            <button type="submit">Teste</button>
          </form>
        </div>
      );
  }
}
export default Language;
