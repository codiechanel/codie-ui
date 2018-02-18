import React, {Component} from 'react'
import {render} from 'react-dom'

// import Example from '../../src'
// import Example, { TextBelowIcon } from '../../es'
import Example, { TextBelowIcon, Loader } from '../../src'
// import Example from '../../lib'
// { TextBelowIcon }
import './icon.css'
class Demo extends Component {
  render() {
    return <div>
      <h1>codie-ui Demo sure</h1>
      <Example/>
      <TextBelowIcon iconName="refresh" />
      <Loader />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
