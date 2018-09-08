import React from 'react';
import ReactDOM from 'react-dom';
import Button from './App';
import Webcam from './Webcam';
import Images from './Images';
import SearchApp from './Fetch';

// import Images from './Images';

window.onload = () => {

  ReactDOM.render(
    <div>
      <Button />
      <Webcam />
      <Images />
      <SearchApp />
     </div>,
    document.querySelector('#container')
  );
};
