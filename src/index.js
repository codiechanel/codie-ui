// export { default as Loader } from './Loader';
// export { default as TextBelowIcon } from './TextBelowIcon';

// module.exports = {
// //   Loader,
//   TextBelowIcon
// };


// export Loader from './Loader';
import React, {Component} from 'react'
import TextBelowIcon from './TextBelowIcon';
import Loader from './Loader';
import SlidePanel from './SlidePanel'
import Animated from './Animated'
import IconText from './IconText'


export { TextBelowIcon, Loader, SlidePanel, Animated, IconText };

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React nice components</h2>
    </div>
  }
}
