import React from "react";
import { ReactSVG } from 'react-svg'
import './index.css';
export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arms:null,
            isSelected:false,
        }
    }

    handleClick(){

    }

    seletSquare() {
        if (this.state.isSelected === false) {
            this.setState({
                arms:this.state.arms,
                isSelected:true,
            })
            //TODO 
        }
    }


    render() {
      //console.log("Square key " + this.props.i)
      return (
        <button className="square"  onClick={this.handleClick()}>
          <ReactSVG src={this.props.svgSrc}/>
        </button>
      );
    }
}

// class SoilderData {
//     constructor(blood,defense,damage,money) {
//         this.blood = blood;
//         this.defense = defense;
//         this.damage = damage;
//         this.money = money;
//     }
// }


// class Soldier{
//     constructor(props){
//         super(props);
        
//     }
// }

// // 骑兵
// class Cavalry extends Soldier {
//     constructor(props){
//         super(props);
//         this.state = {
//             data : new SoilderData(),
//             strikingDistance : 1
            
//         };
//     }
// }

// // 弓箭兵
// class Archers extends Soldier {
//     constructor(props){
//         super(props);
//         this.state = {data : new SoilderData(),strikingDistance : 1};
//     }
// }

// //步兵
// class Infantry extends Soldier {
//     constructor(props){
//         super(props);
//         this.state = {data : new SoilderData(),strikingDistance : 1};
//     }
// }

// function test() {

// }

