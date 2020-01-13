import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

const AppQuery = gpl`
  query {
    hello
  }
`;

class App extends Component {
  
  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div >
          {this.props.data.hello}
      </div>
    );
  }
}
const AppWithData = graphql(AppQuery)(App);

export default AppWithData;
