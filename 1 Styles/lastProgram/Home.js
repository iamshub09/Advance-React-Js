/*   
STEP-2 

These styles are all you’ve got! You’re going to have to use them in both Home.js and AttentionGrabber.js.

In Home.js, create a new line after import { AttentionGrabber } from './AttentionGrabber';. 
On your new line, import styles from styles.js.

styles.js, Home.js, and AttentionGrabber.js all share the same parent directory.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles';


// DEFINE NEW VARIABLE
const divStyle = {
  background: styles.background,
  height:     '100%' 
};

//In Home‘s render function, give the <div> a style attribute of {divStyle}
export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
	<Home />, 
	document.getElementById('app')
);