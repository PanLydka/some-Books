import * as actions from "../actions/index";

describe("actions", () => {
  it("should create an action to fetched a book", () => {
    const books = [
      {
        id: 1,
        title: "title1",
        link: "link1"
      },
      {
        id: 2,
        title: "title2",
        link: "link2"
      }
    ];

    const expectedAction = {
      type: "FETCH_BOOKS_SUCCESS",
      books
    };

    expect(actions.booksFetched(books)).toEqual(expectedAction);
  });

  it("should create an action to add a book", () => {
    const book = {
      id: 1,
      title: "title1",
      link: "link1"
    };

    const expectedAction = {
      type: "ADD_BOOK_SUCCESS",
      book
    };

    expect(actions.bookAdd(book)).toEqual(expectedAction);
  });

  it("should create an action to removed a book", () => {
    const book = {
      id: 1,
      title: "title1",
      link: "link1"
    };

    const expectedAction = {
      type: "REMOVED_BOOK_SUCCESS",
      book
    };

    expect(actions.bookRemoved(book)).toEqual(expectedAction);
  });
});
