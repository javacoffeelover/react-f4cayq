import React, {Component} from "react";
import ReactDOM from "react-dom"; 

class Counter extends Component {
  state = {count:0,
  imageUrl: 'https://picsum.photos/200'};

  styles = {
    fontWeight:10,
    fontWeight: "bold"
  };
  render() {


    return(
    <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </div>);
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 alert-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }


}

export default Counter;