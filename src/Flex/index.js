import React, { Component } from "react";
import PropTypes from "prop-types";
class App extends Component {
  render() {
    let flexDirection = this.props.direction === "horizontal" ? "row":"column"
    let flex =  this.props.variant === "center" ? 1 : 0
    const styles = {
      loader: {
        display: "flex",
        flex,
        alignItems: "center",
        flexDirection,
        justifyContent: "center",
        ...this.props.style, 
        // backgroundColor: "#394A5E"
      }
    };
    
    return (
      <div style={styles.loader}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  direction: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object,
};

App.defaultProps = {
  direction: "horizontal"
}


export default App;
