import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Play />
        <WarBoard />       
      </div>
    );
  };
}

// class Settings extends React.Component {
//   constructor(props) {
//     this.state = {
//       isOpened : false
//     }
//   }

//   openModal = () => {
//     this.setState({ isOpened: true });
//   }
 
//   closeModal = () => {
//     this.setState({isOpened: false });
//   }

//   render() {
//     return(
//       <Modal isOpen={this.state.isOpened}>
//         <div>
//           Hello Modal！
//         </div>
//         <button onClick={this.closeModal}>Cancel</button>
//       </Modal>
//     );
//   };
// }

class Play extends React.Component {

  handleClick() {
    // DialogCustom.show({ onOk: this.handleOk });
  }

  render() {
    return(
      <button className="playbutton" onClick="handleClick">Play</button>
    );
  };
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class WarBoard extends React.Component {

  constructor(props) {
    super(props);
    this.props = {
      scope : 10
    };
  }
  
  

  renderSquare() {
    return <Square />;
  }

  render() {
    let lengthList = Array(100).fill(0);
    const row = lengthList.map((num) => <Square />);
    const table = lengthList.map((num) => <div className="board-row">{row}</div>);
    return ( 
      <div>
        {table}
      </div>);
  };
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
