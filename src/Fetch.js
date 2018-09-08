import React from 'react';
//import imgBase from './Images';
//import imgYou from './Webcam';

class SearchApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      score: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let data = new FormData();
    const img1 = {
        uri: element, name: 'image.jpg', type: 'image/jpg'
      }
      data.append('upload', img1)
    const img2 = {
        uri: element, name: 'image.jpg', type: 'image/jpg'
      }
      data.append('upload', img2);

    let url = 'https://api.github.com/users/repos';
    fetch(url).
      then(response => response.json()).then((score) => {
      console.log(score);
      this.setState({
        score: score
      });
    });
  };

  render() {
    return (
      <div className="app-container">
        <h3>React fetch example</h3>
         <button onClick={this.handleClick}>Get Score</button>
        <h2>{this.state.score}</h2>
      </div>
    )
  }
}

export default SearchApp;