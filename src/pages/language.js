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
      localStorage.removimport React from 'react';

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
        <div className="wrapper--language">
          <form className="language--form" onSubmit={this.onSearch}>
            <div className="box--language">
              <select onChange={this.onChange}>
                <option value="">Select your Language</option>
                <option value="en_US">English (North America)</option>
                <option value="pt_BR">Portugueses (Brazil)</option>
                <option value="it_IT">Italian</option>
                <option value="fr_FR">French</option>
                <option value="ja_JP">Japanese</option>
                <option value="ko_KR">Korean</option>
                <option value="es_MX">Spanish (Mexico)</option>
                <option value="es_AR">Spanish (Argentina)</option>
                <option value="en_AU">English (Australia)</option>
                <option value="ru_RU">Russian</option>
                <option value="ms_MY">Malay</option>
                <option value="en_PH">English (Republic of the Philippines)</option>
                <option value="en_SG">English (Singapore)</option>
                <option value="th_TH">Thai</option>
                <option value="vn_VN">Vietnamese</option>
                <option value="id_ID">Indonesian</option>
                <option value="zh_MY">Chinese (Malaysia)</option>
                <option value="zh_CN">Chinese (China)</option>
                <option value="zh_TW">Chinese (Taiwan)</option>
                <option value="cs_CZ">Czech</option>
                <option value="pl_PL">Polish (Poland)</option>
                <option value="zh_CN">Greek (Greece)</option>
                <option value="ro_RO">Romanian (Romania)</option>
                <option value="hu_HU">Hungarian (Hungary)</option>
                <option value="hu_HU">English (United Kingdom)</option>
                <option value="hu_HU">German (Germany)</option>
                <option value="hu_HU">Hungarian (Hungary)</option>
              </select>
            <button className="language--button" type="submit">Acessar</button>
            </div>
          </form>
        </div>
      );
  }
}
export default Language;
