/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import GridLayout from 'react-grid-layout';
import Editor from "@monaco-editor/react";
import WarBoard from './board.js';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyABuy:{b:null, g:null, q:null},    
      partyBBuy:{b:null, g:null, q:null}
    }
  }

  setPartyABuy(a) {
    this.setState({
      partyABuy: a,
      partyBBuy:this.state.partyBBuy,
    });
  }

  setPartyBBuy(b) {
    this.setState({
      partyBBuy: b,
      partyABuy:this.state.partyABuy,
    });
  }
  handlePlayClick() {
    //console.log(this.child);
    this.child.layout(this.state.partyABuy,this.state.partyBBuy);
  }

  onRef = (ref) => {
    this.child = ref
  }


  render() {
    return (
      <div>
        <Settings partyABuy={this.state.partyABuy} partyBBuy={this.state.partyBBuy} setPartyABuy={(a) => this.setPartyABuy(a)}  setPartyBBuy={(b) => this.setPartyBBuy(b)} />
        <Play handleClick={() => this.handlePlayClick()} />
        <WarBoard items="10" onRef={this.onRef} /> 
        <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
      </div>
    );
  };
}



class Settings extends React.Component {
  constructor(props) {
    // this.state = {
    //   isOpened : false
    // }
    super(props);
    
    this.cons = {
      partyAMoney:1000,
      partyBMoney:1000,
      bMoney:50,
      gMoney:100,
      qMoney:150,
    }
  }

  setPartyBBuy(b) {
    this.props.setPartyBBuy(b);
  }

  setPartyABuy(a) {
    this.props.setPartyABuy(a);
  }

  onChange(e) {
    //console.log(e.target.value);
    switch(e.target.name) {
      case "A-B":
        if ((this.cons.partyAMoney - this.props.partyABuy.g * this.cons.gMoney
          - this.props.partyABuy.q * this.cons.qMoney - this.cons.bMoney * e.target.value) >= 0) {
          this.setPartyABuy({b:e.target.value, g:this.props.partyABuy.g, q:this.props.partyABuy.q});
          break;
        } else {
          break;
        }    
      case "A-G":
        if ((this.cons.partyAMoney - this.props.partyABuy.b * this.cons.bMoney
          - this.props.partyABuy.q * this.cons.qMoney - this.cons.gMoney * e.target.value) >= 0) {
          this.setPartyABuy({b:this.props.partyABuy.b, g:e.target.value, q:this.props.partyABuy.q});
          break;
        } else {
          break;
        }    
      case "A-Q":
        if ((this.cons.partyAMoney - this.props.partyABuy.b * this.cons.bMoney
          - this.props.partyABuy.g * this.cons.gMoney - this.cons.qMoney * e.target.value) >= 0) {
            
          this.setPartyABuy({b:this.props.partyABuy.b, g:this.props.partyABuy.g, q:e.target.value});
          break;
        } else {
          break;
        }   
      case "B-B":
        if ((this.cons.partyBMoney - this.props.partyBBuy.g * this.cons.gMoney
          - this.props.partyBBuy.q * this.cons.qMoney - this.cons.bMoney * e.target.value) >= 0) {
          this.setPartyBBuy({b:e.target.value, g:this.props.partyBBuy.g, q:this.props.partyBBuy.q});
          break;
        } else {
          break;
        }
      case "B-G":
        if ((this.cons.partyBMoney - this.props.partyBBuy.b * this.cons.bMoney
          - this.props.partyBBuy.q * this.cons.qMoney - this.cons.gMoney * e.target.value) >= 0) {
          this.setPartyBBuy({b:this.props.partyBBuy.b, g:e.target.value, q:this.props.partyBBuy.q});
          break;
        } else {
          break;
        }   
      case "B-Q": 
        if ((this.cons.partyBMoney - this.props.partyBBuy.b * this.cons.bMoney
          - this.props.partyBBuy.g * this.cons.gMoney - this.cons.qMoney * e.target.value) >= 0) {
          this.setPartyBBuy({b:this.props.partyBBuy.b, g:this.props.partyBBuy.g, q:e.target.value});
          break;
        } else {
          break;
        }  
    }
  }

  render() {
    return(
      <div>
        <p>价格表</p>
        <p>步兵：{this.cons.bMoney}</p>
        <p>弓箭兵：{this.cons.gMoney}</p>
        <p>骑兵：{this.cons.qMoney}</p>
        <p>甲方阵营一共有{this.cons.partyAMoney - this.props.partyABuy.b * this.cons.bMoney - this.props.partyABuy.g * this.cons.gMoney - this.props.partyABuy.q * this.cons.qMoney}枚金币</p>
        <label>步兵：<input type="text" value = {this.props.partyABuy.b} name="A-B" onChange={this.onChange.bind(this)}></input></label>
        <label>弓箭兵：<input type="text" value = {this.props.partyABuy.g} name="A-G" onChange={this.onChange.bind(this)}></input></label>
        <label>骑兵：<input type="text" value = {this.props.partyABuy.q} name="A-Q" onChange={this.onChange.bind(this)}></input></label>    
        <p>乙方阵营一共有{this.cons.partyBMoney - this.props.partyBBuy.b * this.cons.bMoney - this.props.partyBBuy.g * this.cons.gMoney - this.props.partyBBuy.q * this.cons.qMoney}枚金币</p>
        <label>步兵：<input type="text" value = {this.props.partyBBuy.b} name="B-B" onChange={this.onChange.bind(this)}></input></label>
        <label>弓箭兵：<input type="text" value = {this.props.partyBBuy.g} name="B-G" onChange={this.onChange.bind(this)}></input></label>
        <label>骑兵：<input type="text" value = {this.props.partyBBuy.q} name="B-Q" onChange={this.onChange.bind(this)}></input></label> 
      </div>
    );
  };
}

class Play extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return(
      <button className="playbutton" onClick={this.handleClick}>Play</button>
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




// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
