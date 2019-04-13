import React from 'react';

/*
Look at the GuineaPigs component class, starting on line 11. 
This is going to be your 
presentational component class. 
That means that its only job will be to render HTML-like JSX.
*/
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
