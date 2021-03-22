import React, { Component } from "react";
import Button from "./components/Button";
import "./components/css/style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      previous: [],
      nextIsReset: false,
    };
  }

  render() {
    const buttons = [
      { symbol: "C", cols: 3 },
      { symbol: "/", cols: 1 },
      { symbol: "7", cols: 1 },
      { symbol: "8", cols: 1 },
      { symbol: "9", cols: 1 },
      { symbol: "*", cols: 1 },
      { symbol: "4", cols: 1 },
      { symbol: "5", cols: 1 },
      { symbol: "6", cols: 1 },
      { symbol: "-", cols: 1 },
      { symbol: "1", cols: 1 },
      { symbol: "2", cols: 1 },
      { symbol: "3", cols: 1 },
      { symbol: "+", cols: 1 },
      { symbol: "0", cols: 2 },
      { symbol: ".", cols: 1 },
      { symbol: "=", cols: 1 },
    ];

    return (
      <div className="App">
        {this.state.previous.length > 0 ? (
          <div className="floaty-last">
            {this.state.previous[this.state.previous.length - 1]}
          </div>
        ) : null}
        <input type="text" className="result" value={this.state.current} />

        {buttons.map((btn, i) => {
          return (
            <Button
              key={i}
              symbol={btn.symbol}
              cols={btn.cols}
             
            />
          );
        })}
      </div>
    );
  }
}

export default App;
