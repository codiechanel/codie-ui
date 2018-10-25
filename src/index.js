// export { default as Loader } from './Loader';
// export { default as TextBelowIcon } from './TextBelowIcon';

// module.exports = {
// //   Loader,
//   TextBelowIcon
// };


// export Loader from './Loader';
import React, { Component } from 'react'
import TextBelowIcon from './TextBelowIcon';
import Loader from './Loader';
import SlidePanel from './SlidePanel'
import Animated from './Animated'
import Animated2 from './Animated2'
import IconText from './IconText'
import Flex from './Flex'
import Utils from './Utils'


export { Utils, TextBelowIcon, Loader, SlidePanel, Animated, Animated2, IconText, Flex };

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React nice components</h2>
    </div>
  }
}
