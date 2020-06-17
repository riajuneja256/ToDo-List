import React from 'react';
import '../common.css';
import { connect } from "react-redux";
import { addToDo } from "../actions/action";

class InputElement extends React.Component{
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addToDo(this.state.input); 
    this.setState({ input: "" });
  };

  render(){
    return(
      <div>
        <div className="heading1">My To Do List!</div>
        <label htmlFor="fname" className="inputLabel">Add Something: </label>
        <input type="text"  onChange={e => this.updateInput(e.target.value)} ></input>
        <button className="addButton" onClick={this.handleAddTodo}>ADD</button>
      </div>
    );
  }
}

const mapStateToProps = (reducerData) => {
  return {
    ReducerData1:reducerData,
  };
};

const mapDispatchToProps = {
  addToDo,
};
export default connect(mapStateToProps, mapDispatchToProps)(InputElement);