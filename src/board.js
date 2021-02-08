import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import Square from './soldier';
import './index.css';
const ReactGridLayout = WidthProvider(RGL);

export default class WarBoard extends React.PureComponent  {

    static defaultProps = {
        className: "layout",
        isDraggable: true,
        isResizable: true,
        items: 100,
        rowHeight: 20,
        onLayoutChange: function() {},
        cols: 10
    };
  
    constructor(props) {
      super(props);
      const layout = this.generateLayout();
    //   const layout = [{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    //   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    //   {i: 'c', x: 4, y: 0, w: 1, h: 2}];

      this.state = { layout };
    }
    
    moveSquare(x,y) {
  
    }

    onLayoutChange(layout) {
      this.props.onLayoutChange(layout);
    }

    generateDOM() {
        return _.map(_.range(100), function(i) {
          return (
            <div key={i}>
                <Square></Square>
            </div>        
          );
        });
      }
  
    generateLayout() {
      const p = this.props;
      //console.log(p.items);
      console.log(_.map(new Array(100), function(item, i) {
        //const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        //console.log(i);
        //const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        return {
            x: parseInt(i / 10),
            y: i % 10,
            w: 1,
            h: 1,
            i: i.toString()
            };
        }));
      return _.map(new Array(100), function(item, i) {
        //const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        //console.log(i);
        //const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        return {
            x: parseInt(i / 10),
            y: i % 10,
            w: 1,
            h: 1,
            i: i.toString()
            };
        });
    }
  
    // renderSquare() {
    //   return <Square />;
    // }
  
    render() {
      // let lengthList = Array(10).fill(0);
      // const row = lengthList.map((num) => <Square />);
      // const table = lengthList.map((num) => <div className="board-row">{row}</div>);
      // return ( 
      //   <div>
      //     {table}
      //   </div>) ;
      // const {items, ...props} = this.props;
      return (
        <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange} {...this.props}>
          {this.generateDOM()}
        </ReactGridLayout>
      );
    }
  }