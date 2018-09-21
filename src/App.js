import React, { Component } from "react";
import { BooksList } from "./components/BooksList";
import NewBookForm from "./components/NewBookForm";
import { booksFetched, bookRemoved, bookAdd } from "./actions";
import { connect } from "react-redux";
import axios from "axios";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repsonse: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/books")
      .then(res => res.data)
      .then(data => this.props.booksFetched(data))
      .catch(error => console.log(error.message));
  }

  removeBook = e => {
    const id = e.target.id;

    axios.get("http://localhost:3001/books/" + id).then(response => {
      this.setState({ response: response.data });
    });

    axios
      .delete("http://localhost:3001/books/" + id)
      .then(res => this.props.bookRemoved(this.state.response))
      .catch(error => console.log(error.message));
  };

  handleAddBook = data => {
    axios
      .post("http://localhost:3001/books", data)
      .then(res => res.data)
      .then(data => this.props.bookAdd(data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <BooksList books={this.props.books} removeBook={this.removeBook} />
        <NewBookForm onSubmit={this.handleAddBook} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = {
  booksFetched,
  bookRemoved,
  bookAdd
};

const decorate = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default decorate(AppContainer);
