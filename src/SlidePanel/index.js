import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withTheme } from "material-ui/styles";
import "./styles.css";
class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    console.log("i got the theme ", props, "muiThemeProviderOptions ");
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    console.log(
      "componentDidMount cool",
      ReactDOM.findDOMNode(this).parentNode.style,
      "what damn"
    );
    console.log(
      "componentDidMount cool",
      ReactDOM.findDOMNode(this).parentNode.className,
      "what damn"
    );

    //  For getting the specific style value
    // console.log(window.getComputedStyle(React.findDOMNode(this.refs.container)).getPropertyValue("border-radius"));
    // console.log(
    //   window
    //     .getComputedStyle(ReactDOM.findDOMNode(this).parentNode)
    //     .getPropertyValue("margin-top")
    // );
    this.parentMarginTop = window
    .getComputedStyle(ReactDOM.findDOMNode(this).parentNode)
    .getPropertyValue("margin-top")
    //  ReactDOM.findDOMNode(this).parentNode.getAttribute("id")
  }
  componentDidUpdate() {
    if (this.props.show) {
      let height = `${this.props.height}px`
      ReactDOM.findDOMNode(this).parentNode.style.marginTop = height;
    }
    else { 
      ReactDOM.findDOMNode(this).parentNode.style.marginTop = this.parentMarginTop
    }
  }
  render() {
    let height = `-${this.props.height}px`
    let top = this.props.show ? "0px" : height;

    console.log("height",height);
    
    return (
      <div className="message"  style={{ overflow: "hidden",  top: top, position: "absolute", 
        left: 0,  height: this.props.height }}>
       {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  height: PropTypes.number.isRequired, 
  show:  PropTypes.bool.isRequired, 
};
export default withTheme()(App);
