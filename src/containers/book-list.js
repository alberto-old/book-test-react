import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component {
  renderList () {
    return this.props.books.map ( (book) => {
      return (
        <li
          key = { book.title }
          onClick = { () => this.props.selectBook(book) }
          className = "list-group-item">
          { book.title }
        </li>
      );
    })
  }

  render () {
    return (
      <ul className = "list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is return here will appear as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything return from this function will end up as props
// on the BookList container
function matchDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all our reducers through dispatch
  return bindActionCreators ( { selectBook: selectBook }, dispatch );
}

// Promote BookList from a component to a container - it needs to know about
// this new this dispatch method, selectBook. Make it available as a prop
export default connect (mapStateToProps, matchDispatchToProps)(BookList);
