import React from 'react';

function DemoOutput(props) {
  return <p>{props.onShow ? 'This is new!' : ''}</p>;
}

export default DemoOutput;
