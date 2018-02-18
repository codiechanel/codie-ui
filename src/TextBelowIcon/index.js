import React, { Component } from 'react'
import {Icon} from 'material-ui'
import {IconButton} from 'material-ui'
// import Avatar from 'material-ui/Avatar'

class App extends Component {
  // constructor(props, ctx) {
  //   super(props, ctx)
  // }
  render() {
    let color = this.props.color ? this.props.color : 'red'
    let theChildren = (
      <Icon style={{ fontSize: 60, color }}>{this.props.iconName}</Icon>
    )
    if (this.props.children) {
      theChildren = this.props.children
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor: 'blue',
          alignItems: 'center'
          // justifyContent: 'center'
        }}
      >
        <IconButton
          // className={classes.menuButton}
          color="primary"
          aria-label="Menu"
          onClick={() => this.props.onClick()}
        >
          {/* <Icon style={{ fontSize: 60, color }}>{this.props.iconName}</Icon> */}
          {theChildren}
        </IconButton>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default App
