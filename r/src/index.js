import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";
import "./styles.css";
import { Provider } from "./contexts/modal";
import ChildComponent from "./components/ChildComponent";

class App extends React.Component {
  state = {
    isShowModal: false
  };

  showModal = (bool = true) => {
    this.setState({ isShowModal: bool });
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <Provider
        value={{
          isShowModal: isShowModal,
          showModal: this.showModal
        }}
      >
        <div className="App">
          <h1>Try new context API</h1>
          <button onClick={this.showModal}>Open modal from parent</button>
          <ChildComponent />
          {isShowModal && <Modal />}
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
