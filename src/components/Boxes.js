import React from 'react';
import { connect } from "react-redux";
import { addToDo } from "../actions/action";


class Outer extends React.Component{
  render(){
    return(
      <div>
          <div className="blockParent">
          <center>
          <div className="subHeading">New Todo's</div>
            <div className="block">
              <div className="subBlock">
                <div className="subBlock1">
                  <div className="taskName">ff</div>
                </div>
                <div className="subBlock2">
                  <div className="checkboxParent">
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input> 
                  </div>
                </div>
                </div>
              </div>
          </center>
        </div>
        <div className="blockParent">
          <center>
          <div className="subHeading">Completed Todo's</div>
            <div className="block">
              <div className="subBlock">
                <div className="subBlock1">
                  <div className="taskName">Something</div>
                </div>
                <div className="subBlock2">
                  <div className="checkboxParent">
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input> 
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (ourReducer) => {
  console.log(ourReducer);

  return {
    inputData: ourReducer
  };
  
}

const mapDispatchToProps = {
  addToDo
};
export default connect(mapStateToProps, mapDispatchToProps)(Outer);
