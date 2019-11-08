import React from "react";
import { withModal } from "../contexts/modal";

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>Child component</h3>
        <button onClick={this.props.showModal}>
          open modal from child component
        </button>
      </div>
    );
  }
}

export default withModal(ChildComponent);
