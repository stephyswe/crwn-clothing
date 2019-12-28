import React, { Component } from "react";
import { sections } from "./directory.data";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

class Directory extends Component {
  state = {
    sections
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
