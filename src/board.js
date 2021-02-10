import React from "react";
import Square from './soldier';
import './index.css';

export default class WarBoard extends React.PureComponent  {
  
    constructor(props) {
      super(props);

      let lengthList = Array(100).fill(0);
      const table = lengthList.map((num ,index) => <Square i={index}/>)
     

      this.state ={
          table:table
      }
    }

    componentDidMount(){
        this.props.onRef(this)
    }
   
    layout(partyABuy, partyBBuy) {
        let map = new Map();
        for (let i = 0; i < partyABuy.b;i++) {
            map.set(i, 'svg/bubing.svg');
        }

        for (let i = 0; i < partyABuy.g;i++) {
            map.set(i + 10, 'svg/gongjianbing.svg');
        }

        for (let i = 0; i < partyABuy.q;i++) {
            map.set(i + 20, 'svg/qibing.svg');
        }

        for (let i = 0; i < partyBBuy.b;i++) {
            map.set(i + 90, 'svg/bubing.svg');
        }

        for (let i = 0; i < partyBBuy.g;i++) {
            map.set(i + 80, 'svg/gongjianbing.svg');
        }

        for (let i = 0; i < partyBBuy.q;i++) {
            map.set(i + 70, 'svg/qibing.svg');
        }


        console.log(map);

        let lengthList = Array(100).fill(0);
        const table = lengthList.map(function(num ,index) {
            
            if (!map.has(index)) {
                return <Square />;
            } else {
                console.log(map.get(index));
                return <Square svgSrc={map.get(index)}/>;
            }          
        })


        this.setState({
            table:table
        });
    }
  
    // renderSquare() {
    //   return <Square />;
    // }
  
    render() {
      return ( 
        <div>
          {this.state.table}
        </div>) ;

    }
  }

  class Row extends React.Component {
      render() {
          return <div className="board-row" >{this.props.data}</div>;         
      }
  }