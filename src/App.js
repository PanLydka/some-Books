import React, { Component } from "react";
import { BooksList } from "./components/BooksList";
import { booksFetched } from "./actions";
import { connect } from "react-redux";

class AppContainer extends Component {
  componentDidMount() {
    fetch("http://localhost:3001/books/")
      .then(res => res.json())
      .then(res => this.props.booksFetched(res));
  }

  render() {
    return (
      <div className="App">
        <BooksList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = { booksFetched };

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
