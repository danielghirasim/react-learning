import React from 'react';

function DemoOutput(props) {
  console.log('Demo Component Running.');
  return <p>{props.onShow ? 'This is new!' : ''}</p>;
}

export default React.memo(DemoOutput);
