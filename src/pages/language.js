import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SimpleStorage from "react-simple-storage";

class language extends Component {

  render() {
    return (
      <div>
        <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
          <Link to="/cards">Link</Link>
      </div>
    )
  }
}

export default language;