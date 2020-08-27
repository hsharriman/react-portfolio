import React from "react"
import {Link} from "gatsby"

//gif path
//color, top, left
//href
//text
//classname
//repositioning stuff?
export default class GifTextButton extends React.Component {
  onHover(e) {
    this.inactiveColor = e.target.style.color;
    e.target.style.color = `--var(${this.props.hoverColor})`;
  }

  onLeave(e) {
    e.target.style.color = this.inactiveColor;
  }

  render() {
    return (
      <div
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
        className={this.props.className}>
            <img src={require(this.props.gifName)} alt="" />
            <Link to={this.props.href}>
               {this.props.text}
            </Link>
      </div>
    );
  }
}
