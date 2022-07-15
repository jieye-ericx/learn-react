import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9)
            .fill(1)
            .map((e, i) => i + 1),
          loc: [-1, -1],
        },
      ],
      flag: true,
      stepNumber: 0,
      re: false,
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      flag: step % 2 === 0,
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.flag ? "X" : "O";
    let newloc = [Math.floor(i / 3) + 1, i % 3];
    this.setState({
      history: this.state.re
        ? history.unshift([
            {
              squares: squares,
              loc: newloc,
            },
          ])
        : history.concat([
            {
              squares: squares,
              loc: newloc,
            },
          ]),
      stepNumber: history.length,
      flag: !this.state.flag,
    });
  }
  rever() {
    this.setState({
      re: !this.state.re,
      history: this.state.history.reverse(),
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move, arr) => {
      let desc;
      if (this.state.re) {
        desc = move ? "Go to move #" + (arr.length - move) : "Go to game start";
      } else desc = move ? "Go to move #" + move : "Go to game start";
      desc += " loc: " + step.loc;
      return (
        <div>
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        </div>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.flag ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.rever()}>反转历史记录</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
