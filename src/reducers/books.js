export const books = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return [...action.books];
    default:
      return state;
  }
};
