import React from "react";
import './index.css';
export default class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {1}
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

