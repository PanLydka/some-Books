export const books = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return [...action.books];
    case "REMOVED_BOOK_SUCCESS":
      const newStateBooks = state.filter(
        book => JSON.stringify(book) !== JSON.stringify(action.book)
      );
      return newStateBooks;
    case "ADD_BOOK_SUCCESS":
      return [...state, action.book];
    default:
      return state;
  }
};
