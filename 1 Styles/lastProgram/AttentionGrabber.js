/*   
STEP-2 

These styles are all you’ve got! You’re going to have to use them in both Home.js and AttentionGrabber.js.

In Home.js, create a new line after import { AttentionGrabber } from './AttentionGrabber';. 
On your new line, import styles from styles.js.

styles.js, Home.js, and AttentionGrabber.js all share the same parent directory.

Create a new line after import React from 'react';. On your new line, import your exported styles variable again
*/


import React from 'react';
import { styles } from './styles';

// DEFINE NEW VARIABLE
const h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

//In AttentionGrabber‘s render function, give the <h1> a style attribute of {h1Style}.
export class AttentionGrabber extends React.Component {
	render() {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
}