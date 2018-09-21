export const booksFetched = books => ({
  type: "FETCH_BOOKS_SUCCESS",
  books
});

export const bookAdd = book => ({
  type: "ADD_BOOK_SUCCESS",
  book
});

export const bookRemoved = book => ({
  type: "REMOVED_BOOK_SUCCESS",
  book
});
