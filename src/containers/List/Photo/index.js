import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    const { thumbnailUrl, title } = this.props;

    return (
      <figure>
        <img src={thumbnailUrl} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  }
}
