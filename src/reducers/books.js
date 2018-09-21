export const books = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return [...action.books];
    case "REMOVED_BOOK_SUCCESS":
      return state;
    case "ADD_BOOK_SUCCESS":
      return [...state, action.book];
    default:
      return state;
  }
};
