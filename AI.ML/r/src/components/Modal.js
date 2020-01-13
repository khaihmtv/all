import React from "react";
import { withModal } from "../contexts/modal";

class Modal extends React.Component {
  onModalClick = event => {
    if (!this.modalContent.contains(event.target)) {
      this.props.showModal(false);
    }
  };

  render() {
    return (
      <div onClick={this.onModalClick} className="modal">
        <div ref={el => (this.modalContent = el)} className="modal-content">
          Modal content
        </div>
      </div>
    );
  }
}

export default withModal(Modal);
